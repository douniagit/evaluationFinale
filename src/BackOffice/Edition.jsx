import React, { Component } from 'react';
import Footer from '../Footer/Footer.jsx';
import '../Navbar/Navbar.css';
import NavAdmin from './NavAdmin.jsx';
import articles from './../data/articles.js';
import {Link} from 'react-router';
//import axios from 'axios';

class Edition extends Component {
	
	constructor(props){
    super(props);
    this.articlesGlobal= this.articlesGlobal.bind(this);
}

	// deleteArticle(){
	// 	axios.delete()
	// }

	// editArticle(){
	// 	axios.update()
	// }


	articlesGlobal(){
         return articles.data.map(article=>{
              return(
              <div className="article">
                <h2 className="title">{article.name}</h2>
                <p className="supp">supprimer</p>
                <p className="edit">editer</p>
             </div>
             )
          })
      }

  render() {
    return (
      <div className="create">
       	<NavAdmin/>
			<h1> GERER SES ARTICLES</h1>
				<div className="board">
				{this.articlesGlobal()}
				</div>
				<Link to="/creation"><button>ajouter article</button></Link>
       	<Footer/>
      </div>
    );
  }
}

export default Edition;