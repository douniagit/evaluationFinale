'use strict';

const Ressources=require('../../database').ressources;

const ressources={
	create(req,res){
		console.log('req.body : ', JSON.stringify(req.body));
		let newRessource= new Ressources(req.body);
		newRessource.save()
		.then(data =>{
			console.log('ok : ', JSON.stringify(data));
			res.status(200).send('donnee ajoutee: \n' +data)
		})
		.catch(err =>{
			console.log('ko : ', JSON.stringify(err));
			res.status(500).send('donnee failed:\n' +err)
		});
	},

	find(req,res){
		console.log('Bonjour je suis find de ressources');
		Ressources.find({})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	},

	findById(req,res){
		Ressources.find({_id:req.params._id})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	},
	
	delete: (req,res)=>{
		Users.remove({_id:req.params._id})
		.then(data=>{
			res.status(200).send("article supprimé" + data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	}

}




module.exports=ressources;
