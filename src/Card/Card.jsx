import React from "react";
import articles from './../data/articles.js';
import './Card.css';

class Card extends React.Component{
  render(){
    return(
      <div className="cardContainer">
          {articles.data.map(article=>{
            return(
            <div className="cards">
              <img className="img" src={article.images} alt="img"/>
              <h2 className="title">{article.name}</h2>
              <p className="desc">{article.description}</p>
            </div>)
          })}
      </div>
    )
  }
}

export default Card;
