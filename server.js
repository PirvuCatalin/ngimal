const express = require('express');
const http = require('http')
const path = require('path');
var cors = require('cors');

const app = express();

app.use(cors());

app.options('*', cors());

app.use(express.static(path.join(__dirname, '/dist/ngimal')));

app.get('/api', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/ngimal/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));