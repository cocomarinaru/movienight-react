import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Movienight from './Movienight';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Movienight />, document.getElementById('root'));
registerServiceWorker();
