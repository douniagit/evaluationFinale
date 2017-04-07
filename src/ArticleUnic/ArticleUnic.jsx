import React from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import datas from '../data/articles.js';
//import axios from 'axios';
import NotFound from '../NotFound/NotFound.jsx';

class Article extends React.Component{



	render(){
			const id=this.props.params.id;
		const articleX = datas.filter((data)=> data.id === id)[0];
			if(!articleX){
				return <NotFound/>;
			}

		return(
			<div className="article">
				<Navbar/>
				<div className="articleContent">
					<h1>test</h1>
					<img src={`/img/${articleX.images}`} alt="x"/>
					<h2>{articleX.name}</h2>
					<p className="desc">{articleX.description}</p>
				</div>
				<Footer/>
			</div>
		)
	}
}
export default Article;