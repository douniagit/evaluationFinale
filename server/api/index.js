'use strict';

const users = require('./controllers/users');
const ressources= require('./controllers/ressources');
const bodyParser=require('body-parser');
const auth = require('./controllers/auth');
const { Router } = require('express');

const apiRoutes = new Router();

apiRoutes.use(bodyParser.urlencoded({extended:false}));
apiRoutes.use(bodyParser.json());

//------------------users--------------------
apiRoutes.get('/users', users.find);
apiRoutes.get('/users/:mail', users.findByMail);
apiRoutes.post('/users/login/',auth.login, users.findByMail);
apiRoutes.post('/users/register',auth.register, users.create);
apiRoutes.delete('/users/remove/:id', users.delete);
apiRoutes.put('/users/update/:id', users.update);

//------------------Ressources--------------------
apiRoutes.get('/ressources', ressources.find);
apiRoutes.get('/ressources/:id', ressources.findById);
apiRoutes.post('/ressources/create', ressources.create);
apiRoutes.put('/ressources/update/:id', ressources.update);
apiRoutes.delete('/ressources/remove/:id', ressources.delete);


module.exports = apiRoutes;
