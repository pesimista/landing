import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import Carousel from './Containers/carousel';
import registerServiceWorker from './registerServiceWorker';
import './css/App.css';

ReactDOM.render(<Carousel />, document.getElementById('root'));
registerServiceWorker();
