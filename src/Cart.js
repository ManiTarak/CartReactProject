import React from 'react';
import CartItem from './CartItem.js'

const Cart=(props)=>{
       if(props.loading==true)
           return(<h1><b>Loading Products....</b></h1>);
        return (
            <div style={{display:"flex",flexDirection:"column"}}>
        

            {(props.Products).map((product)=>{
                return <CartItem product={product} key={product.id} onincreaseQuantity={props.onincreaseQuantity} ondecreaseQuantity={props.ondecreaseQuantity} onDeleteItem={props.onDeleteItem}/>
            })}
            </div>
        );
}

export default Cart;