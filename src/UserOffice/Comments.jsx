import React, { Component } from 'react';
import Footer from '../Footer/Footer.jsx';
import '../Navbar/Navbar.css';
import NavUser from './NavUser.jsx';
import {Link} from 'react-router';
import './back.css';

class Edition extends Component {
	
  render() {
    return (
      <div className="create">
       	<NavUser/>
  			<div className='formulaire'>
            <form action="/api/ressources/create" method="post">
              <div>
                <label>ton avis compte</label>
                <input type="text" id="comments" name="comments" placeholder="post to commentaire"/>
              </div>
              <div className="button">
                <Link><button>ajouter commentaire</button></Link>
              </div>
            </form>
        <div className="likes">
        </div>
       	<Footer/>
      </div>
    );
  }
}

export default Edition;