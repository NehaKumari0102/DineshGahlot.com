import React, { forwardRef } from "react";
import "./About.scss";

const About = forwardRef((props, ref) => {
  const className = "About";
  return (
    <div
      className={
        className +
        " w-full d-flex flex-col align-items-center justify-content-evenly sm:gap-10 gap-6 sm:py-20 py-10 sm:px-10 px-6"
      }
      ref={ref}
    >
      <h1 className={className + "__heading fs-md-2 fs-4 text-center"}>
        Kashmeer to Kanya Kumari or Anywhere Beyond
      </h1>

      <p className={className + "__para text-center sm:text-base text-xs"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        <br className="d-none d-md-flex " />
        Excepturi ex vero ab quis doloremque blanditiis in magnam temporibus
        quod et! <br className="d-none d-md-flex " /> Eveniet nemo provident
        praesentium corporis sit eligendi expedita cumque perferendis!
      </p>

      <button className="bg-black text-light px-md-5 px-3 py-md-2 py-1 sm:text-lg text-sm mt-6">
        Let's Connect
      </button>
    </div>
  );
})

export default About;
