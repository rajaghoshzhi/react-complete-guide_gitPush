import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
// import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

  
  render() {
    return (
      <div>
        <Layout>
          {/* <BurgerBuilder></BurgerBuilder> */}
          <Switch>           
            <Route path='/checkout' component={Checkout}></Route>
            <Route path='/' component={BurgerBuilder}></Route>
          </Switch>          
        </Layout>
      </div> 
    );
  }
}

export default App;
