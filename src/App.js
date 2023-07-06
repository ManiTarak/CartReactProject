
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
class App extends React.Component {
  constructor(){
    super();
    this.state={
        Products:[{
            price:9999,
        title:"Mobile Phone",
        qty:1,
        img:"https://tse2.mm.bing.net/th?id=OIP.JXM6HXq-84nWGESB2rxp3QHaHa&pid=Api&P=0&h=180",
        id:1
        },
        {
            price:9999,
        title:"Watch",
        qty:2,
        img:"https://tse3.mm.bing.net/th?id=OIP.O9qk0A7goHMTWq9dQbE10wHaHa&pid=Api&P=0&h=180",
        id:2
        },{
            price:99999,
        title:"Macbook",
        qty:1,
        img:"https://www.ilounge.com/wp-content/uploads/2019/04/macbook-air.jpeg",
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
getTotalProductQty = () =>{
  const {Products} = this.state;
  var total=0;
  Products.forEach((product)=>{
    total+=product.qty;
  });
  return total;
}
getTotalPrice= () =>{
  const {Products} = this.state;
  var total=0;
  Products.forEach((product)=>{
    total+=product.price*product.qty;
  });
  return total;
}
  render(){
    const {Products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getTotalProductQty()}/>
      <Cart Products={Products}  onincreaseQuantity={this.increaseQuantity} ondecreaseQuantity={this.decreaseQuantity} onDeleteItem={this.deleteProduct}></Cart>
      <Footer price={this.getTotalPrice()}></Footer>
    </div>
  );
      
    }
}

export default App;
