import React from 'react';
import logo from './../../public/img/logo-simplonco.png';
class Footer extends React.Component{
	render(){
		return(
			<div className="footer" style={{backgroundColor:"grey", width:"100%", height:"20vh"}}>
				<h2 style={{textAlign:"center"}}>EVALUATION FINALE SIMPLON BLOG</h2>
				<p> Apprenant: FERGANE Dounia Promo6</p>
				<img style={{width:"50px"}} src={logo} alt="logo"/>
			</div>

		)
	}
}

export default Footer;