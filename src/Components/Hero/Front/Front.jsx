import React from "react";
import "./Front.scss";

import SlideButtons from "../SlideButtons/SlideButtons";

const Front = (props) => {
  const className = "HeroSection__Front";

  return (
    <div
      className={
        className +
        " w-100 xl:px-32 lg:px-14 px-8 md:h-[100vh] sm:h-[75vh] h-[50vh] position-absolute top-0 z-1 d-flex flex-col justify-content-end"
      }
    >
      <div
        className={
          className +
          "__texts w-100 h-[55%] my-md-5 my-3 d-none d-sm-flex flex-row"
        }
      >
        <section
          className={
            className +
            "__rightSide md:w-[50%] sm:w-[70%] h-100 d-flex flex-col justify-content-between align-items-start"
          }
        >
          <h1 className={className + "__tagline sm:text-5xl text-3xl"}>
            Photography For Pure Souls & Lovers at Heart
          </h1>

          <button className="bg-black text-light px-md-5 px-3 py-md-2 py-1 md:text-lg text-sm">
            read more
          </button>
        </section>

        <section
          className={
            className +
            "__leftSide md:w-[50%] w-[30%] h-100 d-flex align-items-end justify-content-end"
          }
        >
          <p className={className + "__moreText md:text-lg text-sm"}>
            Lorem ipsum dolor sit.
          </p>
        </section>
      </div>

      {/**Images Chagge Controller */}
      <SlideButtons
        slideBack={props.slideBack}
        slideForward={props.slideForward}
        currentImageIndex={props.currentImageIndex}
        totalImages={props.totalImages}
      />
    </div>
  );
};

export default Front;
