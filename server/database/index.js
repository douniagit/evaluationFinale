'use strict';
const mongoose = require('mongoose');
const users=require('./models/users');
const ressources=require('./models/ressources');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:tsukino@ds155490.mlab.com:55490/monboudoir'); 

mongoose.connection.on('error',err=>{
	console.log('ERROR close MongoDB process',err)});

mongoose.connection.on('connected',function(){
	console.log('MongoDB connection succes on blog-db')
});

mongoose.connection.on('disconnected',function(){
	console.log('MongoDB connection disconnected')
});

process.on('SIGINT', function() {
	mongoose.connection.close(function(){
		console.log('Server process terminated. closing blog-db')
		process.exit(0);
	});
});

const db = {
	users:mongoose.model('Users', users),
	ressources:mongoose.model('Ressources', ressources)
}

module.exports=db;
