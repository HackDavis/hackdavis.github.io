const fs = require('fs');
var path = require('path');
var document = fs.readFileSync(path.resolve(__dirname, "../template.html"), {encoding: 'utf-8'});
const {JSDOM} = require('jsdom');
const dom = new JSDOM(document);
var index = dom.window;
var $ = require('jquery')(index);
var table = JSON.parse(fs.readFileSync(path.resolve(__dirname, "generate_map.json"), {encoding: 'utf-8'}));

var row = index.document.createElement("div");
row.setAttribute("class", "row justify-content-center px-5");
var heading = index.document.createElement("h1");
heading.setAttribute("class", "sponsor-heading");
if(table.nonprofits.length > 0){
    heading.innerHTML = "NONPROFITS";
    $("footer").prepend(row);
    $("footer").prepend(heading);
}
row = index.document.createElement("div");
row.setAttribute("class", "row justify-content-center px-5");
heading = index.document.createElement("h1");
heading.setAttribute("class", "sponsor-heading");
if(table.partners.length > 0){
    heading.innerHTML = "PARTNERS";
    $("footer").prepend(row); 
    $("footer").prepend(heading);    
}
let buttonDiv = index.document.createElement("div");
let atag = index.document.createElement("a");
atag.setAttribute("class", "col d-flex justify-content-center no-decorate");
atag.setAttribute("href", "mailto:sponsorship@hackdavis.io");
let button = index.document.createElement("button");
button.setAttribute("id", "sponsor-button");
button.setAttribute("class", "round-button white-button");
button.innerHTML = "Sponsor Us!";
$(atag).prepend(button);
$(buttonDiv).prepend(atag);
$("footer").prepend(buttonDiv);
row = index.document.createElement("div");
row.setAttribute("class", "row justify-content-center align-items-center px-5");
heading = index.document.createElement("h1");
heading.setAttribute("class", "sponsor-heading");
if(table.previous_sponsors.length > 0){
    heading.innerHTML = "SPONSORS";
    $("footer").prepend(row);
    $("footer").prepend(heading);    
}
let count = 0;
for(let [i, sponsor] of table.previous_sponsors.entries()) {
    if(sponsor.src) {
        let tag = index.document.createElement("a");

        /*if(count < 3) {
            tag.setAttribute("class", "col-lg-4 col-md-4 col-sm-6 col-xs-10");
            count++;
        }
        else*/
        if(i < 2) tag.setAttribute("class", "col-lg-10 col-xs-10");
        else if(sponsor.amount >= 4000) tag.setAttribute("class", "col-sm-6 col-xs-10");
        else if(sponsor.amount >= 1000) tag.setAttribute("class", "col-md-4 col-xs-10")
        else tag.setAttribute("class", "col-md-2 col-xs-4");

        tag.setAttribute("href", sponsor.href);
        let image = index.document.createElement("img");
        image.setAttribute("src", sponsor.src);
        tag.appendChild(image);
        $("footer > div.row:nth-child(2)").append(tag);
    }
}

for(let sponsor of table.partners) {
    if(sponsor.src) {
        let tag = index.document.createElement("a");
        tag.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 col-xs-10");
        tag.setAttribute("href", sponsor.href);
        let image = index.document.createElement("img");
        image.setAttribute("src", sponsor.src);
        tag.appendChild(image);
        $("footer > div.row:nth-child(5)").append(tag);                                         
    }
}

for(let sponsor of table.nonprofits) {
    if(sponsor.src) {
        let tag = index.document.createElement("a");
        tag.setAttribute("class", "col-sm-2 col-xs-10");
        tag.setAttribute("href", sponsor.href);
        let image = index.document.createElement("img");
        image.setAttribute("src", sponsor.src);
        tag.appendChild(image);
        $("footer > div.row:nth-child(7)").append(tag);
    }
}

fs.writeFileSync(path.resolve(__dirname, "../index.html"), dom.serialize());