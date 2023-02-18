import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from './NavBar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const Cart = () => {


    const [cartData, setData] = useState();


    const { uid, pid } = useParams();
    // console.log(pid)

    useEffect(() => {

        axios.get(`http://localhost:1031/cart/get`)
            .then((res) => {
                const data = res.data;
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])

    const filter = cartData?.filter((row) => {
        console.log(uid, row.uid);

        if (uid === row.uid) {
            return row
        }

    })




    const Navigate = useNavigate();

    function navigate() {

        axios.delete(`http://localhost:1031/cart/${pid}`)
        .then(()=>{
            alert('cart data deleted')
            window.location.reload()
        })

    }
    return (
        <>

            <div className="navbar">
                <NavBar id={uid} pid={pid} />
            </div>
            <div className="cart">
                <div className="cartItem">
                    {filter?.map((row) => {
                        return (
                            <>
                                <div className="cartItem_bx" style={{ marginTop: "10px" }}>
                                    <div className="img">
                                        <img src="/static/2.jpg" alt="" />
                                    </div>
                                    <span>{row.Name}</span>
                                    <span>{row.Price}</span>
                                    <span>{row.quantity}</span>
                                    <span>{row.quantity * row.Price}</span>
                                    <NavLink to={`/checkout/${uid}/${pid}`}><button>Buy Now </button></NavLink>
                                    <button onClick={navigate}>X</button>
                                </div>

                            </>
                        )
                    })}
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default Cart