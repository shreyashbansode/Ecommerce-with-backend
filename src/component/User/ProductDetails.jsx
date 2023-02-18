import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import "./Home.css"
import Footer from '../Footer/Footer'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
  const [data, setData] = useState();
  console.log(data)


  const { uid, pid } = useParams();    // those id are pass to navbar beacuase access cart or manage_account details.

  console.log(pid);



  const navigate = useNavigate()


  useEffect(() => {
    axios.get(`http://localhost:1031/product/getuser/${pid}`)
      .then((res) => {

        const data = res.data;
        setData(data)

      })
  }, [pid])




  const CartItem = (e) => {
    e.preventDefault()

    const myobj = {
      pid:pid,    // pid are passing to cart beacuase to defferentiate cart items
      uid: uid,
      Name: data[0].Name,
      Price: data[0].Price,

    }
    console.log(myobj);

    axios.post('http://localhost:1031/cart/create', myobj)
      .then((res) => {
        alert("Cart successfully")
      })
      .catch((err) => {
        alert("Cart error: " + err)
      })
  }
  return (
    <>
      <NavBar id={uid} pid={pid} />  


      <div className="product-box">
        {data?.map((row) => {
          return (
            <>
              <div className="product-img" >
                <img src="/static/2.jpg" alt="err" />
              </div>
              <div className="product_info">
                <span>{row.Name}</span>
                <span>{row.Type}</span>
                <span>{row.Price}</span>
                <div className="cart_btn">
                  <button onClick={CartItem} >Add To cart</button>
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