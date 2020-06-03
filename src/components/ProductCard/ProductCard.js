import React from 'react'
import Product360 from '../../assets/images/product_360.png'

const ProductCard = ({productCard}) => {

  const ImgStyle = {
    // background: `url(${productCard.img}) no-repeat`,
    backgroundSize: 'cover',
  }
  return (
    <div className="col s12 m3 l2">
        <div className="product_card" style={ImgStyle}>
          <div className="view_360">
              <img src={Product360} alt="" />
          </div>
        </div>
        <div className="product_content left">
          <h6>{productCard.name}</h6>
          <p>{productCard.text}</p>
          <p>{productCard.price}</p>
        </div>
    </div>
  )
}

export default ProductCard;