
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
// very important if you are using cssModule & reactstrap
import { Util } from 'reactstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter} from 'react-'
Util.setGlobalCssModule(bootstrap);




axios.defaults.baseURL = 'https://react-my-burger-7f2ad.firebaseio.com/';

// axios.interceptors.response.use(res=>{
//     return res;
// },error => {
//    <errorMessageHandler passError={error.message}></errorMessageHandler>
// })

const upgradeApp = <BrowserRouter><App /></BrowserRouter>

ReactDOM.render(upgradeApp, document.getElementById('root'));
registerServiceWorker();
