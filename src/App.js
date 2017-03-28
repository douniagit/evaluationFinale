import React, { Component } from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';
import Grid from './Grid/Grid.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar/>
       <Grid/>
       <Footer/>
      </div>
    );
  }
}

export default App;
