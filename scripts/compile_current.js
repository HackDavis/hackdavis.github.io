const fs = require('fs');
var path = require('path');
var document = fs.readFileSync(path.resolve(__dirname, "../index.html"), {encoding: 'utf-8'});
const {JSDOM} = require('jsdom');
var index = new JSDOM(document).window;
var $ = require('jquery')(index);
var output = {};
var array = [];
for(let sponsor of $("footer > div.row:nth-child(2)").children()) {
    if(sponsor.nodeName == "A")
        array.push({href: sponsor.getAttribute("href"), src: sponsor.firstChild.getAttribute("src")});
}
output.previous_sponsors = array.slice();
array.length = 0;
for(let sponsor of $("footer > div.row:nth-child(4)").children()) {
    if(sponsor.nodeName == "A")    
        array.push({href: sponsor.getAttribute("href"), src: sponsor.firstChild.getAttribute("src")});
}
output.partners = array.slice();
array.length = 0;
for(let sponsor of $("footer > div.row:nth-child(6)").children()) {
    if(sponsor.nodeName == "A")    
        array.push({href: sponsor.getAttribute("href"), src: sponsor.firstChild.getAttribute("src")});
}
output.nonprofts = array;
fs.writeFileSync(path.resolve(__dirname, "initial_map.json"), JSON.stringify(output, null, '\t'));