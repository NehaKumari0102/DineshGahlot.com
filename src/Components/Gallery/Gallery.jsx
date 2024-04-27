import React, { forwardRef } from "react";

import image1 from "../../assets/hero1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/hero3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/hero2.jpg";
import image6 from "../../assets/image6.jpg";

const Gallery = forwardRef((props, ref) => {
  const className = "ImageGallery";

  return (
    <div
      className={
        className +
        " w-full lg:px-32 md:px-20 px-7 sm:pt-20 pt-12 d-sm-grid d-flex flex-col grid-template-columns-3 gap-8"
      }
      ref={ref}
    >
      <img
        src={image1}
        alt="<--Gallery Image-->"
        style={{
          gridRowStart: 1,
          gridRowEnd: 2,
          gridColumnStart: 1,
        }}
        className="object-fit-cover w-100 h-100 user-select-none pe-none"
      />
      <img
        src={image2}
        alt="<--Gallery Image-->"
        style={{
          gridRowStart: 1,
          gridRowEnd: 3,
          gridColumnStart: 2,
        }}
        className="object-fit-cover w-100 h-100 user-select-none pe-none row-span-2"
      />
      <img
        src={image3}
        alt="<--Gallery Image-->"
        style={{
          gridRowStart: 1,
          gridRowEnd: 2,
          gridColumnStart: 3,
        }}
        className="object-fit-cover w-100 h-100 user-select-none pe-none"
      />
      <img
        src={image4}
        alt="<--Gallery Image-->"
        style={{
          gridRowStart: 2,
          gridRowEnd: 4,
          gridColumnStart: 1,
        }}
        className="object-fit-cover w-100 h-100 user-select-none pe-none row-span-2"
      />
      <img
        src={image5}
        alt="<--Gallery Image-->"
        style={{
          gridRowStart: 3,
          gridRowEnd: 4,
          gridColumnStart: 2,
        }}
        className="object-fit-cover w-100 h-100 user-select-none pe-none"
      />
      <img
        src={image6}
        alt="<--Gallery Image-->"
        style={{
          gridRowStart: 2,
          gridRowEnd: 4,
          gridColumnStart: 3,
        }}
        className="image6 object-fit-cover w-100 h-100 user-select-none pe-none row-span-2"
      />
    </div>
  );
});

export default Gallery;
