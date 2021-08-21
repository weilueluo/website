const http = require('http');
const express = require('express');
const path = require('path');


const app = express();
app.use(express.json());
app.use(express.static("express"));


const server = http.createServer(app);
const port = 3000;
const appDir = path.join(path.dirname(require.main.filename), 'weilue-personal-website')

app.use('/', function(req, res) {
  res.sendFile(path.join(appDir, 'index.html'));
});


server.listen(port);
console.debug('Server listening on port ' + port);
