'use strict';

const users = require('./controllers/users');
const ressources= require('./controllers/ressources');
const bodyParser=require('body-parser');
const auth = require('./controllers/auth');
const { Router } = require('express');
const auth2=require('./controllers/auth2');
const apiRoutes = new Router();

apiRoutes.use(bodyParser.urlencoded({extended:false}));
apiRoutes.use(bodyParser.json());

//------------------users--------------------
apiRoutes.get('/users', users.find);
apiRoutes.get('/users/:id', users.findById);
apiRoutes.post('/users/register',auth2.register);
apiRoutes.post('/users/login',auth2.login);

//avec du hash - n'arrive pas à decrypter le salt - et n'arrive pas à stocker token
//apiRoutes.post('/users/register',auth.register);
//apiRoutes.post('/users/login', auth.login);

apiRoutes.put('/users/update/:id', users.update);
apiRoutes.delete('/users/remove/:id', users.delete);

//------------------Ressources--------------------
apiRoutes.get('/ressources', ressources.find);
apiRoutes.get('/ressources/:id', ressources.findById);
apiRoutes.post('/ressources/create', ressources.create);
apiRoutes.put('/ressources/update/:id', ressources.update);
apiRoutes.delete('/ressources/remove/:id', ressources.delete);


module.exports = apiRoutes;
