import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {

	constructor(props){
    super(props);
    this.state={
      profile:[]
    }
    this.callingApi();
    this.infoUsers= this.infoUsers.bind(this);
	}

	callingApi(){
    	axios.get(`/api/users`)
    	.then(data=>{
		 	console.log(data);
			this.setState({profile:data.data});
			console.log(this.state.profile);
		 });
		}

	infoUsers(){
         return this.state.profile.map((info, i )=>{
              return(
              <div key={i} className="cards">
                <h2 className="name">{info.name}</h2>
                <h2 className="mail">{info.mail}</h2>
             </div>
             )
          })
      }


  render() {
    return (
      <div className="Profile">
			{this.infoUsers()}				
      </div>
    );
  }
}

export default Profile;