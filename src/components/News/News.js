import React from 'react'
import Button from '../Button/Button'
import VideoIcon from '../../assets/images/video_icon.png'

const News = () => {
  return (
    <section className="news">
        <div className="container">
            <h3>
                faster than people expect - martinus evans
            </h3>
            <div className="news_content">
                <div className="content">
                    <p>
                        "It's very important to know: Fast is about what you can do, not about what anybody else can do."
                        <br />
                        <br />
                        Martinus Evans knows he might not be the man to run a course record in the Berlin Marathon.
                    </p>
                    <div className="buttons_container">
                        <Button text='learn more' isArrow={false}/>
                    </div>
                </div>
                <div className="news_imgs">
                    <div className="box_bg_img front_img">
                        <div className="video_img">
                            <img src={VideoIcon} alt="" />
                        </div>
                    </div>
                    <div className="box_bg_img middle_img"></div>
                    <div className="box_bg_img back_img">
                        <div className="video_img">
                            <img src={VideoIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default News