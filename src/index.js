
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
// very important if you are using cssModule & reactstrap
import { Util } from 'reactstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import reducer from './store/reducer';
// import { BrowserRouter} from 'react-'
Util.setGlobalCssModule(bootstrap);
axios.defaults.baseURL = 'https://react-my-burger-7f2ad.firebaseio.com/';

const store = createStore(reducer);


const upgradeApp = <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>

ReactDOM.render(upgradeApp, document.getElementById('root'));
registerServiceWorker();
