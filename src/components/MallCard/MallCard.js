import React from 'react'

const MallCard = ({mallCard}) => {

  return (
    <div className="col s12 m4 l3">
        <div className="mallCard center">
            <h6>{mallCard.text}</h6>
            <div className="black_overlay"></div>
        </div>
    </div>
  )
}

export default MallCard;