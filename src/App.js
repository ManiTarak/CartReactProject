
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import firebase from 'firebase/compat/app';
class App extends React.Component {
  constructor(){
    super();
    this.state={
        Products:[]
        
    }
}
componentDidMount(){
  firebase.firestore().collection('products').get().then((snapshot)=>{
    const Products=snapshot.docs.map((doc)=>{
      let data=doc.data();
      data["id"]=doc.id;
      return data;
    });
    this.setState({
      Products:Products
    });
  })
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
