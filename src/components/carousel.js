import React from 'react';
import Slider from 'infinite-react-carousel';
import img1 from "../images/wires.jpg"
import img2 from "../images/a1.jpg"
import img3 from "../images/a2.jpg"
import img4 from "../images/a3.jpg"
import img5 from "../images/a4.jpg"
import img6 from "../images/a5.jpg"
import img7 from "../images/a6.jpeg"
import img8 from "../images/a7.jpg"
import img9 from "../images/a8.jpg"
import img10 from "../images/a9.jpg"
import img12 from "../images/a11.jpg"
import img13 from "../images/a12.jpg"
import img14 from "../images/a13.jpg"
import img15 from "../images/a14.webp"
import carouselStyles from "../components/carousel.module.scss"

const SliderComp=()=> {

    const settings =  {
      adaptiveHeight: true,
      duration: 50,
      swipe: false,
      arrows:true,
      autoplay:true,
      autoplaySpeed:4000,
      dots:true
    };
    return (
      <div>
        <Slider { ...settings }>
        <div className={carouselStyles.img}>
           <img src={img1} className={carouselStyles.imgb} alt="1" />
        </div>
        <div className={carouselStyles.img}>
            <img src={img2} className={carouselStyles.imgb} alt="2" />
        </div>
        <div className={carouselStyles.img}>
           <img src={img3} className={carouselStyles.imgb} alt="3" />
        </div>
        <div className={carouselStyles.img}>
          <img src={img4} className={carouselStyles.imgb} alt="4" />
        </div>
        <div className={carouselStyles.img}>
           <img src={img5} className={carouselStyles.imgb} alt="5" />
        </div>
        <div className={carouselStyles.img}>
           <img src={img6} className={carouselStyles.imgb} alt="6" />
        </div>
        <div className={carouselStyles.img}>
           <img src={img7} className={carouselStyles.imgb} alt="7" />
        </div>
        <div className={carouselStyles.img}>
           <img src={img8} className={carouselStyles.imgb} alt="8" />
        </div>
        <div className={carouselStyles.img}>
           <img src={img9} className={carouselStyles.imgb} alt="9" />
        </div>
        <div className={carouselStyles.img}>
           <img src={img10} className={carouselStyles.imgb} alt="10" />
        </div>
        <div className={carouselStyles.img}>
           <img src={img12} className={carouselStyles.imgb} alt="12" />
        </div>
        <div className={carouselStyles.img}>
           <img src={img13} className={carouselStyles.imgb} alt="13" />
        </div>
        <div className={carouselStyles.img}>
           <img src={img14} className={carouselStyles.imgb} alt="14" />
        </div>
        <div className={carouselStyles.img}>
           <img src={img15} className={carouselStyles.imgb} alt="15" />
        </div>

        </Slider>
      </div>
    );
  }

export default SliderComp;