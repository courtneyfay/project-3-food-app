require('dotenv').config();
const express = require('express');
const app = express();
const  path = require('path');
let port = process.env.PORT || 3000;

if(!process.env.DYNO) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
  });
}

app.use(express.static(__dirname + '/dist'));

//build all other routes for back end above this route!!
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, function() {
	console.log(`Listening on port ${port}`);
});