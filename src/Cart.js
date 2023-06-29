import React from 'react';
import CartItem from './CartItem.js'

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            Products:[{
                price:9999,
            title:"Mobile Phone",
            qty:1,
            id:1
            },
            {
                price:9999,
            title:"Watch",
            qty:2,
            id:2
            },{
                price:99999,
            title:"Macbook",
            qty:1,
            id:3
            }]
            
        }
    }
    render(){
        const {Products}=this.state;
        return (
            <React.Fragment>
            {Products.map((product)=>{
                return <CartItem product={product} key={product.id} />
            })}
            </React.Fragment>
        );
    }
}

export default Cart;