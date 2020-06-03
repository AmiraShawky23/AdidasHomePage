import React, { Component } from 'react'
import "react-multi-carousel/lib/styles.css";
import MallCard from './MallCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomDot = ({ active, onClick }) => {
  return (
    <li>
      <button
        className={`custom-dot ${active ? "custom-dot--active" : ""}`}
        onClick={() => onClick()}
      />
    </li>
  );
};

class MallSlider extends Component {
  state = { value: 0 };
  
    render () {

      const list = this.props.list;
      const Newlist = Object.keys(list);

      const { deviceType } = this.props;
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      return (
        <div>
          <Carousel
            swipeable={true}
            draggable={true}
            infinite={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={5000}
            ssr
            focusOnSelect={true}
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            showDots
            centerMode={true}
            customDot={<CustomDot />}
            arrows={false}
          >
            {
              Newlist.length ? (
                Newlist.map(
                  function(key) {
                    return <MallCard key={key} mallCard={list[key]} />
                  }
                )
              ) : (
                <div></div>
              )
            }
          </Carousel>
        </div>
      );
    }
}


export default MallSlider;