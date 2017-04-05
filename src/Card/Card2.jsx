import React from "react";
import articles from './../data/articles.js';
import './Card.css';
import axios from 'axios';

class Card2 extends React.Component{

  constructor(props){
    super(props);
    this.state={
      show:false,
      articles:[]
    }
    this.callingApi();
    this.articlesSelected= this.articlesSelected.bind(this);
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

	handleClick(){
    return this.setState({show:!this.state.show});
  }


  	articlesGlobal(){
         return this.state.articles.map(article=>{
              return(
              <div className="cards">
                <img className="img" src={article.images} alt="img"/>
                <h2 className="title">{article.name}</h2>
                <p className="desc">{article.description}</p>
             </div>
             )
          })
      }

    articlesSelected(){
        const random = this.articlesGlobal();
        return [
        random[Math.floor(Math.random() * random.length)],
        random[Math.floor(Math.random() * random.length)]
        ];
      }

  render(){

    return(
      <div className="global">
        <div className="cardContainer">
            <p>Les articles du petit boudoir</p>
            {this.articlesSelected()}
        </div>
        <div className="bouton-article">
          <button onClick={this.handleClick.bind(this)}>TOUS LES ARTICLES</button>
            <div className={"hide-"+this.state.show}>{this.articlesGlobal()}</div>
        </div>
      </div>
      
    )
  }
}

export default Card2;