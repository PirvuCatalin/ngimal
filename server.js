const express = require('express');
const http = require('http')
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/dist/ngimal')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));