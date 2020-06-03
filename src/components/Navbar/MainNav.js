import React from 'react'
import RightSideMainNav from './RightSideMainNav';

const MainNav = ({handleHover}) =>{
   
    return (
      <div className="main_menu">
        <ul className="left_side_menu">
            <li>
              <a 
                className="bold" 
                href="github.com"
                // onMouseOver={()=> handleHover(true)}
                // onMouseLeave={()=> handleHover(false)}
              >men
              </a>
            </li>
            <li><a className="bold" href="github.com">women</a></li>
            <li><a className="bold" href="github.com">kids</a></li>
            <li><a href="github.com">sport</a></li>
            <li><a href="github.com">brands</a></li>
            <li><a href="github.com">release dates</a></li>
        </ul>
        <RightSideMainNav />
    </div>
    )
}

export default MainNav;