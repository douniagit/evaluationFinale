'use strict';

const Users = require('../../database').users;

const users = {
	create(req,res){
		console.log('Bonjour je suis le createur de user.');
		let newUser= new Users(req.body); //ca signifie var newUser= new UserSchema({name:'admin'})
		newUser.save()
		.then(data =>{
			res.status(200).send('operation reussi: \n' +data)
		})
		.catch(err =>{
			res.status(500).send('operation failed:\n' +err)
		})
	}, //ok fonctionne sur postman
	
	find(req,res){
		console.log('Bonjour je suis le find de user.');
		Users.find({})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	}, //ok fonctionne sur postman

	findByMail(req,res){
		console.log('Bonjour je suis le findByMail de user.');
		//Users.find({mail: req.body.mail})
		Users.find({mail:req.params.mail})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	},//ok fonctionne sur postman

	update(req,res){
		console.log('je suis update de user');
		Users.update({_id:req.params._id})
		.then(data =>{
			if(req.body.name) data.name=req.body.name;
 			if(req.body.firstName) data.username=req.body.username;
 			if(req.body.password) data.password=req.body.password;
			if(req.body.avatar) data.avatar=req.body.avatar;
			if(req.body.mail) data.mail=req.body.mail;
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		}),
		Users.save()
		.then(data=>{
			res.status(200).send("user modifié" + data);
		})		
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	},//KO!!!!!!! fonctionne pas sur postman			

	delete(req,res){
		Users.remove({mail:req.params.mail})
		.then(data=>{
			res.status(200).json({message:"supprimé"});
		}) 
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	} //ok fonctionne sur postman
}

module.exports=users;
