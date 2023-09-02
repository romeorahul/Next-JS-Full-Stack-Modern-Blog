import React, { Component } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";

export default class mySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.sliderbox}>
        <h1> Multiple items </h1>
        <Slider {...settings}>
          <div className={styles.contentslider}>
            <h1>heading 1</h1>
            <p>iam the para one here iam</p>
            <button>Read More</button>
          </div>
          <div className={styles.contentslider}>
            <h1>heading 1</h1>
            <p>iam the para one here iam</p>
            <button>Read More</button>
          </div>
          <div className={styles.contentslider}>
            <h1>heading 1</h1>
            <p>iam the para one here iam</p>
            <button>Read More</button>
          </div>
          <div className={styles.contentslider}>
            <h1>heading 1</h1>
            <p>iam the para one here iam</p>
            <button>Read More</button>
          </div>
          <div className={styles.contentslider}>
            <h1>heading 1</h1>
            <p>iam the para one here iam</p>
            <button>Read More</button>
          </div>
          <div className={styles.contentslider}>
            <h1>heading 1</h1>
            <p>iam the para one here iam</p>
            <button>Read More</button>
          </div>
          <div className={styles.contentslider}>
            <h1>heading 1</h1>
            <p>iam the para one here iam</p>
            <button>Read More</button>
          </div>
          <div className={styles.contentslider}>
            <h1>heading 1</h1>
            <p>iam the para one here iam</p>
            <button>Read More</button>
          </div>
        </Slider>
      </div>
    );
  }
}
