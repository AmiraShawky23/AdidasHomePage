import React from 'react'
import VideoPapper from '../../assets/images/video_papper.png'
import VideoIconWithBorder from '../../assets/images/video_icon_with_border.png'


const Video = () => {
  return (
    <section className="video">
        <div className="paper_container">
            <img src={VideoPapper} alt="" />
        </div>
        <div className="video_img">
            <img src={VideoIconWithBorder} alt="" />
        </div>
    </section>
  )
}

export default Video