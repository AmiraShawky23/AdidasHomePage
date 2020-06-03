import React from 'react'
import AdidasImg from '../../assets/images/adidas.png'

const ShoppingTypeCard = ({title, text, img}) => {

  const bgImg ={
    background: `url(${img}) no-repeat`,
    overflow: 'hidden',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
    backgroundPositionY: '5%'
  }

  return (
    <div className="col s12 m4">
        <div className="shopping_type_card" style={bgImg}>
            <div className="content center">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            <div className="adidas_img">
                <img src={AdidasImg} alt="" />
            </div>
            <div className="gradian_overlay"></div>
        </div>
    </div>
  )
}

export default ShoppingTypeCard;