import React, { forwardRef, useState } from "react";
import "./Hero.scss";

import Front from "./Front/Front";
import Back from "./Back/Back";

import image1 from "../../assets/hero1.jpg";
import image2 from "../../assets/hero2.jpg";
import image3 from "../../assets/hero3.jpg";
import image4 from "../../assets/hero4.jpg";

// List of images
const images = [image2, image1, image3, image4];

const Hero = forwardRef((props, ref) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const className = "HeroSection";

  // Show previous Image
  function slideBack() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setNextImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  // Show next Image
  function slideForward() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setNextImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="HeroSection position-relative" ref={ref}>
      {/** Text stuff */}
      <Front
        slideBack={slideBack}
        slideForward={slideForward}
        currentImageIndex={currentImageIndex}
        totalImages={images.length}
      />
      {/** Background images */}
      <Back
        images={images}
        currentImageIndex={currentImageIndex}
        nextImageIndex={nextImageIndex}
      />

      {/** This component is visible below the images on small screen */}
      <div
        className={
          className +
          "__textsSection d-block d-sm-none d-flex flex-col align-items-start p-4 pb-0 gap-3"
        }
      >
        <h1
          className={
            className +
            "__tagline md:text-5xl sm:text-3xl text-2xl text-start"
          }
        >
          Photography For Pure Souls & Lovers at Heart
        </h1>
        <p className={className + "__moreText md:text-lg text-sm"}>
          Lorem ipsum dolor sit.
        </p>
        <button className="bg-black text-light px-md-5 px-3 py-md-2 py-1 md:text-lg text-md">
          read more
        </button>
      </div>
    </div>
  );
})


export default Hero;
