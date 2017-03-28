import React from "react";
import articles from './../data/articles.js';
import './Card.css';

class Card extends React.Component{

  constructor(props){
    super(props);
    this.state={
      
    }
    
  }


  handleClick(article){
      return this.globalMap();

  }

  globalMap(){
    return articles.data.map(article=>{
              return(
              <div className="cards">
                <img className="img" src={article.images} alt="img"/>
                <h2 className="title">{article.name}</h2>
                <p className="desc">{article.description}</p>
              </div>)
           })
  }

  render(){
    return(
      <div className="global">
        <div className="cardContainer">
            <p>Les articles du petit boudoir</p>
            {}
        </div>
        <div className="bouton-article">
          <button onClick={this.handleClick.bind(this,'article')}>TOUS LES ARTICLES</button>
        </div>
      </div>
    )
  }
}

export default Card;
