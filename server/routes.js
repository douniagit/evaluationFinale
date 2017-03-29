'use strict';


const express = require('express');
const api = require('./api');
const path = require('path');

const routes = express();
//routes app.get app.all
routes.use('/api', api);


module.exports = routes;
