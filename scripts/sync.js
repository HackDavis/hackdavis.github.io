var request = require('request');
var fs = require('fs');
var async = require('async');
var path = require('path');
var striptags = require('striptags');
var S = require('string');
const {JSDOM} = require('jsdom');
const {API, token, id} = require('./token.js');
var options = {
    method: 'GET',
    url: `https://trello.com/1/lists/${id}/cards?key=${API}&token=${token}`
}
var source = JSON.parse(fs.readFileSync(path.resolve(__dirname, "initial_map.json"), {encoding: 'utf-8'}));
var table = {previous_sponsors: [], partners:[], nonprofits:[]};
var files = fs.readdirSync(path.resolve(__dirname, "../img/logos"));
function getSrc(name, callback) {
    name = name.toLowerCase();
    for(let file of files) {
        file = file.toLowerCase();
        if(file.indexOf(name) != -1)
        {
            var ret = "/img/logos/" + file;
            callback(null, ret);
            return;
        }
    }
    callback(null, "");
}
function getHref(name, callback) {
    request("https://google.com/search?q="+name, function(error, response, body) {
        var doc = new JSDOM(body).window.document;
        callback(null, S(striptags(doc.querySelector('cite').innerHTML)).ensureLeft("https://").s);
    });
}
function getObjectForName(name, key, array, callback) {
    name = name.toLowerCase();
    var object = {};
    for(let item of source[key]) {
        if(item.name) {
            item.name = item.name.toLowerCase();
            if(item.name.indexOf(name) != -1)
            {
                array.push(item);
                return;
            }
        }
    }
    async.applyEach([getSrc, getHref], name, function(err, results){
        array.push({src: results[0], href: results[1]});
        callback(null);
    });
}

request(options, function(error, response, body){
    body = JSON.parse(body);
    async.each(body, function(card, callback){
        let name = card.name;        
        if(card.labels.length > 0) {
            for(let label of card.labels) {
                if(label.name == "Nonprofit") {
                    getObjectForName(name, "nonprofits", table.nonprofits, callback);
                }
                else if(label.name == "Partner") {
                    getObjectForName(name, "partners", table.partners, callback);                    
                }
            }
        }
        else {
            getObjectForName(name, "previous_sponsors", table.previous_sponsors, callback);            
        }
    }, function (error, results) {
        fs.writeFileSync(path.resolve(__dirname, "generate_map.json"), JSON.stringify(table, null, '\t'));
    });
});