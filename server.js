const express = require('express');
const http = require('http')
const path = require('path');
var cors = require('cors');

const app = express();

app.use(cors());

app.options('*', cors());

app.use(express.static(path.join(__dirname, '/dist/ngimal')));

app.get("/api", (req, res) => {
    const url = 'https://mysterious-reef.herokuapp.com';
    request(url).pipe(res);
  });

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));