'use strict';

const users = require('./controllers/users');
const ressources= require('./controllers/ressources');
const bodyParser=require('body-parser');
const auth = require('./controllers/auth');
const { Router } = require('express');

const apiRoutes = new Router();
// pour définir les routes

apiRoutes.use(bodyParser.urlencoded({extended:false}));
apiRoutes.use(bodyParser.json());

//------------------users--------------------
apiRoutes.get('/users', /*auth.requireToken,*/ users.find);
apiRoutes.get('/users/:mail', users.findByMail);
apiRoutes.post('/users/create', users.create);
apiRoutes.delete('/users/remove/:mail', users.delete);
apiRoutes.put('/users/edit/:id', users.update);

//problemes sur routes:

//le post est reussi seulement si je me mets en raw avec test json sur postman 
//quand je crée un profil qui a le meme nom, ça ne passe pas
//mon put ne marche pas, demande fonction callback


//------------------Ressources--------------------
apiRoutes.get('/ressources', ressources.find);
apiRoutes.get('/users/:id', ressources.findById);
apiRoutes.post('/ressources/create', ressources.create);
apiRoutes.delete('/ressources/remove/:id', ressources.delete);


module.exports = apiRoutes;
