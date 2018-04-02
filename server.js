const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res){
  console.log(new Date() + " : " + req.connection.remoteAddress + " : " + req.origninalUrl + " : " + req.headers.host);
  res.render('pages/index');
});

app.get('/about', function(req, res){
  console.log(new Date() + " : " + req.connection.remoteAddress + " : " + req.originalUrl + " : " + req.headers.host);
  res.render('pages/about');
});

app.get('*', function(req, res){
  if(req.headers.host == "/public/styles/index.css"){
    console.log("Asking for index.css");
  }
  console.log("Blah : " + req.connection.remoteAddress + " : " + req.originalUrl + " : " + req.headers.host);
  res.end();
});

app.listen(8420, function(){
  console.log("Server Listening on Port 8420");
});
