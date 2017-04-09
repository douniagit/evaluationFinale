const express = require('express');
const morgan = require('morgan');
const api = require("./api");
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));


app.use( function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use('/api', api);

//app.use('https://monboudoir.herokuapp.com/edit');
app.use('http://localhost:3000/edit', (req, res) => {
	console.log("redirection edit");
});
//app.use('https://monboudoir.herokuapp.com/logged');
app.use('http://localhost:3000/logged', (req, res) => {
	console.log("redirection logged");
});
//app.use('https://monboudoir.herokuapp.com/login');
app.use('http://localhost:3000/login', (req, res) => {
  console.log("redirection login");
});
//app.use('https://monboudoir.herokuapp.com/admin');
app.use('http://localhost:3000/admin', (req, res) => {
	console.log("redirection admin");
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(3000,(err)=>{
	console.log('blog fictif');
});
