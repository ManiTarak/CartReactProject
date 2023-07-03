import React from 'react';
import CartItem from './CartItem.js'

const Cart=(props)=>{
        return (
            <React.Fragment>
            {(props.Products).map((product)=>{
                return <CartItem product={product} key={product.id} onincreaseQuantity={props.onincreaseQuantity} ondecreaseQuantity={props.ondecreaseQuantity} onDeleteItem={props.onDeleteItem}/>
            })}
            </React.Fragment>
        );
}

export default Cart;