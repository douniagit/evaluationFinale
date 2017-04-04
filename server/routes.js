'use strict';


const express = require('express');
const api = require('./api');

const routes = express();

routes.use('/api', api);


module.exports = routes;
