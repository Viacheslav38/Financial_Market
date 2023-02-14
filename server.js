const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
 
 //here we import packages and determine the port of our server
 const app = express();
 
 //here our application gives statics
 app.use(express.static(__dirname));
 app.use(express.static(path.join(__dirname, 'build')));
 
 //simple server test
 app.get('/ping', function (req, res) {
  return res.send('pong');
 });
 
 //html service
 app.get('/*', function (req, res) {
 res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
 app.listen(port);
