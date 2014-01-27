var express = require('express'); //a dependency, needs to use the code for express
var app = express(); //just executing express as a function

app.get('/', function(req, res) { //request and response object, the basic url for the '/'
	res.send('Hello World\n');
});
app.listen(8000);