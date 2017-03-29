import React from 'react';
import {Router, Route} from 'react-router';
import App from './App.js';
import Connexion from './Connexion/Connexion.jsx';
import Inscription from './Inscription/Inscription.jsx';
import Article from './Article/Article.jsx';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/login" component={Connexion} />
    <Route path="/suscribe" component={Inscription}/>
    <Route path="/articles" component={Article}/>
  </Router>
);

export default Routes;