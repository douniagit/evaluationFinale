import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import "./../Connexion/connexion.css";


class Inscription extends React.Component{
	render(){
		return (
			<div className="inscription">
				<Navbar/>
				<div className='formulaire'>
					<form action="http://localhost:3000/api/users/create" method="post">
						<div>
							<label>Votre adresse mail</label>
							<input type="text" id="mail" placeholder="ton mail"/>
						</div>
						<div>
							<label>Renseignez un nouveau mot de passe</label>
							<input type="text" id="password" placeholder="ton mot de passe"/>
						</div>
						<div>
							<label>Confirmez ce mot de passe</label>
							<input type="text" id="password" placeholder="confirme ton mot de passe"/>
						</div>
						<div>
							<label>Nom</label>
							<input type="text" id="name" placeholder="ton nom"/>
						</div>
						<div>
							<label>Prenom</label>
							<input type="text" id="firstName" placeholder="ton prénom"/>
						</div>
						<div>
							<label>Votre avatar</label>
							<input type="image"/>
							<p>Choisir une image</p>
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