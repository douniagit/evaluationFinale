import React from "react";
import articles from './../data/articles.js';
import './Card.css';
//import {Link} from 'react-router';

class Card extends React.Component{

  constructor(props){
    super(props);
    this.state={
      show:false
    }
    this.articlesSelected= this.articlesSelected.bind(this);
    this.articlesGlobal= this.articlesGlobal.bind(this);
}
  
  handleClick(){
    return this.setState({show:!this.state.show});
    //si je mets true - je fixe le state à true au lieu de le varier
  }

  articlesGlobal(){
         return articles.data.map(article=>{
              return(
             // <Link key={article.id} to={`/article/:id`} activeClassName="active">
              <div className="cards">
                <img className="img" src={article.images} alt="img"/>
                <h2 className="title">{article.name}</h2>
                <p className="desc">{article.description}</p>
             </div>
            // </Link>
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
         {/*} <Link to={`/article/${this.props.id}`}>*/}
            {this.articlesSelected()}
          {/* </Link>*/}
        </div>
       <div className="bouton-article">
          <button onClick={this.handleClick.bind(this)}>TOUS LES ARTICLES</button>
       {/*  <Link to={`/article/${this.props.id}`}>*/}
            <div className={"hide-"+this.state.show}>{this.articlesGlobal()}</div>
        {/* </Link>*/}
        </div>
      </div>
      
    )
  }
}

export default Card;
