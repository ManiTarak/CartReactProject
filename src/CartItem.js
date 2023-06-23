import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div style={{display:'inline-flex',margin:20}} className='cartItem'>
                <div className='left-block'>
                 <img style={{width:110, height:110, borderRadius:4}}/>
                </div>
                <div style={{paddingLeft:20}}className='right-block'>
                    <div  >Phone</div>
                    <div style={{color:'grey'}}>Rs 99</div>
                    <div style={{color:'grey'}}>Qty:2</div>
                </div>
                <div className='cart-item-actions'></div>
            </div>
        );
    }
}

export default CartItem;