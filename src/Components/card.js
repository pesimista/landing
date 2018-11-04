import React from 'react';

const Card = ({id, name, image, profile}) =>
{
	var imgUrl = (image==="-")? 
	"https://robohash.org/"+name.replace(" ", "")+"?set=set4&size=200x200" :
	image ;
	return(
	<div className="ficha mw5 bg-white br3 pa3 pa4-ns mv3 mr3 ba relative">
	  <div className="tc" >
	    <img src={imgUrl}
	    	className="br-100 h4 w4 dib ba b--black-05 pa2" 
	    	title={"Photo of"+ name}
	    	style={{display: 'inline'}} 
	    	alt={"Photo of"+ name}/>
	    <h1 className="f3 mb2">{name}</h1>
	  </div>
	  <a className="profileButton f6 link dim br1 ph5 pv2 mt3 dib white bg-dark-blue"
	     href={profile}>
	    	Ver
	    </a>
	</div>
	);
}

export default Card;