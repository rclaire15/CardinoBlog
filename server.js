
var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/generic', function(req, res){
  res.sendFile(path.join(__dirname, 'views/generic.html'));
});

app.get('/generic2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/generic2.html'));
});

app.get('/generic3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/generic3.html'));
});

 app.get('/generic4', function(req, res){
  res.sendFile(path.join(__dirname, 'views/generic4.html'));
});

  app.get('/generic5', function(req, res){
  res.sendFile(path.join(__dirname, 'views/generic5.html'));
});

 app.get('/gu', function(req, res){
  res.sendFile(path.join(__dirname, 'views/gu.html'));
});

  app.get('/generic6', function(req, res){
  res.sendFile(path.join(__dirname, 'views/generic6.html'));
});

  app.get('/generic7', function(req, res){
  res.sendFile(path.join(__dirname, 'views/generic7.html'));
});
  
  app.get('/generic8', function(req, res){
  res.sendFile(path.join(__dirname, 'views/generic8.html'));
});  
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});