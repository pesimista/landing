import React, { Component } from 'react';
import StartUp from '../Components/StartUp';
import Info from '../Components/Info';
import Carousel from './carousel';
import End from '../Components/pageEnd';

class App extends Component {

  render() {
    return(
        <div>
          <StartUp />
          <Info />
          <Carousel/> 
          <hr className="ma0"/> 
          <End />    
        </div>
    );
  }
}

export default App;
