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
apiRoutes.get('/users/:id', users.findById);
apiRoutes.post('/users/create', users.create);
apiRoutes.delete('/users/remove/:id',users.delete);
apiRoutes.put('/users/edit/:id', users.update);

//------------------Ressources--------------------
apiRoutes.get('/ressources', ressources.find);
apiRoutes.get('/ressources/:id', ressources.findById);
apiRoutes.post('/ressources/create', ressources.create);
apiRoutes.put('/ressources/edit/:id', ressources.update);
apiRoutes.delete('/ressources/remove/:id', ressources.delete);


module.exports = apiRoutes;
