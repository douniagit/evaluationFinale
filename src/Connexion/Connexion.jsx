import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import "./connexion.css";
import {Link} from 'react-router';

class Connexion extends React.Component{
	render(){
		return (
			<div className="connexion">
				<Navbar/>
				<div className='formulaire'>
					<form action="/api/users" method="post">
						<div>
							<label>Nom d'utilisateur</label>
							<input type="text" id="name" placeholder="ton nom"/>
						</div>
						<div>
							<label>Mot de passe</label>
							<input type="text" id="mdp" placeholder="ton password"/>
						</div>
						<div className="button">
							<button type="submit">CONNEXION</button>
						</div>
					</form>

					<p>Vous n'avez pas encore de compte?</p>
					<Link to="/suscribe"><button style={{backgroundColor:"transparent", color:"#D20064", border:"2px solid #D20064"}}>INSCRIPTION</button></Link>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default Connexion;