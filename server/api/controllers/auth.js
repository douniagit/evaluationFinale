'use strict';
const express = require('express');
const Users = require('../../database').users;
const bcrypt = require('bcrypt');
const jsonwebtoken= require('jsonwebtoken');
const moment= require('moment');
const config = require('../../config.js');
const app = express();

app.set('superSecret', config.secret);


function formatPassword(user){
	const salt=bcrypt.genSaltSync(10);
	const hash=bcrypt.hashSync(user.mail+user.password,salt);
	return{
		mail:user.mail,
		firstName:user.firstName,
		name:user.name,
		//(mettre model user ou des elements, hash=password)
		password:hash
		}
	}

function generateToken(user){
	const payload={
		iat:moment().unix(), //isued at issu quand
		exp:moment().add(14,'days').unix(), //perime à la date de
		iss:user.mail, //createur
		sub:user.password //sujet du token= hash
	}
	return jsonwebtoken.sign(payload,app.get('superSecret'));
	console.log(jsonwebtoken.sign);
}


	const auth = {
		register(req,res){
			const newUser= new Users(formatPassword(req.body));
			newUser.save()
			.then(data =>{
				const token = generateToken(data);
				res.send(token);
				//res.redirect('/login');
			})
			.catch(err=>{
				res.send(err)
			});//ok fonctionne sur postman
	},

		login(req,res){
			Users.findOne({mail:req.body.mail})
			.then(users =>{
				console.log(users);
				//if(users.length >0 && bcrypt.compareSync(req.body.mail+req.body.password, users[0].mail)){
				if(users.length >0 && jsonwebtoken.verify(token, app.get('superSecret'))){
					const token=generateToken(users);
					console.log(token);					
					res.status(200).send('operation reussi: \n' + token);
					//res.statut(200).redirect('/logged');
				}
				else{
					res.status(500).send('wrong password or mail');
				}
			})
		.catch(err =>{
					res.send(err);
			});//la condition if avec bcrypt ne marche pas sur postman
		},
		
	//require token
		requireToken(req,res,next){
		const token = req.get('authorization');
		if(!token)res.send('authorization required');
		jsonwebtoken.verify(token, 'app_secret',(err, decoded)=>{
			//decoded va etre egal à payload, decode.exp .iss .iat .subject
			if(err || decode.exp > moment().unix()) res.send('unauthorized');
			else next();
		})
	}
}	

module.exports = auth;