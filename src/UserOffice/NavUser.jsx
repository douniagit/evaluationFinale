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
								<li><Link>ACCUEIL</Link></li>
								<li><Link>ARTICLES</Link></li>
								<li>CONNECTE
									<ul>
									<li><Link>Deconnexion</Link></li>
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