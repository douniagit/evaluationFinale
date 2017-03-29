import React from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';


class Article extends React.Component{
	constructor(props){
    super(props);
    this.articlesGlobal= this.articlesGlobal.bind(this);
}

	render(){
		return(
			<div className="article">
				<Navbar/>
				<div className="articleContent" style={{width:"100%",height:"70vh"}}>
					{this.props.articlesGlobal()}
				</div>
				<Footer/>
			</div>
		)
	}
}
export default Article;