var express = require('express'),
	app     = express(),
	server  = require('http').createServer(app),
	path    = require('path'),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var users = ["first user!"]
var passwords = ["first pw!"]

app.get('/', function(request, response){
	response.render('home');
})

app.post('/index_submit', function(request, response){
	console.log(request.body);
	users.push(request.body.username);
	passwords.push(request.body.password);
	response.render('home');
	console.log(users);
})


app.get('/login', function(request, response){
	response.render('login');
})




app.get('/handle1', function(request, response){
	response.render('handle1', {name: "Rachel", faveThings: ["Biology", "Being a Mom", "The Color Orange"]});
})

app.get('/handle2', function(request, response){
	response.render('handle2', {name: "Alex", faveThings: ["Mathematics", "Smokin' Weed", "Playing Piano"]});
})

app.get('/handle3', function(request, response){
	response.render('handle3', {name: "Natalie", faveThings: ["Biology", "Horses", "Driving a Million Miles Forever"]});
})

server.listen(3000, function(){
	console.log("Server is listening on port 3000");
})
