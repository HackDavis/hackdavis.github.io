const fs = require('fs');
var path = require('path');
var document = fs.readFileSync(path.resolve(__dirname, "../template.html"), {encoding: 'utf-8'});
const {JSDOM} = require('jsdom');
const dom = new JSDOM(document);
var index = dom.window;
var $ = require('jquery')(index);
var table = JSON.parse(fs.readFileSync(path.resolve(__dirname, "generate_map.json"), {encoding: 'utf-8'}));

var row = index.document.createElement("div");
row.setAttribute("class", "row justify-content-center");
var heading = index.document.createElement("h1");
heading.setAttribute("class", "sponsor-heading");
heading.innerHTML = "NONPROFITS";
$("footer").prepend(row);
$("footer").prepend(heading);
row = index.document.createElement("div");
row.setAttribute("class", "row justify-content-center");
heading = index.document.createElement("h1");
heading.setAttribute("class", "sponsor-heading");
heading.innerHTML = "PARTNERS";
$("footer").prepend(row);
$("footer").prepend(heading);
row = index.document.createElement("div");
row.setAttribute("class", "row align-items-center");
heading = index.document.createElement("h1");
heading.setAttribute("class", "sponsor-heading");
heading.innerHTML = "PREVIOUS SPONSORS";
$("footer").prepend(row);
$("footer").prepend(heading);
let count = 0;
for(let sponsor of table.previous_sponsors) {
    let tag = index.document.createElement("a");

    if(count < 3) {
        tag.setAttribute("class", "col-lg-4 col-md-4 col-sm-6 col-xs-10");
        count++;
    }
    else
        tag.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 col-xs-10");

    tag.setAttribute("href", sponsor.href);
    let image = index.document.createElement("img");
    image.setAttribute("src", sponsor.src);
    tag.appendChild(image);
    $("footer > div.row:nth-child(2)").append(tag);
}

for(let sponsor of table.partners) {
    let tag = index.document.createElement("a");
    tag.setAttribute("class", "col-lg-2 col-md-4 col-sm-4 col-xs-10");
    tag.setAttribute("href", sponsor.href);
    let image = index.document.createElement("img");
    image.setAttribute("src", sponsor.src);
    tag.appendChild(image);
    $("footer > div.row:nth-child(4)").append(tag);
}

for(let sponsor of table.nonprofits) {
    let tag = index.document.createElement("a");
    tag.setAttribute("class", "col-sm-2 col-xs-10");
    tag.setAttribute("href", sponsor.href);
    let image = index.document.createElement("img");
    image.setAttribute("src", sponsor.src);
    tag.appendChild(image);
    $("footer > div.row:nth-child(6)").append(tag);
}

fs.writeFileSync(path.resolve(__dirname, "../index.html"), dom.serialize());