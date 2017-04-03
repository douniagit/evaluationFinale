module.exports={
	name:String,
	description:String,
	lien:String,
	images:String,
	likes:[Number],
	date: { type: Date, default: Date.now },
	comments:[{
		auteur:String,
		body:String,
		date: { type: Date, default: Date.now }
		}],
}

//mon date ne marche pas