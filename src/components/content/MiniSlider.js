import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, ResponsiveContext} from "grommet";
import { MiniSliderImage } from "./MiniSliderImage";
import { data, images } from "./data";

class MiniSlider extends Component {
    galleryItems() {
      return images.map((item, index) => (
        <MiniSliderImage
          src={item}
          name={data[index] && Object.keys(data[index])}
          score={data[index] && Object.values(data[index])}
          key={index}
        />
      ));
    }
  
    getNumOfItemsToShow(size) {
      return size === "xsmall"
        ? 2
        : size === "small"
        ? 3
        : size === "medium"
        ? 4
        : 5;
    }
  
    render() {
      const items = this.galleryItems();
      const settings = {
        focusOnSelect: true,
        className: "center",
        infinite: true,
        slidesToScroll: 1,
        speed: 1200,
        autoplay: false,
        swipeToSlide: true
      };
  
      return (
        <ResponsiveContext.Consumer>
          {size => (
            <Box pad={{horizontal:"large"}}>
                <Box>
                    <Slider slidesToShow={this.getNumOfItemsToShow(1)} {...settings}>
                    {items}
                    </Slider>
                    
                </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export {MiniSlider};
  