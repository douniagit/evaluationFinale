'use strict';

const Ressources=require('../../database').ressources;

const ressources={
	create(req,res){
		console.log('Bonjour je suis le create de ressources');
		let newRessource= new Ressources(req.body);
		newRessource.save()
		.then(data =>{
			res.status(200).send('donnee ajoutee: \n' +data);
		})
		.catch(err =>{
			res.status(500).send('donnee failed:\n' +err);
		})
	},//ok fonctionne sur postman

	find(req,res){
		console.log('Bonjour je suis find de ressources');
		Ressources.find({})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err);
		})
	},//on fonctionne sur postman

	findById(req,res){
		Ressources.find({_id:req.params.id})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err);
		})
	},//on fonction sur postman
	
	update(req,res){
		console.log('je suis update de ressources');
		Ressources.findByIdAndUpdate({_id:req.params.id}, {})
		.then(data =>{
			data.name=req.body.name,
 			data.description=req.body.description,
 			data.lien=req.body.lien,
			data.images=req.body.images,
			data.comments.auteur=req.body.auteur,
			data.comments.body=req.body.body,
			data.save()
			res.status(200).send("data mise à jour");
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err);
		})
		
	},

	delete(req,res){
		// Ressources.remove({name:req.params.name})
		Ressources.remove({_id:req.params.id})
		.then(data=>{
			res.status(200).send("article supprimé" + data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err);
		})
	}//ok fonctionne sur postman
}


module.exports=ressources;
