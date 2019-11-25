import React, { Component } from "react";
import Order from '../../components/Order/Order';
import axios from 'axios';

class Orders extends Component{
    state = {
        ingredents:null,
        price:null,
        id:null
    }
    componentDidMount(){
        var newData = [];
        axios.get('/orders.json').then((response)=>{
            console.log(response);
            newData = response.data;
            console.log(newData);
            // this.setState({
            //     ingredents: response.data.ingredents,
            //     price: response.data.price,
            //     id:
            // })
            for (let [key, value] of Object.entries(newData)) {
                console.log(value.ingredients);
              }
            // response.data.map((res)=>{
            //     console.log(res);
            // })
        })
    }
    render(){
        return (
            <div>
                <Order />
                <Order />
            </div>
        )         
    }
}

export default Orders;