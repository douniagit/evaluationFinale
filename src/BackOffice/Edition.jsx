import React, { Component } from 'react';
import Footer from '../Footer/Footer.jsx';
import '../Navbar/Navbar.css';
import NavAdmin from './NavAdmin.jsx';
import {Link} from 'react-router';
import axios from 'axios';

class Edition extends Component {
	
	constructor(props){
    super(props);
    this.state={
      articles:[]
    }
    this.callingApi();
    //this.editApi();
    this.deleteApi=this.deleteApi.bind(this);
    this.articlesGlobal= this.articlesGlobal.bind(this);
}

    callingApi(){
      axios.get(`/api/ressources`)
        .then(data=>{
        this.setState({articles:data.data});
        //console.log(this.state.articles);
       });
    }

    deleteApi(info){
      axios.delete(`/api/ressources/remove/`+ info)
        .then(data=>{
          this.callingApi();
        })
      console.log(info +' supprimée');
    }

	  articlesGlobal(){
         return this.state.articles.map(article=>{
         // console.log(article._id);
           const info = article._id;
           console.log(info);
              return(
              <div className="article">
                <h2 className="title">{article.name}</h2>
                <p className="supp" onClick={()=>this.deleteApi(info)}>supprimer</p>
                <p className="edit" >editer</p>
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