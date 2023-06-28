import React from 'react';
import './index.css';
class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:9999,
            title:"Mobile Phone",
            qty:1
        }
    }
    increaseQuantity=()=>{
        this.setState({
            qty:this.state.qty+1,
        });
    }
    decreaseQuantity=()=>{
        this.setState((prevState)=>{
            if(prevState.qty==1)
            return ;
            return {
                qty:prevState.qty-1,
            }
        })
    }
    render(){
        const {price,title,qty}=this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                 <img style={{width:110, height:110, borderRadius:4}}/>
                </div>
                <div className='right-block'>
                    <div  >{title}</div>
                    <div style={{color:'grey'}}>{this.state.price}</div>
                    <div style={{color:'grey'}}>{qty}</div>
                    <div className='cart-item-actions'>
                    <img alt="increase" className="action-icons" onClick={this.increaseQuantity} src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"/>
                    <img alt="decrease" className="action-icons" onClick={this.decreaseQuantity} src="https://cdn-icons-png.flaticon.com/128/43/43625.png"/>
                    <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"/>
                </div>
                </div>
                
            </div>
        );
    }
}

export default CartItem;