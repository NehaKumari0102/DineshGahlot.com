import React, { useRef, useState } from "react";

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

  const images = [image0, image1, image2, image3, image4, image5];
  const imageRefs = [
    image0Ref,
    image1Ref,
    image2Ref,
    image3Ref,
    image4Ref,
    image5Ref,
  ];

  //Scroll the images to left
  function scrollMinus(elemRef, nextIndex) {
    if (currentImageIndex <= 0 || elemRef == undefined) {
      return; // Can't show prev images
    }

    try {
      block.scrollTo({
        left: elemRef?.current.offsetLeft - 50,
        behavior: "smooth",
      });
    } catch (err) {
      console.log("The Error says: ", err);
    }
    setcurrentImageIndex(nextIndex);
  }

  //Scroll images to right
  function scrollPlus(elemRef, nextIndex) {
    if (currentImageIndex >= images.length || elemRef == undefined) {
      return; // Already at the last image
    }

    try {
      block.scrollTo({
        left: elemRef?.current.offsetLeft - 50,
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
          "__images h-100 px-6 d-flex flex-row gap-7 overflow-scroll Carousel__images"
        }
      >
        <img
          src={images[0]}
          alt="image0"
          className="h-100 w-100 pe-none object-fit-cover"
          ref={image0Ref}
        />
        <img
          src={images[1]}
          alt="image1"
          className="h-100 w-100 pe-none object-fit-cover"
          ref={image1Ref}
        />
        <img
          src={images[2]}
          alt="image2"
          className="h-100 w-100 pe-none object-fit-cover"
          ref={image2Ref}
        />
        <img
          src={images[3]}
          alt="image3"
          className="h-100 w-100 pe-none object-fit-cover"
          ref={image3Ref}
        />
        <img
          src={images[4]}
          alt="image4"
          className="h-100 w-100 pe-none object-fit-cover"
          ref={image4Ref}
        />
        <img
          src={images[5]}
          alt="image5"
          className="h-100 w-100 pe-none object-fit-cover"
          ref={image5Ref}
        />
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
            scrollMinus(imageRefs[currentImageIndex - 1], currentImageIndex - 1)
          }
        />

        <p>{`0${currentImageIndex + 1} / 0${images.length}`}</p>

        <FaArrowRight
          className="md:text-2xl text-lg cursor-pointer"
          onClick={() =>
            scrollPlus(imageRefs[currentImageIndex + 1], currentImageIndex + 1)
          }
        />
      </div>
    </div>
  );
};

export default Carousel;
