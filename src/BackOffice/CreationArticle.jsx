import React, { Component } from 'react';
import Footer from '../Footer/Footer.jsx';
import '../Navbar/Navbar.css';
import NavAdmin from './NavAdmin.jsx';
import {Link} from 'react-router';

class CreationArticle extends Component {
  
  render() {
    return (
      <div className="creation">
       	<NavAdmin/>
			<h1> CREER UN ARTICLE</h1>
				<form action="/api/ressources/create" method="post">
						<div className="formulaire">
							<div>
								<label>titre</label>
								<textarea type="text" id="name" name="name" placeholder="titre de l'article"/>
							</div>
							<div>
								<label>image url</label>
								<textarea type="text" id="images" name="images" placeholder="importe ton image"/>
							</div>
							<div>
								<label>description</label>
								<textarea type="text" id="description" name="description" placeholder="ecris ton article"/>
							</div>
						</div>
						<div className="ajout">
							<button type="submit" value="submit">sauvegarder</button>
							<button type="reset" value="reset">annuler</button>
						</div>
					</form>
       	<Footer/>
      </div>
    );
  }
}

export default CreationArticle;