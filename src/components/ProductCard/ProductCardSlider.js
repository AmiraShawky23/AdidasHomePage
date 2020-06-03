import React from 'react'
import Slider from './Slider';

const ProductCardSlider = ({isCenter, bg, noBg}) => {

  const ProductsList = [
    { price: 'EGP 250', text: 'Women Clothes', name: 'Trefoil T-Sirt', img: '../../assets/images/product_1.png'},
    { price: 'EGP 250', text: 'Women Clothes', name: 'Trefoil T-Sirt', img: '../../assets/images/product_2.png'},
    { price: 'EGP 250', text: 'Women Clothes', name: 'Trefoil T-Sirt', img: '../../assets/images/product_3.png'},
    { price: 'EGP 250', text: 'Women Clothes', name: 'Trefoil T-Sirt', img: '../../assets/images/product_4.png'},
    { price: 'EGP 250', text: 'Women Clothes', name: 'Trefoil T-Sirt', img: '../../assets/images/product_5.png'},
    { price: 'EGP 250', text: 'Women Clothes', name: 'Trefoil T-Sirt', img: '../../assets/images/product_6.png'},
    { price: 'EGP 250', text: 'Women Clothes', name: 'Trefoil T-Sirt', img: '../../assets/images/product_7.png'},
    { price: 'EGP 250', text: 'Women Clothes', name: 'Trefoil T-Sirt', img: '../../assets/images/product_8.png'},
  ]
  return (
    <div className="product_slider">
      {
        isCenter &&
          <h2 className="heading_h2">
            <span className="bg">
                {bg}
            </span>
            <span className="no_bg">
                {noBg}
            </span>
        </h2>
      }
      {
        !isCenter &&
          <h2 className="heading_h2 alignLeft">
            <span className="bg">
                {bg}
            </span>
            <span className="no_bg">
                {noBg}
            </span>
        </h2>
      }
      
      <Slider list={ProductsList} />
    </div>
  )
}

export default ProductCardSlider;