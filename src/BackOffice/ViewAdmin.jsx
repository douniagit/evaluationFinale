import React from "react";
import Footer from '../Footer/Footer.jsx';
import Article from '../Article/Article.jsx';
import NavAdmin from './NavAdmin.jsx';
import axios from 'axios';

class ViewAdmin extends React.Component{

	render(){
			
		return(
			<div className="viewAdmin">
				<NavAdmin/>
				<Article />
				<Footer/>
			</div>
		)
	}
}
export default ViewAdmin;