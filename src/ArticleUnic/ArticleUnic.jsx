import React from "react";
import axios from 'axios';

class ArticleUnic extends React.Component{
	
	constructor(props){
    super(props);
    this.state={
      info:[]
    }
    this.callingApi();
	}


	callingApi(){
    	axios.get(`/api/ressources`)
    	.then(data=>{
			this.setState({info:data.data});
      //console.log(this.state.info);
		 });
		}


	render(){
        const id = this.props.params.id;
       // const articleX=this.state.info.filter(article => article._id === id)[0];
         const articleX= this.state.info.map((article)=>{
              if(article._id === id) {
              return(
                <div className="article">
                <h2 className="title">{article.name}</h2>
                <img src={article.images} alt="img"/>
                <p className="desc">{article.description}</p>
               <h3>Commentaires <span>likes:{article.likes}</span></h3>
                <p className="auteur">auteur: {article.comments.auteur}</p>
              <p className="comments">comment: {article.comments.body}</p>
             </div>
             );
            }
          });


		return(
			<div className="article">
				<div className="articleContent">
          {articleX}
				</div>
			</div>
		)
	}
}
export default ArticleUnic;