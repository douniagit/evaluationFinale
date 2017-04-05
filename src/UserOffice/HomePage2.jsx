import React, { Component } from 'react';
import Footer from '../Footer/Footer.jsx';
import Grid from '../Grid/Grid.jsx';
import NavUser from './NavUser.jsx';
import {Link} from 'react-router';

class HomePage2 extends Component {
  render() {
    return (
      <div className="homePage">
       	<NavUser/>
		<Grid/>
       	<Footer/>
      </div>
    );
  }
}

export default HomePage2;
