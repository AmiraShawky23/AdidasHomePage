import React from 'react'
import MallSlider from './MallSlider'
import Dgree360 from '../../assets/images/dgree360.png'

const MallCardSlider = () => {

  const MallsList = [
    { text: 'City Stars', img: '../../assets/images/mall_1.png'},
    { text: 'City Stars', img: '../../assets/images/mall_2.png'},
    { text: 'City Stars', img: '../../assets/images/mall_3.png'},
    { text: 'City Stars', img: '../../assets/images/mall_3.png'},
    { text: 'City Stars', img: '../../assets/images/mall_3.png'},
    { text: 'City Stars', img: '../../assets/images/mall_3.png'}
  ]

  return (
    <div className="mall_slider">
      <h2 className="heading_h2">
        <span className="bg">
            real shopping
        </span>
        <span className="no_bg">
            exprince
        </span>
      </h2>
      <MallSlider list={MallsList} />
      <div className='dgree360'>
        <img src={Dgree360} alt='' />
      </div>
      <div className='mall_papper'></div>
    </div>
  )
}

export default MallCardSlider;