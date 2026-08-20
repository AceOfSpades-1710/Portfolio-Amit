import EM from "../assets/em.png";
import MC from "../assets/mc.png";
import IT from "../assets/IT.png";
import GT from "../assets/gt.png";
import ATVI from "../assets/atvi.png";
import TC from "../assets/TC.png";
import LLT from "../assets/LLT.png";
import NL from "../assets/nl.png";
import RM from "../assets/RM.png";
import AFT from "../assets/a14.png";
import ETW from "../assets/ETW.png";
import TMR from "../assets/tmr.png";
import BT from "../assets/bt.png";
import CNBC from "../assets/cnbc.png";

import "./styles/collabs.css";


interface CarouselItem {
  icon: string;
  text: string;
}


function Carousel() {

  const items: CarouselItem[] = [
    { icon: EM, text: "EastMojo" },
    { icon: MC, text: "MoneyControl" },
    { icon: IT, text: "India Today" },
    { icon: GT, text: "Global Times" },
    { icon: ATVI, text: "ATVI" },
    { icon: TC, text: "TwoCircles" },
    { icon: LLT, text: "The LallanTop" },
    { icon: NL, text: "Newslaundry" },
    { icon: RM, text: "TheRedMike" },
    { icon: AFT, text: "Article14" },
    { icon: ETW, text: "ETWealth" },
    { icon: TMR, text: "TheMediaRumble" },
    { icon: BT, text: "BusinessToday" },
    { icon: CNBC, text: "CNBC" },
  ];


  return (

    <div className="collaborations-wrapper">


      {/* ==========================================
          STATIC LABEL
          ========================================== */}

      <div className="collaborations-label">
        COLLABORATIONS
      </div>


      {/* ==========================================
          MOVING CAROUSEL
          ========================================== */}

      <div className="news-carousel">

        <div className="news-track">

          {[...items, ...items].map((item, index) => (

            <div
              className="news-item"
              key={index}
            >

              <img
                src={item.icon}
                alt={item.text}
                className="news-icon"
              />

              <div className="news-text">
                {item.text}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}


export default Carousel;