import React from 'react';
import {Router, Route} from 'react-router';
//-----------public------------------------------
import App from './App.js';
import Connexion from './Connexion/Connexion.jsx';
import Inscription from './Inscription/Inscription.jsx';
import HomeArticle from './HomeArticle/HomeArticle.jsx';
import Profile from './Profile/Profile.jsx';
import NotFound from './NotFound/NotFound.jsx';
import ArticleUnic from './ArticleUnic/ArticleUnic.jsx';
//-----------Admin-------------------------------
import HomePage from './BackOffice/HomePage.jsx';
import Edition from './BackOffice/Edition.jsx';
import CreationArticle from './BackOffice/CreationArticle.jsx';
import ViewAdmin from './BackOffice/ViewAdmin.jsx';
import ViewDetailAdmin from './BackOffice/ViewDetailAdmin.jsx';
//-----------User---------------------------------
import HomePage2 from './UserOffice/HomePage2.jsx';
import ViewUser from './UserOffice/ViewUser.jsx';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Connexion}/>
    <Route path="/suscribe" component={Inscription}/>
    <Route path="/articles" component={HomeArticle}/>
    <Route path="/admin" component={HomePage}/>
    <Route path="/edit" component={Edition}/>
   	<Route path="/creation" component={CreationArticle}/>
    <Route path="/logged" component={HomePage2}/>
    <Route path="/profile/" component={Profile}/>
    <Route path="/viewarticles" component={ViewAdmin}/>
    <Route path="/viewuser" component={ViewUser}/>
    <Route path="/detailarticle/:id" component={ArticleUnic}/>
    <Route path="/viewdetailadmin" component={ViewDetailAdmin}/>
    <Route path="*" component={NotFound}/> 
  </Router>
);

export default Routes;