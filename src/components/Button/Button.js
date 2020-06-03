import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const Button = ({text,isArrow}) => {
  return (
    <button className="styled_btn">
        <span>{text}</span>
        {
            isArrow && 
            <FontAwesomeIcon icon={faLongArrowAltRight} />
            // <i className="fas fa-long-arrow-alt-right"></i>
        }
    </button>
  )
}

export default Button