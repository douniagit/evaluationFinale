import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import './connexion.css';
import {Link} from 'react-router';

class Connexion extends React.Component{
	render(){
		return (
			<div className="connexion">
				<Navbar/>
				<div className='formulaire2'>
					<form action="/api/users/login" method="post">
						<div className="form2">
						<div>
							<label>mail</label>
							<input type="text" id="mail" placeholder="ton mail"/>
						</div>
						<div>
							<label>Mot de passe</label>
							<input type="text" id="password" placeholder="ton password"/>
						</div>
					</div>
						<div className="button">
							<button type="submit">CONNEXION</button>
						</div>
					</form>

					<p>Vous n' avez pas encore de compte?</p>
					<Link to="/suscribe"><button className="insc">INSCRIPTION</button></Link>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default Connexion;