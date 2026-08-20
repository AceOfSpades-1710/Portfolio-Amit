import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles/counter.css";

gsap.registerPlugin(ScrollTrigger);

interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

function Counter() {
  const counterRef = useRef<HTMLElement | null>(null);

  const counters: CounterItem[] = [
    {
      value: 1000,
      suffix: "+",
      label: "Articles Published",
    },
    {
      value: 30,
      suffix: "+",
      label: "Discussions Held",
    },
    {
      value: 15,
      suffix: "+",
      label: "Years Of Experience",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const counterElements =
        gsap.utils.toArray<HTMLElement>(".counter-number");

      const counterObject = {
        value: 0,
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: counterRef.current,

          // Start when counter enters viewport
          start: "top 80%",

          // Play only once
          toggleActions: "play none none none",
        },
      });

      counterElements.forEach((element, index) => {
        const target = counters[index].value;

        const obj = {
          value: 0,
        };

        timeline.to(
          obj,
          {
            value: target,
            duration: 1.8,
            ease: "power2.out",

            onUpdate: () => {
              element.textContent =
                Math.floor(obj.value).toLocaleString() +
                counters[index].suffix;
            },
          },
          0
        );
      });
    }, counterRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="counter"
      ref={counterRef}
    >
      {counters.map((item, index) => (
        <div
          className="counter-item"
          key={index}
        >
          <div className="counter-number">
            0{item.suffix}
          </div>

          <div className="counter-label">
            {item.label}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Counter;