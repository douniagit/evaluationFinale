import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

class NotFound extends React.Component{
	render(){
		return(
			<div className="content">
				<Navbar/>
				<h1> Erreur 404, Not found :(</h1>
				<Footer/>
			</div>

		)
	}
}

export default NotFound;