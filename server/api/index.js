'use strict';

const users = require('./controllers/users');
const ressources= require('./controllers/ressources');
const bodyParser=require('body-parser');
const auth = require('./controllers/auth');
const { Router } = require('express');
var auth2=require('./controllers/auth2');
const apiRoutes = new Router();

apiRoutes.use(bodyParser.urlencoded({extended:false}));
apiRoutes.use(bodyParser.json());

//------------------users--------------------
apiRoutes.get('/users', users.find);
apiRoutes.get('/users/:id', users.findById);
apiRoutes.get('/users', auth2.verify);
apiRoutes.post('/users/login', auth2.findOne);
//apiRoutes.post('/users/login', auth2.findOne);
//apiRoutes.post('/users/login', users.findByMail); //fake pour tester la route logged
//apiRoutes.post('/users/login',auth.login);
apiRoutes.post('/users/register',auth.register);
apiRoutes.put('/users/update/:id', users.update);
apiRoutes.delete('/users/remove/:id', users.delete);

//------------------Ressources--------------------
apiRoutes.get('/ressources', ressources.find);
apiRoutes.get('/ressources/:id', ressources.findById);
apiRoutes.post('/ressources/create', ressources.create);
apiRoutes.put('/ressources/update/:id', ressources.update);
apiRoutes.delete('/ressources/remove/:id', ressources.delete);


module.exports = apiRoutes;
