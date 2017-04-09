import React, { Component } from 'react';
import '../Navbar/Navbar.css';
import {Link} from 'react-router';

class NavUser extends Component {
  render() {
    return (
      <div className="NavUser">
       	 <div className="wrapper">
						<div className="menu">
							<ul>
								<li><Link to="/logged">ACCUEIL</Link></li>
								<li><Link to="/viewuser">ARTICLES</Link></li>
								<li>MON ESPACE
									<ul>
									<li><Link to="/profile/:id">Profil</Link></li>
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

export default NavUser;