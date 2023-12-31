import React from 'react';
import './index.css';
class CartItem extends React.Component{
    render(){
        const {price,title,qty,img}=this.props.product;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                 <img src={img} style={{width:110, height:110, borderRadius:4}}/>
                </div>
                <div className='right-block'>
                    <div  >{title}</div>
                    <div style={{color:'grey'}}>{price}</div>
                    <div style={{color:'grey'}}>{qty}</div>
                    <div className='cart-item-actions'>
                    <img alt="increase" className="action-icons" onClick={()=>this.props.onincreaseQuantity(this.props.product)} src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"/>
                    <img alt="decrease" className="action-icons" onClick={()=>this.props.ondecreaseQuantity(this.props.product)} src="https://cdn-icons-png.flaticon.com/128/43/43625.png"/>
                    <img alt="delete" className="action-icons" onClick={()=>this.props.onDeleteItem(this.props.product)} src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"/>
                </div>
                </div>
                
            </div>
        );
    }
}

export default CartItem;