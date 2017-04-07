import React, { Component } from 'react';
import Footer from '../Footer/Footer.jsx';
import '../Navbar/Navbar.css';
import NavAdmin from './NavAdmin.jsx';
import {Link} from 'react-router';
import axios from 'axios';
import './back.css';

class Edition extends Component {
	
	constructor(props){
    super(props);
    this.state={
      articles:[],
      show:false
    }
    this.callingApi();
    this.updateApi=this.updateApi.bind(this);
    this.deleteApi=this.deleteApi.bind(this);
    this.articlesGlobal= this.articlesGlobal.bind(this);
}

    callingApi(){
      axios.get(`/api/ressources`)
        .then(data=>{
        this.setState({articles:data.data});
       });
    }

    
    updateApi(id,req){
     // axios.put(`/api/ressources/update/`+ id, {})
      axios({
        method: 'put',
        url: `/api/ressources/update/`+ id,
        data: {
          name: req.body.name,
          images: req.body.images,
          description:req.body.description
        } //ne fonctionne pas
      });
    }


    deleteApi(id){
      axios.delete(`/api/ressources/remove/`+ id)
        .then(data=>{
          this.callingApi();
        })
      console.log(id +' supprimée');
    }

    handleClick(id){
      return this.setState({show:!this.state.show});
  }


	  articlesGlobal(){
         return this.state.articles.map(article=>{
           const id = article._id;
              return(
              <div className="article">
                <h2 className="title" style={{backgroundColor:"lightGrey"}}>{article.name}</h2>
                <div className='iframe'>
                <a onClick={()=>this.deleteApi(id)}><i className="fa fa-trash" aria-hidden="true">Supprimer {article.name}</i></a>
                <a  onClick={()=>this.handleClick(id)}><i className="fa fa-pencil" aria-hidden="true">Editer {article.name}</i></a>
                  </div>
                  <div className={"hide-"+this.state.show}>
                    <form action={`/api/ressources/update/`+id} method="put" className="formulaire">
                        <div>
                          <label>titre</label>
                          <textarea type="text" id="name" name="name" placeholder={article.name}/>
                        </div>
                        <div>
                          <label>image url</label>
                          <textarea type="text" id="images" name="images" placeholder={article.images}/>
                        </div>
                        <div>
                          <label>description</label>
                          <textarea type="text" id="description" name="description" placeholder={article.description}/>
                        </div>
                        <div className="button">
                          <button onClick={()=>this.updateApi(id)}>sauvegarder</button>
                        </div>
                      </form>
                    </div>
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
        <div className="ajout">
				<Link to="/creation"><button>ajouter article</button></Link>
       	</div>
        <Footer/>
      </div>
    );
  }
}

export default Edition;