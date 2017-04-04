'use strict';

const Users = require('../../database').users;
const bcrypt = require('bcrypt');
const jsonwebtoken= require('jsonwebtoken');
const moment= require('moment');


function formatPassword(user){

const salt=bcrypt.genSaltSync(10);
const hash=bcrypt.hashSync(user.mail+user.password,salt);
return{
	mail:user.mail,
	hash:hash
	}

}

function generateToken(user){
	const payload={
		iat:moment().unix(), //isued at issu quand
		exp:moment().add(14,'days').unix(), //perime à la date de
		iss:user.mail, //createur
		sub:user.hash //sujet du token= hash
	}
	return jwt.sign(payload,'app_secret');
}

const auth = {
	//s'inscrire
	register(req,res){

//new user est une instance de User, cette ligne appel la 
		const newUser= new Users(formatPassword(req.body));
		newUser.save()
		.then(data =>{
			const token = generateToken(data);
			res.send(token); //on renvoie au navigateur
		})
		.catch(err=>{
			res.send(err)
		});
	},
	//login
	login (req,res){
		Users.find({mail:req.body.mail})
		.then(users =>{
			if(user.length > 0 && bcrypt.compareSync(req.body.mail+req.body.password, user[0].hash)){
				const token=generateToken(users[0]);
				res.send(token);
			}
			else{
				res.send('wrong password or mail');
			}
		})
		.catch(err =>{
				res.send(err);
		});
	},

	//require token
	requireToken(req,res,next){
		const token = req.get('authorization');
		if(!token)res.send('authorization required');
		jwt.verify(token, 'app_secret',(err, decoded)=>{
			//decoded va etre egal à payload, decode.exp .iss .iat .subject
			if(err || decode.exp > moment().unix()) res.send('unauthorized');
			else next();
		})
	}
}

module.exports = auth;