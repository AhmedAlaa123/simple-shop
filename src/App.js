
import './App.css';
import React from 'react';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import Menu from './components/menu';
import Cart from './components/cart';
import AddProduct from './components/add-product-page';
import PageNotFound from './components/notFound';
import LoginPage from './components/login-page';



class App extends React.Component {
   
  // component local data
  state = {

    user:{
      username:'ahmed',
      password:'1234',
      isActive:false
    }, 
    // intializing products
    products:[
        
    ]
 }
  // handeling add product to cart or remove from cart
 handelAddToCartOrRemove=product=>{
  // Clone
  const products=[...this.state.products];
  const index=products.indexOf(product);
  const productClone=products[index];
  //Edit
  productClone.incart=!productClone.incart;
  productClone.count=0
  products[index]=productClone;
  //Set State
  this.setState({products})
 }
 // handeling increment of product count
 handdelIncremnt=product=>{
   //Clone
  const products=[...this.state.products];
  const index=products.indexOf(product);
  const productClone=products[index];
  //Edit
  productClone.count++
  products[index]=productClone;
  //Set State
  this.setState({products})
 }

 // handeling decrement of product count
 handdeldecremnt=product=>{
   //Clone
  const products=[...this.state.products];
  const index=products.indexOf(product);
  const productClone=products[index];
  //Edit
  productClone.count=productClone.count>0?productClone.count-1:productClone.count
  products[index]=productClone;
  //Set State
  this.setState({products})
 }

 // handeling resting products count on shopping cart
 handelReset=()=>{
   const products=this.state.products.map(product=>{
     product.count=0 
    return product
    })
    this.setState({products})
 }

 // handling adding product to the menu
 handelAddProduct=product=>{
   const {products}=this.state;
  product.price=parseInt(product.price)
  product.id=products.length+1;
  products.push(product)
   this.setState({products})
  alert('Product is added to menu ! ')
 }
 // handeling login
 handelLogin=user=>{
   
   if(this.state.user.username===user.username&&this.state.user.password===user.password)
   {
    // clone and edit user
     user={...user,isActive:true}
     // set state
     this.setState({user})
    return true
    }

    return false
 }
 componentDidMount(){
  // getting products from localstorage
  const products=localStorage.getItem('products')
 // handling if products is null for the first opening to this site
  if(products)
    {
      // setting state with products that in localstorage after converting it to array
       this.setState({products:JSON.parse(products)})
    }
  
    // this event for window before closing the web page
  window.onbeforeunload=e=>{
    // storing products in localstorage
     localStorage.setItem('products',JSON.stringify(this.state.products))
   }
 }
  render(){
    return (
      <BrowserRouter>
        <Navbar/>
      <Switch>
        <Route exact  path='/simple-shop/menu' render={(props)=><Menu {...this.state} addToCart={this.handelAddToCartOrRemove}/>}/>
        <Route path='/simple-shop/cart' render={(props)=><Cart
          {...props} 
          products={this.state.products.filter(product=>product.incart)}
          reset={this.handelReset}
          incrementCount={this.handdelIncremnt}
          decrementCount={this.handdeldecremnt}
          deleteProduct={this.handelAddToCartOrRemove}
          />}/>
        <Route path='/simple-shop/add-product' render={(props)=><AddProduct {...props} {...this.state.user} submit={this.handelAddProduct}/>}/>
        <Route path='/simple-shop/pagenotfound' component={PageNotFound}/>
        <Route path='/simple-shop/login' render={(props)=><LoginPage {...props} login={this.handelLogin}/>}/>
        <Redirect exact to='/simple-shop/menu' from='/'/>
        <Redirect to='/simple-shop/pagenotfound'/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
