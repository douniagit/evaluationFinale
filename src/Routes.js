import React from 'react';
import {Router, Route} from 'react-router';
import App from './App.js';
import Connexion from './Connexion/Connexion.jsx';
import Inscription from './Inscription/Inscription.jsx';
import Article from './Article/Article.jsx';
import NotFound from './NotFound/NotFound.jsx';
import HomePage from './BackOffice/HomePage.jsx';
import Edition from './BackOffice/Edition.jsx';
import CreationArticle from './BackOffice/CreationArticle.jsx';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Connexion}/>
    <Route path="/suscribe" component={Inscription}/>
    <Route path="/articles" component={Article}/>
    <Route path="/admin" component={HomePage}/>
    <Route path="/edit" component={Edition}/>
   	<Route path="/creation" component={CreationArticle}/>
    <Route path="*" component={NotFound}/>
    
  </Router>
);

export default Routes;