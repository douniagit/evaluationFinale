import React from "react";
import Card from './../Card/Card.jsx';
import "./grid.css";

class Grid extends React.Component{
	render(){
		return(
			<div className="grid">
				<Card/>
			</div>
		)
	}
}
export default Grid;