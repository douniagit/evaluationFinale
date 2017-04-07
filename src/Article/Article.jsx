import React from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import datas from '../data/articles.js';
import axios from 'axios';
//import NotFound from '../NotFound/NotFound.jsx';

class Article extends React.Component{

	constructor(props){
    super(props);
    this.state={
      articles:[]
    }
    this.callingApi();
    this.articlesGlobal= this.articlesGlobal.bind(this);
	}

	callingApi(){
    	axios.get(`/api/ressources`)
    	.then(data=>{
		 	console.log(data);
			this.setState({articles:data.data});
			console.log(this.state.articles);
		 });
		}

	articlesGlobal(){
         return this.state.articles.map((article, i )=>{
              return(
              <div key={i} className="cards">
                <img className="img" src={article.images} alt="img"/>
                <h2 className="title">{article.name}</h2>
                <p className="desc">{article.description}</p>
             </div>
             )
          })
      }



	render(){
			// const id=this.props.params.id;
		// const articleX = datas.filter((data)=> data.id === id)[0];
		// 	if(!articleX){
		// 		return <NotFound/>;
		// 	}

		return(
			<div className="article">
				<Navbar/>
				{this.articlesGlobal()}
				{/*<div className="articleContent">
					<h1>test</h1>
					<img src={`/img/${articleX.images}`} alt="x"/>
					<h2>{articleX.name}</h2>
					<p className="desc">{articleX.description}</p>
				</div>*/}
				<Footer/>
			</div>
		)
	}
}
export default Article;