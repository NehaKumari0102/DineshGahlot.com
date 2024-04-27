import React from "react";

const Back = (props) => {
  const className = "HeroSection__Background";
  // Getting nextImageIndex and currentImageIndex from props

  return (
    <div className={className + " w-100 md:h-[100vh] sm:h-[75vh] h-[50vh]  position-relative"}>
      <div className={className + "__images w-100 h-100 position-relative z-0"} >
        <img
          className={`current-image opacity-100 w-100 h-100 object-fit-cover position-absolute top-0 left-0 user-select-none pe-none`}
          src={props.images[props.currentImageIndex]}
          alt="..."
        />
        <img
          className={`next-image opacity-0 w-100 h-100 object-fit-cover position-absolute top-0 left-0 user-select-none pe-none`}
          src={props.images[props.nextImageIndex]}
          alt="..."
        />
      </div>
    </div>
  );
};

export default Back;

