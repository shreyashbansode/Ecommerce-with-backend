import React, { useEffect } from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'



const SellerDashboard = () => {

  const [pData, setpData] = useState([]);
  console.log(pData);


  const { id } = useParams();
  const [userData, setuserData] = useState([]);
  // console.log(pData);

  useEffect(() => {

    axios.get("http://localhost:1031/product/get")
      .then(async (res) => {
        const pdetails = await res.data;
        console.log(pdetails)
        setpData(pdetails);
      })

    axios.get(`http://localhost:1031/${id}`)
      .then(async (res) => {
        const udata = await res.data;
        setuserData(udata);

      })

  }, [])

  pData.filter((row) => {
    if (row.uid === userData._id) {
      return row
    }
  })



  return (
    <>
      <div className="seller-dash">
        <div className="seller-content">
          <div className="logo">
            <img src="../../images/assets/bcompany.png" alt="err" />
          </div>
          <div className="slider">
            <div className="slider-img">
              <img src="../images/img.jpg" alt="err" />
            </div>
            <div classname="slider_baner" style={{ position: "absolute", top: "100px", left: "150px" }}>
              <h2>Hello </h2>

              <h5>Total Shop Earning Rs-599 </h5>
              <h6>Your Total No of Orders 1</h6>
              <h6>Your Total No of products 1</h6>
              <NavLink to={`/pdetails/${id}`}><button style={{ border: "none", width: "100%" }}>Add Product</button></NavLink>
            </div>

            <div className="product">
              {pData.map((row) => {
                return (
                  <>
                    <div className="product-bx">
                      <div className="pr-img">
                        <img src="./../images/products/2.jpg" alt="err" />
                      </div>
                      <div className="pr-details">
                        <h5>Name:{row.Name}</h5>
                        <h5>Type:{row.Type}</h5>
                        <h5>price:{row.Price}</h5>
                      </div>
                    </div>
                  </>
                )

              })}
            </div>



          </div>
        </div>
      </div>

    </>
  )
}

export default SellerDashboard