import React from "react";
import "./SlideButtons.scss";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const SlideButtons = (props) => {
  const className = "HeroSection__sliderButtons";
  // Getting slideBack, slideForward and number of totalImages from props
  
  return (
    <div
      className={
        className +
        " w-100 p-sm-3 p-2 border-top border-white d-flex flex-row justify-content-between"
      }
    >
      <FaArrowLeft className="md:text-2xl text-lg cursor-pointer" onClick={props.slideBack} />

      {/**Example: 01/06 */}
      <p>{`0${props.currentImageIndex + 1} / 0${props.totalImages}`}</p>

      <FaArrowRight
        className="md:text-2xl text-lg cursor-pointer"
        onClick={props.slideForward}
      />
    </div>
  );
};

export default SlideButtons;
