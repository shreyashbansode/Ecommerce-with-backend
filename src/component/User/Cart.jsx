import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from './NavBar'

const Cart = () => {


    const [data, setData] = useState();

    const Navigate = useNavigate();

    function navigate() {
        Navigate("/user/:id")
    }
    return (
        <>

            <div className="navbar">
                <NavBar />
            </div>
            <div className="cart">
                <div className="cartItem">
                    <div className="cartItem_bx">
                        <div className="img" onClick={navigate}>
                            <img src="./../images/products/2.jpg" alt="" />
                        </div>
                        <span>Name</span>
                        <span>Price</span>
                        <button>Buy Now </button>
                        <button>X</button>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default Cart