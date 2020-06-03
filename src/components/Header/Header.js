import React from 'react'
import AddidasLogoWhite from '../../assets/images/addidas_logo_white.png'

const Header = () => {

  return (
    <header>
      <div className="content left">
        <h1>all in for</h1>
        <h2>#my girl</h2>
        <h4>They run the world</h4>
      </div>
      <div className="logo_container">
          <img src={AddidasLogoWhite} alt="" />
      </div>
  </header>
  )
}

export default Header;