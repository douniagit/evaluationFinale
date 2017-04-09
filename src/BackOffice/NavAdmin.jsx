import React, { Component } from 'react';
import '../Navbar/Navbar.css';
import {Link} from 'react-router';

class NavAdmin extends Component {
  render() {
    return (
      <div className="NavAdmin">
       	 <div className="wrapper">
						<div className="menu">
							<ul>
								<li><Link to="/admin">ACCUEIL</Link></li>
								<li><Link to="/viewarticles">ARTICLES</Link></li>
								<li>ADMINISTRATION
									<ul>
									<li><Link to="/edit">Mes articles</Link></li>
									<li><Link to="/profile/">Profil</Link></li>
									<li><Link>Commentaires</Link></li>
									<li><Link to="/">Deconnexion</Link></li>
									</ul>
								</li>
							</ul>
						</div>	
					</div>
      </div>
    );
  }
}

export default NavAdmin;