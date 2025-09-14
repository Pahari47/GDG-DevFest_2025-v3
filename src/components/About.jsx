// src/components/AboutSection.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon1 from "../assets/icons/Asset 2propHS.png"
import icon2 from "../assets/icons/Asset 13-rxbb.png"
import bgimg from "../assets/images/abou.png"
import img1 from '../assets/images/AK_09091.JPG';

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
        className="w-full flex flex-col items-center justify-center md:mb-16 md:space-y-6"
      >
        <h1 className="flex items-center text-4xl md:text-5xl lg:text-7xl font-extrabold sujoy lg:mr-80 text-yellow-500">
          <img src={icon1} alt="star" className="w-auto h-14 mr-8 lg:mb-10" />
          About
        </h1>
        <h1 className="flex items-center text-4xl md:text-5xl lg:text-7xl font-extrabold sujoy lg:ml-80">
          DEVFEST
          <img src={icon2} alt="dev" className="w-auto h-14 ml-8 mb-10" />
        </h1>
      </div>

      {/* Bottom Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        {/* Left Text */}
        <div ref={paraRef}>
          <p className="text-base leading-relaxed sujoy">
            DevFest is a global series of annual technology conferences hosted by the Google Developer Groups (GDG) community, designed to provide developers with opportunities to learn about Google's developer tools, connect with peers and experts, and participate in hands-on activities like workshops and tech talks. These community-led events cover a wide range of topics, including Android development, Firebase, Flutter, Google Cloud, and Machine Learning, offering a vibrant environment for innovation and knowledge sharing.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center" style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",   // makes the whole image visible
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
           }}>
          <img
            src={bgimg}
            alt="About Devfest"
            className="w-full h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
