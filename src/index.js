import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./App.css";
import './i18n';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import Translation from './Translation';

ReactDOM.render(
    <BrowserRouter>
        <Translation/> 
        {/* This Translation component is between index and App
        so that you can change the language of the site */}
    </BrowserRouter>,
document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
