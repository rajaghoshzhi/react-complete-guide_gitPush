import React, { Component } from "react";
import Order from '../../components/Order/Order';
import axios from 'axios';

class Orders extends Component{
    state = {
        orders:[],
    }
    componentDidMount(){
        var newData = [];
        axios.get('/orders.json').then((response)=>{
            newData = response.data;
            let setParams =[];
            for(let [key,params] of Object.entries(newData)){       
                
                params['id'] = key;
                setParams.push(params);
            }
             this.setState({
                 orders:setParams
             })
        })
    }
    render(){
        let  orderList = [];
        if(this.state.orders.length > 0 ){
                orderList = this.state.orders.map((res)=>{
                return  <Order key={res.id} ingredients={res.ingredients} price={res.price} />
            })
        }
        // console.log(this.state);
        return (
            <div>
                {orderList}
            </div>
        )         
    }
}

export default Orders;