import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import "./Home.css"
import Footer from '../Footer/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductDetails = () => {
  const [data, setData] = useState();

  const navigate =useNavigate()


  useEffect(() => {
    axios.get("http://localhost:1031/product/get")
      .then((res) => {
        const data = res.data;
        setData(data)

      })
  })

  function MenuNavigate(){
    navigate("/user/:id")
  }
  return (
    <>
      <NavBar />


      <div className="product-box">
        {data?.map((row) => {
          return (
            <>
              <div className="product-img" onClick={MenuNavigate}>
                <img src="./../images/products/2.jpg" alt="err" />
              </div>
              <div className="product_info">
                <span>{row.Name}</span>
                <span>{row.Type}</span>
                <span>{row.Price}</span>
                <div className="cart_btn">
                  <button >Add To cart</button>
                  <button>go To cart</button>
                </div>

              </div>


            </>
          )
        })}

      </div>
      <Footer />


    </>
  )
}

export default ProductDetails;