// src/components/AboutSection.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "../assets/images/aboutimg.jpg";
import starIcon from "../assets/images/dev.jpg"; 
import devIcon from "../assets/images/star.jpg";  

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the headings when the section comes into view
      gsap.fromTo(
        titleRef.current.querySelectorAll("h1"),
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate paragraph
      gsap.fromTo(
        paraRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-full flex flex-col gap-10 items-center justify-center px-8 py-16 overflow-hidden"
    >
      {/* Top Animated Title */}
      <div
        ref={titleRef}
        className="w-full flex flex-col items-center justify-center mb-16 space-y-6"
      >
        <h1 className="flex items-center text-4xl md:text-5xl lg:text-7xl font-extrabold sujoy mr-80 text-yellow-500">
          <img src={starIcon} alt="star" className="w-10 h-10 mr-8" />
          About
        </h1>
        <h1 className="flex items-center text-4xl md:text-5xl lg:text-7xl font-extrabold sujoy ml-80">
          DEVFEST
          <img src={devIcon} alt="dev" className="w-10 h-10 ml-8" />
        </h1>
      </div>

      {/* Bottom Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        {/* Left Text */}
        <div ref={paraRef}>
          <p className="text-lg md:text-md leading-relaxed sujoy">
            DevFest is a celebration of technology, innovation, and community.  
            Join us to learn, build, and grow with developers from around the world.  
            From hands-on workshops to inspiring talks, DevFest brings together  
            passionate people to share knowledge and create amazing experiences.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About Devfest"
            className="w-full h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
