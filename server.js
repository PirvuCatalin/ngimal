const express = require('express');
const http = require('http')
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/dist/ngimal')));

app.use(function (req, res, next) {
    var allowedOrigins = ['https://mysterious-reef.herokuapp.com/'];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS', 'PUT');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

app.use('/api/', 'https://mysterious-reef.herokuapp.com/');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/ngimal/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));