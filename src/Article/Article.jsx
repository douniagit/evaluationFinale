import React from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import datas from '../data/articles.js';

class Article extends React.Component{
	render(){
		return(
			<div className="article">
				<Navbar/>
				<div className="articleContent" style={{width:"80%",height:"70vh", margin:'auto'}}>
					<h2>{datas.data[0].title}</h2>
					<div className="like">
						<p><span>COEUR</span>{datas.data[0].likes} j'aime</p>
						<p><span>write</span>{datas.data[0].comments.index0f(' ')} commentaires</p>
					</div>
					<img style={{width:"50%"}} src={datas.data[0].images} alt="img"/>
					<p>{datas.data[0].description}}</p>

				</div>
				<Footer/>
			</div>
		)
	}
}
export default Article;