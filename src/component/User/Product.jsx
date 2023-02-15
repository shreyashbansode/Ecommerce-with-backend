import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Product = () => {

  const [productData, setproductData] = useState();

  const navigate = useNavigate();

  console.log(productData)

  useEffect(() => {
    axios.get("http://localhost:1031/product/get")
      .then((res) => {
        const data = res.data;
        setproductData(data);
      })

  }, [])

  function Navigate() {
    navigate("/pdetail")

  }
  return (
    <>

      <div className="product" >
        {productData?.map((row) => {
          return (
            <>
              <div className="product-bx" onClick={Navigate}>
                <div className="pr-img">
                  <img src="./../images/products/2.jpg" alt="err" />
                </div>
                <div className="pr-details">
                  <h5>{row.Name}</h5>
                  <h5>{row.Type}</h5>
                  <h5>{row.Price}</h5>
                </div>
              </div>

            </>
          )
        })}
      </div>
    </>
  )
}

export default Product