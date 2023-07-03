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
    decreaseQuantity=(product)=>{
        const {Products}=this.state;
        const index = Products.indexOf(product);
        if(Products[index].qty==1)
         return ;
        Products[index].qty-=1;
        this.setState({
            Products:Products,
        });
    }
    deleteProduct=(product)=>{
        const {Products}=this.state;
        const items = Products.filter((item)=>item.id!=product.id);
      
       
        this.setState({
            Products:items,
        });
    }
    render(){
        const {Products}=this.state;
        return (
            <React.Fragment>
            {Products.map((product)=>{
                return <CartItem product={product} key={product.id} onincreaseQuantity={this.increaseQuantity} ondecreaseQuantity={this.decreaseQuantity} onDeleteItem={this.deleteProduct}/>
            })}
            </React.Fragment>
        );
    }
}

export default Cart;