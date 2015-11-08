var fs = require("fs"),
	express = require("express"),
	Firebase = require("firebase");

//SETUP

var app = express();
app.use(express.static(__dirname + "/views")); //use static files in ROOT/public folder

var myFirebaseRef = new Firebase("https://hackdavis.firebaseio.com/");

app.listen("3000", "localhost", function(){
	console.log('HackDavis listening at %s:%s...', "localhost", "3000");
});

//ROUTES

app.get("/", function(req, res){ //root dir
    res.render("index.html")
});

app.post('/saveEmail/:email', function(req, res){
	myFirebaseRef.push({
		email: req.params.email
	})
	res.send("success")
})