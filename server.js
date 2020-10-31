const express = require('express');
const http = require('http')
const path = require('path');
var bodyParser = require('body-parser');

const app = express();

var port = process.env.PORT || 3000;

app.set('port', (port));

var server = http.createServer(app).listen(port, function() {
    console.log('Server listening on port ' + port);
  });
  app.use(bodyParser.urlencoded({extended: true}));
  
  var distDir = __dirname + "/dist/ngimal";
  app.use(express.static(distDir));

  app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
      next();
  });

  app.get('/', (req, res) => {
    res.send('Welcome to your server.');
});;