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
var table = {previous_sponsors: [], partners:[], nonprofits:[]};
var files = fs.readdirSync(path.resolve(__dirname, "../img/logos"));
function getSrc(card, callback) {
    card.name = card.name.replace('.', '');
    for(let file of files) {
        file = file.replace(" ", "").toLowerCase();
        if(file.indexOf(card.name) != -1)
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
        return callback(null, S(sub.slice(0, sub.indexOf(" "))).ensureLeft("https://").s);
    }
    request("https://google.com/search?q="+card.name, function(error, response, body) {
        var doc = cheerio.load(body);
        var href = S(striptags(doc("cite").first().text())).ensureLeft("https://").s;
        callback(error, href);
    });
}
function getObjectForName(card, key, array, callback) {
    var object = {};
    for(let item of source[key]) {
        if(item.name) {
            item.name = item.name.replace(' ', "").toLowerCase();
            if(item.name.indexOf(card.name) != -1)
            {
                array.push(item);
                return;
            }
        }
    }
    async.applyEach([getSrc, getHref], card, function(err, results){
        if(results[0] && results[1])
            array.push({src: results[0], href: results[1]});
        callback(err);
    });
}
function parseList(error, response, body, call) {
    body = JSON.parse(body);
    async.each(body, function(card, callback) {
        card.name = card.name.replace(" ","").toLowerCase();
        console.log(card.name);     
        if(card.labels.length > 0) {
            for(let label of card.labels) {
                if(label.name == "Nonprofit") {
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
    fs.writeFileSync(path.join(__dirname, "generate_map.json"), JSON.stringify(table, null, '\t'));
});