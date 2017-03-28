import React from 'react';
import './Navbar.css';
//import {Link} from 'react-router';

class Navbar extends React.Component {

	render(){
		return(
				<div className="navbar">
				    <div className="wrapper">
						<div className="menu">
							<ul>
								<li><a>ACCUEIL</a></li>
								<li><a>ARTICLES</a></li>
								<li><a>INSCRIPTION</a></li>
							</ul>
						</div>
						
					</div>
				</div>

	    )

	}
};

export default Navbar;
