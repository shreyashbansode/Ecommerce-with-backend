import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer';
import NavBar from './NavBar';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {

    const { uid, pid } = useParams();

    console.log(pid);
    const [pdata, setData] = useState();
    const [userdata, setuserData] = useState();

    const [Address, setAddress] = useState();
    console.log(Address);


    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:1031/product/getuser/${pid}`)
            .then((res) => {
                const data = res.data;
                setData(data)

            })


        axios.get(`http://localhost:1031/${uid}`)
            .then((res) => {
                const userData = res.data[0];
                setuserData(userData);
                setAddress(userData.Address)

            })




    }, [pid])


    const checkoutData = (e) => {
        e.preventDefault();

        alert("order placed Succefully ")
        axios.delete(`http://localhost:1031/cart/${pid}`)
            .then((res) => {
                alert("order deleted ")
                navigate(`/cart/${uid}/${pid}`)
            })
    }





    return (
        <>
            <div className="checkoutbx">
                <div className="navbar">
                    <NavBar id={uid} pid={pid} />
                </div>
                <div className="checkbx">
                    <div className="checkout">
                        <div className="checkout_bx">
                            <div className="cartimg">
                                <img src="/static/2.jpg" alt="err" />
                            </div>
                            {pdata?.map((row) => {
                                return (
                                    <>
                                        <div className="info">
                                            <span>{row.Type}</span>
                                            <span>{row.Price}</span>
                                            <span >{Address}</span>
                                            <span>Cod Only</span>
                                            <p>Expected Delivery time 6 day's after buying</p>
                                            <button onClick={checkoutData}>Checkout</button>
                                        </div>


                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="footer" style={{ marginTop: "20px" }}>
                    <Footer />
                </div>


            </div>


        </>
    )
}

export default Checkout