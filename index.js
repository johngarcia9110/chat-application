var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var path = require('path');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, 'public')));

http.listen(3000, function(){
  console.log('listening on *:3000');
});
