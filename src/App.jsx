import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Excite from "./Components/Excite/Excite";
import Gallery from "./Components/Gallery/Gallery";
import Carousel from "./Components/Carousel/Carousel";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialRef = useRef(null); // Reference for each component

  const scrollHandler = (elemRef) => {
    window.scrollTo({ top: elemRef.current.offsetTop - 50, behavior: "smooth" });
    //Scroll to the component
  };

  return (
    <React.Fragment>
      <BrowserRouter basename="/DineshGahlot.com">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Nav
                  scrollHandler={scrollHandler}
                  home={homeRef}
                  about={aboutRef}
                  gallery={galleryRef}
                  testimonial={testimonialRef}
                />

                <Hero ref={homeRef} />

                <Gallery ref={galleryRef} />

                <Testimonial ref={testimonialRef} />

                <Excite />

                <About ref={aboutRef} />

                <Carousel />
              </React.Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
