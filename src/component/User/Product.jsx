import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom';

const Product = (props) => {

  const [productData, setproductData] = useState();

  const uid = props.id;  // id are pass to product details
  const navigate = useNavigate();

  console.log(productData)

  useEffect(() => {
    axios.get("http://localhost:1031/product/get")
      .then((res) => {
        const data = res.data;
        setproductData(data);
      })

  }, [])

  // function Navigate() {
  //   navigate(`/pdetail/${uid}/${}`)

  // }
  return (
    <>

      <div className="product" >
        {productData?.map((row) => {
          
         props.setpid(row._id)
          return (
            <>
              <NavLink to={`/pdetail/${uid}/${row._id}`}>

                <div className="product-bx" >
                  <div className="pr-img">
                    <img src="/static/2.jpg" alt="err" />
                  </div>
                  <div className="pr-details">
                    <h5>{row.Name}</h5>
                    <h5>{row.Type}</h5>
                    <h5>{row.Price}</h5>
                  </div>
                </div>
              </NavLink>

            </>
          )
        })}
      </div>
    </>
  )
}

export default Product