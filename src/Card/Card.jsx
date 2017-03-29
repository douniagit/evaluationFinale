import React from "react";
import articles from './../data/articles.js';
import './Card.css';

class Card extends React.Component{

  constructor(props){
    super(props);
    this.articlesSelected= this.articlesSelected.bind(this);
    this.articlesGlobal= this.articlesGlobal.bind(this);
}


  articlesGlobal(){
         return articles.data.map(article=>{
              return(
              <div className="cards">
                <img className="img" src={article.images} alt="img"/>
                <h2 className="title">{article.name}</h2>
                <p className="desc">{article.description}</p>
              </div>)
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
            {this.articlesGlobal()}
        </div>
        <div className="bouton-article">
          <button>TOUS LES ARTICLES</button>
          {this.articlesSelected()}
        </div>
      </div>
    )
  }
}

export default Card;
