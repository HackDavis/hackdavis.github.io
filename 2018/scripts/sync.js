var request = require('request');
var fs = require('fs');
var async = require('async');
var path = require('path');
var striptags = require('striptags');
var S = require('string');
const cheerio = require('cheerio');
const {API, token, idYes, idContract, idMoney} = require('./token.js');
var optionsYes = {
    method: 'GET',
    url: `https://trello.com/1/lists/${idYes}/cards?key=${API}&token=${token}`
}
var optionsContract = {
    method: 'GET',
    url: `https://trello.com/1/lists/${idContract}/cards?key=${API}&token=${token}`
}
var optionsMoney = {
    method: 'GET',
    url: `https://trello.com/1/lists/${idMoney}/cards?key=${API}&token=${token}`
}

var source = JSON.parse(fs.readFileSync(path.resolve(__dirname, "initial_map.json"), {encoding: 'utf-8'}));
source.previous_sponsors = source.previous_sponsors.filter(function(val){
    if(val.name) return true;
});
source.partners = source.partners.filter(function(val){
    if(val.name) return true;
});
source.nonprofits = source.nonprofits.filter(function(val){
    if(val.name) return true;
});

var table = {previous_sponsors: [], partners:[], nonprofits:[]};
var files = fs.readdirSync(path.resolve(__dirname, "../img/logos"));
function getSrc(card, callback) {
    card.name = card.name.replace('.', '');
    for(let file of files) {
	let f = file.replace(" ", "").toLowerCase();
        if(f.indexOf(card.name) != -1)
        {
            var ret = "/img/logos/" + file;
            callback(null, ret);
            return;
        }
    }
    callback(null, "");
}
function getHref(card, callback) {
    if(card.desc.includes("link:")) {
        let sub = card.desc.slice(card.desc.indexOf("link: ") + 6);
        let string = S(sub.slice(0, sub.indexOf("\n")));
        var href;
        if(string.contains("https://")) href = string.s;
        else href = string.ensureLeft("http://").s;
        return callback(null, href);
    }
    request("https://google.com/search?q="+card.name, function(error, response, body) {
        var doc = cheerio.load(body);
        let string = S(striptags(doc("cite").first().text()));
        var href;
        if(string.contains("https://")) href = string.s;
        else href = string.ensureLeft("http://").s;
        callback(error, href);
    });
}
function getObjectForName(card, key, array, callback) {
    var object = {};
    var amount = null;
    if(card.desc.includes("amount:")) {
        let sub = card.desc.slice(card.desc.indexOf("amount: ") + 8);
        let string = sub.indexOf("\n") != -1 ? sub.slice(0, sub.indexOf("\n")) : sub;
        amount = Number(string);
    }
    for(let item of source[key]) {
        item.name = item.name.split(' ').join('').toLowerCase();
        if(item.name.indexOf(card.name) != -1)
        {
            item.amount = amount;
            array.push(item);
            return callback(null);
        }
    }
    async.applyEach([getSrc, getHref], card, function(err, results){
        if(results[0] && results[1]) {
            let obj = {src: results[0], href: results[1]};
            if(amount) obj.amount = amount;
            array.push(obj);
        }
        callback(err);
    });
}
function parseList(error, response, body, call) {
    body = JSON.parse(body);
    async.each(body, function(card, callback) {
        card.name = card.name.split(' ').join('').toLowerCase();
        console.log(card.name);     
        if(card.labels.length > 0) {
            for(let label of card.labels) {
                if(label.name == "Non-Profit") {
                    getObjectForName(card, "nonprofits", table.nonprofits, callback);
                }
                else if(label.name == "Partner") {
                    getObjectForName(card, "partners", table.partners, callback);                    
                }
            }
        }
        else {
            getObjectForName(card, "previous_sponsors", table.previous_sponsors, callback);            
        }
    }, call);
}
function makeRequest(options, callback) {
    request(options, (error, response, body) => {parseList(error, response, body, callback)});
}
async.parallel([
    async.apply(makeRequest, optionsYes),
    async.apply(makeRequest, optionsContract),
    async.apply(makeRequest, optionsMoney)
], function(err) {
    if(err)
        console.error(err);
    console.log("done");
    table.previous_sponsors.sort(function(a, b){
        a.amount = a.amount || -1;
        b.amount = b.amount || -1;
        return b.amount - a.amount;
    })
    fs.writeFileSync(path.join(__dirname, "generate_map.json"), JSON.stringify(table, null, '\t'));
});