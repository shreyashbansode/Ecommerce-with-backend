import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './component/User/Home';
import Login from './component/Authentication/Login';
import SignUp from './component/Authentication/SignUp';
import User from './component/User/Home';
import Seller from "./component/Seller/SellerDashboard"
import Pdetails from './component/Seller/Pdetails';
import ProductDetails from "./component/User/ProductDetails"
import Cart from './component/User/Cart';
import Edit from './component/User/EditUser'
import Checkout from './component/User/Checkout';
function App() {




  return (
    <>

      <Routes>

        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/user/:id" element={<User />}></Route>
        <Route path="/seller/:id" element={<Seller />}></Route>
        <Route path="/pdetails/:id" element={<Pdetails />}></Route>
        <Route path="/pdetail/:uid/:pid" element={<ProductDetails />}></Route>
        <Route path="/cart/:uid/:pid" element={<Cart />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/checkout/:uid/:pid" element={<Checkout />}></Route>
      </Routes>

    </>
  );


}

export default App;
