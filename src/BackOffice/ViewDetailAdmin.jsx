import React from "react";
import Footer from '../Footer/Footer.jsx';
import ArticleUnic from '../ArticleUnic/ArticleUnic.jsx';
import NavAdmin from './NavAdmin.jsx';
import axios from 'axios';

class ViewDetailAdmin extends React.Component{

	render(){
			
		return(
			<div className="viewDetail">
				<NavAdmin/>
				<ArticleUnic/>
				<Footer/>
			</div>
		)
	}
}
export default ViewDetailAdmin;