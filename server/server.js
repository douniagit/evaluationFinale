//notre serveur http 
const express = require('express');
const morgan = require('morgan');
const api = require("./api");
const path = require('path');
const PORT= process.env.PORT || 9000;
const app = express();

//pour creer un logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
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

//pour lire le index.html, et react-router renvoie la route au client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

//server side rendering, faire un port différent de react (front)
app.listen(PORT,(err)=>{
	console.log('blog fictif');
})
