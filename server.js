var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/ngimal";
app.use(express.static(distDir));

const request = require('request');

app.get("/api/get_thingy", function(req, res) {
    
    request('https://mysterious-reef.herokuapp.com/get_thingy', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage. 
        }
    });
});