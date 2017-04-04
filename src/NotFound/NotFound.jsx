import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

class NotFound extends React.Component{
	render(){
		return(
			<div className="content">
				<Navbar/>
				<p> Erreur 404, Not found :( </p>
				<Footer/>
			</div>

		)
	}
}

export default NotFound;