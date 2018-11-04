import React, { Component } from 'react';
import Left from '../Media/nav_left.png';
import Right from '../Media/nav_right.png';
import Card from '../Components/card';
import Expected from '../Components/Expected';
import '../css/Carousel.css';

import Logo from '../Media/entorno_logo.jpg';

class Carousel extends Component {
  constructor()
  {
    super();
    this.state = {
      artistas: [],
      art: {
        id:0,
        name: "Loading",
        email: "/"
      },
      currentIndex: 0
    }
  }
  next = () =>
  {
    this.setState({
      currentIndex: (this.state.currentIndex===this.state.artistas.length-1)?0:this.state.currentIndex+1,
      art: this.state.artistas[this.state.currentIndex]
    });
  }
  previous = () =>
  {
    this.setState({
      currentIndex: (this.state.currentIndex===0)?this.state.artistas.length-1:this.state.currentIndex-1,
      art: this.state.artistas[this.state.currentIndex]
    });
  }

  render() {
    var List;
    var artist = this.state.art;
    if(!this.state.artistas) 
    List = (<Card key={0} name="Not found" image={Logo} profile="/" id={0} /> );
    else List = this.state.artistas.map(function(currentValue){
    return (
      <Card key={currentValue.id} name={currentValue.name} image="-" profile={currentValue.email} id={currentValue.id} /> );
    });
    return (
      <section id="Carousel" className="topRound">
        <Expected />
        <h1 className={"tc mt0 f2 f1-l fw2 white-90 mb0 lh-title"}>
        Artist
        </h1>
        <div className="fl w-third bg-gold" style={{paddingBottom: "400px", zIndex: "1"}} />
        <div className={"cards-slider active-slide-"+this.state.currentIndex} >
          <div className="cards-slider-wrapper" style={{
            transform: 'translateX('+this.state.currentIndex*(-100/this.state.artistas.length) +'%)'
          }} >
            { <Card name={artist.name} image="-" profile={artist.email} id={artist.id} /> 
            /*List*/}
          </div>
          
        </div>
        <button className="prev link dim br3 ba bw2 near-black" onClick={() => this.previous()} disabled={!this.state.artistas.length}><img src={Left} alt="Arrow" /></button>
        <button className="next link dim br3 ba bw2 near-black" onClick={() => this.next()} disabled={!this.state.artistas.length}><img src={Right} alt="Arrow" /></button>
      </section>
    );
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(reply => reply.json() )
    .then(data  => {this.setState({artistas:data, art:data[0], currentIndex: 0}); })
    .catch( () => {this.setState ({artistas: "", art: "", currentIndex: 0}); console.log("HI"); } );
  }
}
export default Carousel;
// <div style={{
//             position: 'relative',
//             height: '250px',
//             backgroundColor: 'black'
//           }}>
//           <div className="bg"></div>
//       </div>