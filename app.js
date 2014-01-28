	var express = require('express'); //a dependency, needs to use the code for express
	var app = express(); //just executing express as a function, use the express framework

	app.use(express.static(__dirname + '/public')); //telling our application there is a public directory inside our scratch directory
													// which contains a bunch of files which we can seve to our user without going through any routes, static folder
	app.use(express.compress()); //compress the page, reduce bandwidth

	/* DB */
	var db = require ('./models/db'); 
	var User = db.User;
	var connect =db.connect; //connect to the database first

	/* Jade */
	app.set('view engine', 'jade'); // make a view engine
	app.set('views', __dirname = '/views');

	connect. once('open', fucntion callback() { //only allows them to connect to these functions once connected to the database
			app.get('/', function(req, res) { //request and response object, the root url for the '/', if we get a request, then write it, get a page
				res.send('Hello World\n'); //send it, dynamic pages
			});

			app.get('/about', function(req,res){ //pass functions into functions THESE ARE ROUTES THAT THE USER CAN TAKE
				res.send('Here is a little about me'); //send to our user
			}); //closing it 

			app.get('/test', function(req,res){ //pass functions into functions
				res.send('Test passed, A+'); //send to our user, but is just a sentence, usually want to make something prettier
			}); //closing it 

			app.get('/name/:myname', function (req, res){ //colon syntax is a variable, specify the variable my name
				res.send('My name is '+ req.params.myname) //so like localhost:800/name/Tim will return My name is Tim, different pages with people filling in different names
			});

			app.get('/databse', function (req, res)){
				var newUser = new User {
							       "username": "Tim"
							       " password": "test123" });
			        newUser.save(function (e)){
			        	if (e){ //error
			        		console.log(e);
			        		res.send('FAIL!');
			        	}
			        	else
			        		res.send('SUCCESS!');
			        }
			    });
			});
	app.get('/findMe/:user', function (req, res) { //is templating like Facebook profiles: one webpage, but populate the list differently
	        User.findOne( { "username" : req.params.user }, function (err, user) {
	            if (err) {
	                res.send('failure...');
	                }
	            	res.render ('layout', } 'user': user})
	                }
	        });
	    });
	});
	app.listen(8000); //specify that it would run on port 8000 of our own machine, localhost:8000