import React, { forwardRef } from "react";
import "./Testimonial.scss";

import image1 from "../../assets/testimonial.jpg";
import image2 from "../../assets/hero2.jpg";
import image6 from "../../assets/image6.jpg";

const Testimonial = forwardRef((props, ref) => {
  const className = "Testimonial";

  return (
    <div
      className={
        className +
        " w-full lg:h-[60vh] md:h-[50vh] h-[100%] d-flex flex-md-row flex-col lg:gap-20 gap-6 xl:px-32 md:px-14 px-8 md:pt-24 sm:pt-16 pt-12"
      }
      ref={ref}
    >
      <section
        className={
          className +
          "__rightSide sm:w-[50%] w-100 h-100 d-flex flex-col md:gap-8 sm:gap-6 gap-3.5"
        }
      >
        <h1 className="fs-2">Testimonial</h1>

        <p className="sm:text-base text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          explicabo, non in voluptate enim exercitationem deleniti cumque
          molestias iusto ab excepturi ut possimus magni veniam quia quas illo
          voluptatem consequuntur pariatur, voluptas itaque.
        </p>
      </section>

      <section className={className + "__leftSide sm:w-[50%] w-100 h-100"}>
        <div
          id="carouselExampleFade"
          class="h-100 carousel slide carousel-fade"
        >
          <div class="carousel-inner h-100">
            <div class="carousel-item md:h-100 sm:h-[50vh] h-[35vh] active">
              <img
                src={image1}
                alt="Testimonial"
                className="d-block w-100 h-100 object-fit-cover"
              />
            </div>
            <div class="carousel-item md:h-100 sm:h-[50vh] h-[35vh]">
              <img
                src={image6}
                alt="Testimonial"
                className="d-block w-100 h-100 object-fit-cover"
              />
            </div>
            <div class="carousel-item md:h-100 sm:h-[50vh] h-[35vh]">
              <img
                src={image2}
                alt="Testimonial"
                className="d-block w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
});

export default Testimonial;
