const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine','ejs');

app.get('/', function(req, res){
  console.log(new Date() + " : " + req.connection.remoteAddress + " : " + req.origninalUrl);
  res.render('pages/index');
});

app.get('/about', function(req, res){
  console.log(new Date() + " : " + req.connection.remoteAddress + " : " + req.originalUrl);
  res.render('pages/about');
});

app.get('*', function(req, res){
  console.log(new Date() + " : " + req.connection.remoteAddress + " : " + req.originalUrl);
});

app.listen(8420, function(){
  console.log("Server Listening on Port 8420");
});
