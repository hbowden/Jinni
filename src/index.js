var express = require('express');
var app = express();
var path = require('path');
var ReactDOMServer = require('react-dom/server');
var reactAddonsPerf = require("react-addons-perf");

require('babel-register')({
    presets: ['es2015', 'react']
});

var Wrapper = require('./public/components/wrapper.js');

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, './public/html/index.html'));
})

app.set('port', 9999);

app.listen(process.env.PORT || app.get('port'), function () {
  console.log('Listening on port: ', app.get('port'));
});