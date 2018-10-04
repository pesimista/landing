import React from 'react';
import '../css/info.css';
import Logo from '../Media/entorno_logo.jpg';

const Info = () =>
{

	return(
	<section id={"Nosotros"} className={"cf br4 white"} >
		<div className={"fl-ns w-50-ns pr4-ns"}>
		    <h1 className={"f2 lh-title fw9 mb3 mt0 pt3 bt bw3 b--blue"} >
		      Something something
		    </h1>
		    <div className={"pa tc"}>
			  <img
			      src={Logo}
			      className={"br-100 ba dib" }
			      alt={"avatar"} />
			</div>
		</div>
		<div className={"fn fl-ns w-50-ns"} >
		  	<p className={"f4 lh-copy measure mt0-ns"}>
		  	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. 
		  	</p>
		    <p className={"f4 lh-copy measure mt0-ns"}>
		     Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		    <p className={"f4 lh-copy measure mt0-ns"}> 
			Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur.
			</p>
		    <p className={"f4 lh-copy measure "} >
		    	Sean todos bienvenidos.
		    </p>
		</div>
	</section>
	);

}

export default Info;