import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import './css/App.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
