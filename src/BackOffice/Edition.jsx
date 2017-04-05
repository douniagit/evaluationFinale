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
        //console.log(this.state.articles);
       });
    }

    
    updateApi(id,req){
      axios.put(`/api/ressources/update/`+ id, {})
      // axios({
      //   method: 'put',
      //   url: `/api/ressources/update/`+ id,
      //   data: {
      //     name: req.body.name,
      //     images: req.body.images,
      //     description:req.body.description
      //   } ne fonctionne pas
      // });
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
                <h2 className="title">{article.name}</h2>
                <p className="supp" onClick={()=>this.deleteApi(id)}>supprimer</p>
                <p className="edit" onClick={()=>this.handleClick(id)}>editer</p>
                  <div className={"hide-"+this.state.show}>
                    <form action={`/api/ressources/update/`+id} method="put">
                        <div>
                          <label>titre</label>
                          <textarea type="text" id="name" name="name" placeholder={article.name}/>
                        </div>
                        <div>
                          <label>lien vers source</label>
                          <textarea type="text" id="lien" name="lien" placeholder={article.lien}/>
                        </div>
                        <div>
                          <label>image url</label>
                          <textarea type="text" id="images" name="images" placeholder={article.images}/>
                        </div>
                        <div>
                          <label>description</label>
                          <textarea type="text" id="description" name="description" placeholder={article.description}/>
                        </div>
                        <div>
                          <label>nombres de likes</label>
                          <textarea type="text" id="likes" name="likes" placeholder={article.likes}/>
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
				<Link to="/creation"><button>ajouter article</button></Link>
       	<Footer/>
      </div>
    );
  }
}

export default Edition;