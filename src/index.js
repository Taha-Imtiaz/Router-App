import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
//1.    <BrowserRouter> wraps history component in the browser and passes it down to the component tree. so anywhere in the the component tree we will
//     to use history object.
//2.Register our routs which means that tell react what component is going to be rendered based on the given url.

<BrowserRouter> 
<App />
</BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
