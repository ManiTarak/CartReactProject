
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import firebase from 'firebase/compat/app';
class App extends React.Component {
  constructor(){
    super();
    this.state={
        Products:[],
        loading:true
        
    }
}
componentDidMount(){
  {/*where("title","==","mobile phone")*/ }
  firebase.firestore().collection('products').orderBy("qty").onSnapshot((snapshot)=>{
    const Products=snapshot.docs.map((doc)=>{
      let data=doc.data();
      data["id"]=doc.id;
      return data;
    });
    this.setState({
      Products:Products,
      loading:false
    });
  })
}
increaseQuantity=(product)=>{
    //const {Products}=this.state;
    //const index = Products.indexOf(product);
    // Products[index].qty+=1;
    // this.setState({
    //     Products:Products,
    // });
    const docRef=firebase.firestore().collection('products').doc(product.id);
    docRef.update({
      qty:product.qty+1
    }).then(()=>{
      console.log("updated successfully");
    }).catch((err)=>{
      console.log("Error in updating");
    });
}
decreaseQuantity=(product)=>{
    const {Products}=this.state;
    const index = Products.indexOf(product);
    if(Products[index].qty==1)
     return ;
    // Products[index].qty-=1;
    // this.setState({
    //     Products:Products,
    // });
    const docRef=firebase.firestore().collection('products').doc(product.id);
    docRef.update({
      qty:product.qty-1
    }).then(()=>{
      console.log("updated successfully");
    }).catch((err)=>{
      console.log("Error in updating");
    });
}
deleteProduct=(product)=>{
    const {Products}=this.state;
    //const items = Products.filter((item)=>item.id!=product.id);
  
   
    // this.setState({
    //     Products:items,
    // });
    const docRef=firebase.firestore().collection('products').doc(product.id);
    docRef.delete();
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
addProduct=()=>{
const Tvalue=document.getElementById("titleID").value;
const Pvalue=document.getElementById("priceID").value;
const Qvalue=document.getElementById("QtyID").value;
console.log(typeof(Qvalue));
const Ivalue=document.getElementById("imgID").value;
firebase.firestore().collection('products').add({
  title:Tvalue,
  price:Pvalue,
  qty:Qvalue,
  img:Ivalue
});
}
  render(){
    const {Products,loading}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getTotalProductQty()}/>
      <div style={{display:"none"}}>
      <form>
      <div>
      <label><b>Title     </b></label>
      <input id="titleID" type="text" required></input>
      </div>
      <div>
      <label><b>Price     </b></label>
      <input id="priceID" type="text" required></input>
      </div>
      <div>
      <label><b>Qty     </b></label>
      <input id="QtyID" type="text" required></input>
      </div>
      <div>
      <label><b>ImageAddress     </b></label>
      <input id="imgID" type="text" required></input>
      </div>
      <button onClick={this.addProduct}>Add Product to Cart</button>
      </form>
      </div>
      <Cart  Products={Products} loading={loading}  onincreaseQuantity={this.increaseQuantity} ondecreaseQuantity={this.decreaseQuantity} onDeleteItem={this.deleteProduct}></Cart>
      <Footer price={this.getTotalPrice()}></Footer>
    </div>
  );
      
    }
}

export default App;
