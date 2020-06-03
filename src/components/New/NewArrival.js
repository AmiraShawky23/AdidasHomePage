import React from 'react'
import Button from '../Button/Button'

const NewArrival = () => {
  return (
    <section className="new_arrival">
        <div className="container">
            <div className="new_arrival_content">
                <div className="new_arrival_imgs">
                    <div className="box_bg_img front_img"></div>
                    <div className="box_bg_img back_img"></div>
                </div>
                <div className="content center">
                    <h2 className="heading_h2">
                        <span className="bg">
                            new
                        </span>
                        <span className="no_bg">
                            arrival
                        </span>
                    </h2>
                    <div className="buttons_container">
                        <Button text='shop men' isArrow={true}/>
                        <Button text='shop women' isArrow={true}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewArrival