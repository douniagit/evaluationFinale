import React, { Component } from 'react';
import Footer from '../Footer/Footer.jsx';
import Grid from '../Grid/Grid.jsx';
import NavAdmin from './NavAdmin.jsx';
import {Link} from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
       	<NavAdmin/>
		<Grid/>
       	<Footer/>
      </div>
    );
  }
}

export default HomePage;
