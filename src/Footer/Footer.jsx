import React from 'react';
import logo from './../../public/img/logo-simplonco.png';
import './../Navbar/Navbar.jsx';

class Footer extends React.Component{
	render(){
		return(
			<div className="footer" style={{flexDirection:"column", height:"100%", borderTop:"2px solid lightgrey"}}>
				<h3>EVALUATION FINALE SIMPLON BLOG </h3>
				<p> Apprenant: FERGANE Dounia Promo6 </p>
				<img style={{width:"50px"}} src={logo} alt="logo"/>
			</div>
		)
	}
}

export default Footer;