import React from "react";
import Footer from '../Footer/Footer.jsx';
import Article from '../Article/Article.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import axios from 'axios';

class HomeArticle extends React.Component{

	render(){
			
		return(
			<div className="HomeArticle">
				<Navbar/>
				<Article />
				<Footer/>
			</div>
		)
	}
}
export default HomeArticle;