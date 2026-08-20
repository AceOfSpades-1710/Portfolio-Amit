import { useEffect, useState } from "react";

import Title from "./title";
import Carousel from "./collabs";
import Cards from "./cards";
import VideoSection from "./videoplayer";
import Counter from "./counter";
import Contact from "./contact";
import Footer from "./footer";

import "./styles/Home.css";


function Home() {

  const [showTopButton, setShowTopButton] =
    useState(false);


  // ====================================================
  // TAKE TO TOP BUTTON
  // ====================================================

  useEffect(() => {

    const handleScroll = () => {

      /*
       * Your Title ScrollTrigger runs for 1500px:
       *
       * start: "top top"
       * end: "+=1500"
       *
       * About starts revealing around 0.82
       * Image starts revealing around 0.86
       *
       * So 0.90 is a good point to show
       * the button.
       */

      const introEndPoint = 1500 * 1.3;


      setShowTopButton(
        window.scrollY >= introEndPoint
      );

    };


    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );


    handleScroll();


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  // ====================================================
  // SCROLL TO TOP
  // ====================================================

  const scrollToTop = () => {
  const homeScrollPosition =
    sessionStorage.getItem(
      "homeAboutScrollPosition"
    );

  if (homeScrollPosition !== null) {
    window.scrollTo({
      top: Number(homeScrollPosition),
      left: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
};


  // ====================================================
  // RENDER
  // ====================================================

  return (

    <>

      <Title />

      <Carousel />

      <Cards />

      <VideoSection />

      <Counter />

      <Contact />

      <Footer />


      {/* ================================================
          TAKE TO TOP BUTTON
          ================================================ */}

      <button
        className={`take-top-button ${
          showTopButton ? "take-top-button-visible" : ""
        }`}
        onClick={scrollToTop}
        aria-label="Take to top"
      >
        <img
          src="/Top.svg"
          alt=""
        />
      </button>

    </>

  );

}


export default Home;