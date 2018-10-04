import React from 'react';
import rain from '../Media/rain.jpg';

const StartUp = () =>
{
	return(
	 <header className={"sans-serif tc"} style={{borderColor: '#001b44'}} >
       <div className={"cover bg-left bg-center-l"} 
       style={{backgroundImage: 'url('+rain+')'}}
        //style={{backgroundImage:'url(https://images.wallpaperscraft.com/image/rain_glare_glass_drops_92855_1600x900.jpg)'}}
        >
         <div id="Header" className={"bg-black-80 pb3 pt5"}>

           <div id="Text" className={"tc-l mt4 mt5-m mt6-l pt3 pb5"}>
             <h1 id="Title" className={"f2 f1-l fw2 white-90 mb0 lh-title"}>Something something</h1>
             <h2 id="Subtitle" className={"fw1 f3 white-80 mt3 mb4"}>Aqui va algo sensacional pero aun no se que</h2>
             <a className={"f4 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3"} href={"#Nosotros"}>Nosotros</a>
             <span className={"dib v-mid ph3 white-70 mb3"}>o</span>
             <a className={"f4 no-underline grow dib v-mid white ba ph3 pv2 mb3"} 
             style={{backgroundColor:'#323e53', borderColor: '#323e53'}} href={"#Carousel"}>Artistas</a>
           </div>

           	<div id="SocialMedia" className="pv4 ph2 tc-l">
			  <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://facebook.com" title="Facebook">
			    <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fillRule="nonzero"/></svg>
			    <span className="f6 ml3 pr2">Facebook</span>
			  </a>
			  <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://youtube.com" title="youtube">
			    <svg className="dib w2 h2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z"/></svg>
			    <span className="f6 ml3 pr2">Youtube</span>
		      </a>
			  <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://twitter.com/MezzMar_" title="Twitter">
			    <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"/></svg>
			    <span className="f6 ml3 pr2">Twitter</span>
			  </a>
			</div>
         </div>
       </div>
     </header>
	);
}

export default StartUp;