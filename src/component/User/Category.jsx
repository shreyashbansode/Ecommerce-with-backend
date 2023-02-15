import React from 'react'
import Slider from "react-slick";

const Category = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (

    <>
      <div className="category">

          
        <div className="category-bx">
            <div className="img1">
              <img src="../images/assets/top/category-1.png" alt="err" />
            </div>
            <div className="img2">
              <img src="../images/assets/top/category-2.png" alt="" />
            </div>
            <div className="img3">
              <img src="../images/assets/top/category-3.png" alt="" />
            </div>

        </div>
        


      </div>

    </>
  )
}

export default Category