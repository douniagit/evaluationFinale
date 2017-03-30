import React from 'react';
import {Router, Route} from 'react-router';
import App from './App.js';
import Connexion from './Connexion/Connexion.jsx';
import Inscription from './Inscription/Inscription.jsx';
import Article from './Article/Article.jsx';
import NotFound from './NotFound/NotFound.jsx';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/login" component={Connexion} />
    <Route path="/article/:id" component={Article}/>
    <Route path="/suscribe" component={Inscription}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

export default Routes;