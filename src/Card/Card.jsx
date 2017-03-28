import React from "react";
import articles from './../data/articles.js';
import './Card.css';

class Card extends React.Component{
  render(){
    return(
      <div className="global">
        <div className="cardContainer">
            <p>Les articles du petit boudoir</p>
            {articles.data.map(article=>{
              return(
              <div className="cards">
                <img className="img" src={article.images} alt="img"/>
                <h2 className="title">{article.name}</h2>
                <p className="desc">{article.description}</p>
              </div>)
            })}
        </div>
        <button>TOUS LES ARTICLES</button>
      </div>
    )
  }
}

export default Card;
