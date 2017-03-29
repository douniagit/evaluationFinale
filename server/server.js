//notre serveur http
const express = require('express');
const app = express();
const api = require("./api");
const path = require('path');

//pour lier le index.html
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use( function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");// www.google.com monsite.com 143.45.78.23
  response.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use('/api', api);

//pour lire le index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


app.listen(3000,(err)=>{
	console.log('blog fictif');
})
