import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
// import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

  
  render() {
    return (
      <div>
        <div> hello Raja Ghosh</div>
        <Layout>
          {/* <BurgerBuilder></BurgerBuilder> */}
          <Switch>           
            <Route path='/checkout' component={Checkout}></Route>
            <Route path='/orders' component={Orders}></Route>
            <Route path='/' component={BurgerBuilder}></Route>
          </Switch>          
        </Layout>
      </div> 
    );
  }
}

export default App;
