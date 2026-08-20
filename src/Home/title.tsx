import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles/title.css";

import About from "./about";
import Nav from "./nav";


gsap.registerPlugin(ScrollTrigger);


function Title() {

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const title =
        document.querySelector(
          ".uppertitle"
        ) as HTMLElement;

      const aboutLabel =
        document.querySelector(
          ".about-label"
        ) as HTMLElement;


      if (!title || !aboutLabel) {
        return;
      }


      // ==================================================
      // CALCULATE TITLE POSITION
      // ==================================================

      const calculateTitlePosition = () => {

        const titleRect =
          title.getBoundingClientRect();

        const targetRect =
          aboutLabel.getBoundingClientRect();


        const titleCenterX =
          titleRect.left +
          titleRect.width / 2;


        const titleCenterY =
          titleRect.top +
          titleRect.height / 2;


        const targetCenterX =
          targetRect.left +
          targetRect.width / 4.6;


        const targetCenterY =
          targetRect.top +
          targetRect.height / 0.1;


        return {

          x:
            targetCenterX -
            titleCenterX,

          y:
            targetCenterY -
            titleCenterY,

        };

      };


      const target =
        calculateTitlePosition();


      // ==================================================
      // INITIAL NAV STATE
      // ==================================================

      gsap.set(".nav", {

        opacity: 0,

        y: -100,

        marginTop: "2%",

        marginLeft: "0%",

        left:"16%",

        top:"0%"

      });


      // ==================================================
      // MAIN TIMELINE
      // ==================================================

      const timeline = gsap.timeline({

        scrollTrigger: {

          id: "home-intro",

          trigger: ".intro-scroll",

          start: "top top",

          end: "+=1500",

          scrub: 1,

          pin: ".title-stage",

          anticipatePin: 1,

          invalidateOnRefresh: true,

        },

      });


      // ==================================================
      // FADE KUMAR
      // ==================================================

      timeline.to(

        ".lowertitle",

        {

          opacity: 0,

          y: 80,

          duration: 0.25,

          ease: "power2.out",

        },

        0

      );


      // ==================================================
      // FADE SCROLL INDICATOR
      // ==================================================

      timeline.to(

        ".sidenote",

        {

          opacity: 0,

          y: 50,

          duration: 0.2,

          ease: "power2.out",

        },

        0

      );


      // ==================================================
      // SHRINK + MOVE AMIT
      // ==================================================

      timeline.to(

        ".uppertitle",

        {

          fontSize: "1rem",

          x: target.x,

          y: target.y,

          duration: 0.65,

          ease: "power3.inOut",

        },

        0.15

      );


      // ==================================================
      // CHANGE AMIT → ON WEEKDAYS
      // ==================================================

      timeline.to(

        ".uppertitle",

        {

          duration: 0.01,

          onStart: () => {

            title.textContent =
              "अमित, ON WEEKDAYS:";

          },

          onReverseComplete: () => {

            title.textContent =
              "अमित";

          },

        },

        0.80

      );


      // ==================================================
      // HIDE ORIGINAL ABOUT LABEL
      // ==================================================

      timeline.to(

        ".about-label",

        {

          opacity: 0,

          duration: 0.01,

        },

        0.81

      );


      // ==================================================
      // REVEAL ABOUT CONTENT
      // ==================================================

      timeline.to(

        ".about-content",

        {

          opacity: 1,

          x: 0,

          duration: 0.35,

          ease: "power2.out",

        },

        0.82

      );


      // ==================================================
      // REVEAL NAV
      // ==================================================

      timeline.to(

        ".nav",

        {

          opacity: 1,

          y: 0,

          duration: 0.35,

          ease: "power2.out",

        },

        0.82

      );


      // ==================================================
      // REVEAL IMAGE
      // ==================================================

      timeline.to(

        ".about-image",

        {

          opacity: 1,

          x: 0,

          duration: 0.4,

          ease: "power2.out",

        },

        0.86

      );


     

      // ==================================================
      // REFRESH
      // ==================================================

      ScrollTrigger.refresh();

    });


    // ====================================================
    // CLEANUP
    // ====================================================

    return () => {

      ctx.revert();

    };

  }, []);


  // ====================================================
  // JSX
  // ====================================================

  return (

    <section className="intro-scroll">

      <div
        id="title-stage"
        className="title-stage"
      >

        <div className="uppertitle">
          अमित
        </div>


        <div className="lowertitle">
          कुमार
        </div>


        <div className="sidenote">

          Scroll to Explore

          <div className="exploremore">

            <img
              src="/scrolldown.svg"
              alt="Scroll down"
            />

          </div>

        </div>


        <Nav />

        <About />

      </div>

    </section>

  );

}


export default Title;