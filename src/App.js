import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import {Route,Switch,Redirect} from 'react-router-dom'
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
        {/* <Products sortBy="newest"/> */}
        {/* Register one or more routs */}
      {/* The matching algorithm that the route component uses 
         is that two components (home component and the component we clicked)starts with /(same path)
         so both are rendered.          */}
      {/* One solution is to use exact attribute. */}
      <Switch>
        <Route path ="/products/:id" component={ProductDetails}/>
       {/* <Route path="/products" component={Products}/> */}
         <Route path="/products" render={(props)=><Products sortBy="newest" {...props}/>}/>
       <Route path="/posts/:year?/:month?" component={Posts}/>
       <Route path="/admin" component={Dashboard}/>   
       <Redirect from="/messages" to="/posts"/>
       <Route path="/"  exact component={Home}/>
       <Route path="/not-found"   component={NotFound}/>
       <Redirect to="/not-found"/>
       </Switch>
       
       {/* <Route path="/" exact component={Home}/> */}
       
        </div>
      </div>
    );
  }
}

export default App;
