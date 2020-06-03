import React, {useState, Component} from 'react'
import MainNav from './MainNav';
import TopNav from './TopNav';
import Logo from '../../assets/images/icon-adidas-logo.svg'
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainHover: true,
    }
  }
  
  handleHover = (isHover) => {
    this.setState({
      mainHover: isHover
    })
  }

  render() {

    const topNavLinks= [
      { id: 1, text: 'help'},
      { id: 2, text: 'exchange & returns'},
      { id: 3, text: 'order tracker'},
      { id: 4, text: 'join creators club'},
      { id: 5, text: 'creators club'},
      { id: 6, text: 'log in'}
    ];
    return (
      <div className="navbar-fixed">
          <nav className="nav-wrapper white">
            <div className="fluid-container">
              <a href="github.com" className="brand-logo">
                  <img src={Logo} alt="" />
              </a>
              <a href="github.com" className="sidenav-trigger" data-target="mobile-links">
                <FontAwesomeIcon icon={faBars} />
              </a>
              <div className="hide-on-med-and-down">
                  <div className="main_menu_container">
                    <TopNav topNavList={topNavLinks}/>
                    <MainNav onMouseOver={this.state.handleHover} onMouseLeave={this.state.handleHover} />
                  </div>      
              </div>
              <div className='hide-on-med-and-up'>
              <ul className="right_side_menu">
                <div className="icons_container">
                  <FontAwesomeIcon icon={faHeart} />
                  <FontAwesomeIcon icon={faShoppingBag} />
                </div>
              </ul>
              </div>
            </div>
          </nav>
          {
            console.log(this.mainHover)
          }
          {
            this.mainHover && 
            <Dropdown />
          }
      </div>
    )
  }
  
}

export default Navbar;