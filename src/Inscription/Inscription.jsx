import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import './../Connexion/connexion.css';


class Inscription extends React.Component{
	render(){
		return (
			<div className="inscription">
				<Navbar/>
				<div className='formulaire2'>
					<form action="/api/users/register" method="post">
						<div>
							<label>Nom</label>
							<input type="text" id="name" name="name" placeholder="ton nom"/>
						</div>
						<div>
							<label>Prenom</label>
							<input type="text" id="firstName" name="firstName" placeholder="ton prénom"/>
						</div>
						<div>
							<label>Votre adresse mail</label>
							<input type="text" id="mail" name="mail" placeholder="ton mail"/>
						</div>
						<div>
							<label>Renseignez un nouveau mot de passe</label>
							<input type="text" id="password" name="password" placeholder="ton mot de passe"/>
						</div>
						<div className="button">
							<button type="submit">INSCRIPTION</button>
						</div>
					</form>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default Inscription;