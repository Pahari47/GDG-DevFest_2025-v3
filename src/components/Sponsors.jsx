import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import que from "../assets/images/que.png";
import sponsorimg2 from "../assets/Sponsors/CyberA1.png";
import sponsorimg3 from "../assets/Sponsors/fulllogo.png";
import sponsorimg4 from "../assets/Sponsors/dsms.png";
import sponsorimg5 from "../assets/Sponsors/OffSec.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const tiersRef = useRef([]);
  tiersRef.current = []; // ✅ reset refs to prevent stale references

  const sponsors = [
    { name: "Cyber A1", logo: sponsorimg2 },
    { name: "Latrics", logo: sponsorimg3 },
    { name: "DSMS", logo: sponsorimg4 },
    { name: "OFFSEC", logo: sponsorimg5 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tiersRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-8">
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-6 sujoy"
        >
          Our <span className="text-blue-600">Sponsors</span>
        </h2>

        <p
          ref={subtitleRef}
          className="text-lg text-center mb-10 max-w-2xl mx-auto sujoy"
        >
          We're grateful to our partners and sponsors who make DevFest 2025
          possible. Their support helps us create an amazing experience for all
          attendees.
        </p>

        <div className="px-0 mb-12 flex justify-center items-center">
          <div
              className="sujoy cursor-pointer w-xl bg-white border-yellow-300 border-2 rounded shadow-md py-8 px-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border hover:border-red-300"
            >
              <img
                src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/GDG-Lockup-1Line-Black_vMWBFT9.svg"
                alt="gdg"
                className="w-auto h-auto p-1 object-contain transition-transform duration-300 hover:scale-105 hover:brightness-110"
              />
          </div>
        </div>

        {/* <div className="p-0 h-1 bg-blue-300/30 w-2xl mb-8 mx-auto rounded-3xl"></div> */}

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) tiersRef.current[index] = el;
              }}
              className="sujoy cursor-pointer bg-yellow-100/10 border-yellow-300 border rounded w-full shadow-md py-8 px-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border hover:border-red-300 hover:bg-yellow-100/10"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-auto h-24 p-1 object-contain mb-4 transition-transform duration-300 hover:scale-105 hover:brightness-110"
              />
              <p className="text-lg font-medium text-yellow-200 text-center">
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
