import React from 'react';
import './Navbar.css';
import {Link} from 'react-router';

class Navbar extends React.Component {

	render(){
		return(
				<div className="navbar">
				    <div className="wrapper">
						<div className="menu">
							<ul>
								<li><Link to="/">ACCUEIL</Link></li>
								<li><a>ARTICLES</a></li>
								<li><Link to="/login">CONNEXION</Link></li>
								<li><Link to="/suscribe">INSCRIPTION</Link></li>
							</ul>
						</div>
						
					</div>
				</div>

	    )

	}
};

export default Navbar;
