import React from 'react'
import Button from '../Button/Button'

const NewStyle = () => {
  return (
    <section className="new_styles">
        <div className="container">
            <h2 className="heading_h2">
                <span className="bg">
                    new
                </span>
                <span className="no_bg">
                    styles
                </span>
            </h2>
            <div className="new_styles_content">
                <div className="new_styles_imgs">
                    <div className="box_bg_img front_img"></div>
                    <div className="box_bg_img middle_img"></div>
                    <div className="box_bg_img back_img"></div>
                </div>
                <div className="content center">
                    <h4>ultraboost 20</h4>
                    <p>mote bosst. more comfort.</p>
                    <div className="buttons_container">
                        <Button text='shop men' isArrow={true}/>
                        <Button text='shop women' isArrow={true}/>
                        <Button text='kids women' isArrow={true}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewStyle