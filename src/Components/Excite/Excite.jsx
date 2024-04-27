import React from "react";
import "./Excite.scss";
import image from "../../assets/photo.webp";

const Excite = () => {
  const className = "Excitement";
  return (
    <div
      className={
        className +
        " w-full md:h-[60vh] sm:h-[45vh] h-[35vh] md:mt-24 sm:mt-16 mt-12 position-relative d-flex align-items-center justify-content-center text-light"
      }
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image})`,
      }}
    >
      <p className="text sm:text-4xl text-2xl text-center fw-semibold px-4">
        Do it Your Way. <br /> Elope in Your Dream Location.
      </p>
    </div>
  );
};

export default Excite;
