var express = require('express');
var http = require('http');

//create a http server
http.createServer( (req, res)=> {
    res.write('Hello My App!!'); //respond to client
    res.end(); //ends the response
}). listen(8080);