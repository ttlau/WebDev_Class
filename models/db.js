var mongoose = require('mongoose'); //import mongoose

var connect = mongoose.connect('mongodb://localhost/Documents/GitHub/WebDev_Class') //how to connect to database
var db = mongoose.connection;
exports.connect = db; //connected, every file in Node has a special object named exports object. Very simple to connect to the database now

var Schema = mongoose.Schema; //This isn't really necessary, just nice. 

var userSchema = Schema ({ //The structure of our data
	"username" : String,
	"password" : String
});

var User = mongoose.model('User', userSchema);
exports.User = User; //other parts of our code will need it