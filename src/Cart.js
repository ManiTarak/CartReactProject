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
    increaseQuantity=(product)=>{
        const {Products}=this.state;
        const index = Products.indexOf(product);
        Products[index].qty+=1;
        this.setState({
            Products:Products,
        });
    }
    render(){
        const {Products}=this.state;
        return (
            <React.Fragment>
            {Products.map((product)=>{
                return <CartItem product={product} key={product.id} onincreaseQuantity={this.increaseQuantity}/>
            })}
            </React.Fragment>
        );
    }
}

export default Cart;