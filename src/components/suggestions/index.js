import React from "react";
import Gallery from "react-slick";

import GalleryItem from "./item.js";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./index.css";

export default class Suggestions extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true
    };
    return (
      <div className="gallery">
        <Gallery {...settings}>
          {this.props.menus.map((menu, index) => (
            <GalleryItem key={index + 1} {...menu} />
          ))}
        </Gallery>
      </div>
    );
  }
}
