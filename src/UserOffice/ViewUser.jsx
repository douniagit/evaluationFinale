import React from "react";
import Footer from '../Footer/Footer.jsx';
import Article from '../Article/Article.jsx';
import NavUser from './NavUser.jsx';
import axios from 'axios';

class ViewUser extends React.Component{

	
	render(){
			
		return(
			<div className="viewUser">
				<NavUser/>
				<Article/>
				<Footer/>
			</div>
		)
	}
}
export default ViewUser;