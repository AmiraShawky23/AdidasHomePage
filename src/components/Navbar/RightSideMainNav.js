import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

const RightSideMainNav = () => {

  return (
    <ul className="right_side_menu">
      <form>
          <input id="search" placeholder="Search" type="search" required />

            <label className="label-icon" htmlFor="search">
              <FontAwesomeIcon icon={faSearch} />
            </label>
            <FontAwesomeIcon icon={faTimes} />
      </form>
      <div className="icons_container">
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faShoppingBag} />
      </div>
  </ul>
  )
}

export default RightSideMainNav;