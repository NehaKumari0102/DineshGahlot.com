import React, { useEffect, useRef, useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import image0 from "../../assets/hero1.jpg";
import image1 from "../../assets/image6.jpg";
import image2 from "../../assets/hero3.jpg";
import image3 from "../../assets/image4.jpg";
import image4 from "../../assets/hero2.jpg";
import image5 from "../../assets/image2.jpg";

const Carousel = () => {
  const className = "Carousel";
  const [currentImageIndex, setcurrentImageIndex] = useState(0); // Index of the current image
  const block = document.getElementsByClassName("Carousel__images")[0]; //The image container

  const image0Ref = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null); // To get reference of each image

  const images = [
    { src: image0, ref: image0Ref },
    { src: image1, ref: image1Ref },
    { src: image2, ref: image2Ref },
    { src: image3, ref: image3Ref },
    { src: image4, ref: image4Ref },
    { src: image5, ref: image5Ref },
  ];

  //Scroll the images to left
  function scrollMinus(elemRef, nextIndex) {
    if (currentImageIndex <= 0 || elemRef == undefined) {
      return; // Can't show prev images
    }

    try {
      block.scrollTo({
        left: elemRef?.current.offsetLeft - 20,
        behavior: "smooth",
      });
    } catch (err) {
      console.log("The Error says: ", err);
    }
    setcurrentImageIndex(nextIndex);
  }

  //Scroll images to right
  function scrollPlus(elemRef, nextIndex) {
    if (currentImageIndex >= images.length - 1 || elemRef == undefined) {
      return; // Already at the last image
    }

    try {
      console.log(elemRef, nextIndex);
      block.scrollTo({
        left: elemRef?.current.offsetLeft - 20,
        behavior: "smooth",
      });
    } catch (err) {
      console.log("The Error says: ", err.message);
    }
    setcurrentImageIndex(nextIndex);
  }

  return (
    <div
      className={className + " w-full md:h-[60vh] sm:h-[45vh] h-[30vh] mt-6"}
    >
      {/**Collection of images  */}
      <div
        className={
          className +
          "__images h-100 px-6 d-flex flex-row gap-7 overflow-hidden Carousel__images"
        }
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`image${index}`}
            className="h-100 w-100 pe-none object-fit-cover"
            ref={image.ref}
          />
        ))}
      </div>

      {/**The Image slide controller */}
      <div
        className={
          className +
          " w-100 p-4 border-top border-white d-flex flex-row gap-6 align-items-center justify-content-center"
        }
      >
        <FaArrowLeft
          className="md:text-2xl text-lg cursor-pointer"
          onClick={() =>
            scrollMinus(
              images[currentImageIndex - 1].ref,
              currentImageIndex - 1
            )
          }
        />

        <p>{`0${currentImageIndex + 1} / 0${images.length}`}</p>

        <FaArrowRight
          className="md:text-2xl text-lg cursor-pointer"
          onClick={() =>
            scrollPlus(images[currentImageIndex + 1].ref, currentImageIndex + 1)
          }
        />
      </div>
    </div>
  );
};

export default Carousel;
