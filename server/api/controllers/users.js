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

	findById(req,res){
		console.log('Bonjour je suis le findById de user.');
		//Users.find({mail: req.body.mail})
		Users.find({_id:req.params.id})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	},//ok fonctionne sur postman

	update(req,res){
		console.log('je suis update de user');
		Users.findByIdAndUpdate({_id:req.params.id})
		.then(user =>{
			user.name=req.body.name;
 			user.firstName=req.body.firstName;
 			user.password=req.body.password;
			user.avatar=req.body.avatar;
			user.mail=req.body.mail;
			//user.save()
			res.status(200).send("user mis à jour" + user);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
		
	}, //ok fonctionne sur postman			

	delete(req,res){
		Users.findByIdAndRemove({_id:req.params.id})
		.then(data=>{
			res.status(200).json({profil:"supprimé"});
		}) 
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	} //ok fonctionne sur postman
}

module.exports=users;
