import "./styles/Weekends.css";

import { useLayoutEffect, useEffect, useState } from "react";

import gsap from "gsap";

import Nav from "../Home/nav";

import Readme from "./Readme";


function Weekends() {

    useLayoutEffect(() => {

    // Always start Weekends at the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });


    // Make navigation white
    gsap.set(".nav *", {
      color: "#f1f1f1",
    });

  }, []);

  // ====================================================
  // NAV COLOR
  // ====================================================

  useLayoutEffect(() => {

    gsap.set(".nav *", {
      color: "#f1f1f1",
    });

  }, []);


  const [showTopButton, setShowTopButton] =
    useState(false);


  // ====================================================
  // SHOW TAKE TO TOP BUTTON
  // ====================================================

  useEffect(() => {

    const handleScroll = () => {

      /*
       * Show the button after the user has
       * scrolled sufficiently down the page.
       *
       * Change 1950 if you want the button
       * to appear earlier or later.
       */

      const showButtonAfter = 400;


      setShowTopButton(
        window.scrollY >= showButtonAfter
      );

    };


    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );


    // Check immediately on mount
    handleScroll();


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  // ====================================================
  // SCROLL TO VERY TOP
  // ====================================================

  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      left: 0,

      behavior: "smooth",

    });

  };


  // ====================================================
  // RENDER
  // ====================================================

  return (

    <>

      <Nav />

      <br />
      <br />
      <br />
      <br />
      <br />

      <Readme />


      {/* ================================================
          TAKE TO TOP BUTTON
          ================================================ */}

      <button

        type="button"

        className={`wetake-top-button ${
          showTopButton
            ? "wetake-top-button-visible"
            : ""
        }`}

        onClick={scrollToTop}

        aria-label="Take to top"

      >

        <img
          src="/TOPwe.svg"
          alt=""
        />

      </button>

    </>

  );

}


export default Weekends;