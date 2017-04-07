'use strict';

const Users = require('../../database').users;

const users = {
	create(req,res){
		console.log('Bonjour je suis le createur de user.');
		let newUser= new Users(req.body); 
		newUser.save()
		.then(data =>{
			res.status(200).send('operation reussi: \n' +data);
		})
		.catch(err =>{
			res.status(500).send('operation failed:\n' +err);
		})
	}, //ok fonctionne sur postman
	
	find(req,res){
		console.log('Bonjour je suis le find de user.');
		Users.find({})
		.then(data=>{
			res.status(200).send(data);

		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err);
		})
	}, //ok fonctionne sur postman

	findById(req,res){
		console.log('Bonjour je suis le findById de user.');
		Users.find({_id:req.params.id})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err);
		})
	},//ok fonctionne sur postman

	findByMail(req,res){
		console.log('Bonjour je suis le findByMail de user.');
		Users.find({mail:req.body.mail})
		.then(users=>{
			if(users.mail === req.body.mail){
			res.status(200).send('operation succeed '+users);
			}
			res.redirect('/logged');
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err);
		})
	},

	update(req,res){
		console.log('je suis update de user');
		Users.findByIdAndUpdate({_id:req.params.id})
		.then(user =>{
			user.name=req.body.name,
 			user.firstName=req.body.firstName,
 			user.password=req.body.password,
			user.avatar=req.body.avatar,
			user.mail=req.body.mail,
			user.save()
			res.status(200).send("user mis à jour" + user);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})	
	}, //ok fonctionne sur postman			

	delete(req,res){
		console.log('je suis delete de user');
		Users.findByIdAndRemove({_id:req.params.id})
		.then(data=>{
			res.status(200).json("profil supprimé" + data);
		}) 
		.catch(err=>{
			res.status(500).send("operation failed"+ err);
		})
	} //ok fonctionne sur postman
}

module.exports=users;
