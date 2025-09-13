import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import androidImg from "../assets/tracks/android.svg";
import chromeImg from "../assets/tracks/chrome.svg";
import firebaseImg from "../assets/tracks/firebase.svg";
import flutterImg from "../assets/tracks/flutter.svg";
import assistantImg from "../assets/tracks/assistant.svg";
import mapsImg from "../assets/tracks/maps.svg";
import tensorflowImg from "../assets/tracks/tensorflow.svg";
import gpayImg from "../assets/tracks/gpay.svg";
import geminiImg from "../assets/tracks/gemini.webp";
import cloudImg from "../assets/tracks/cloud.svg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function TechTracks() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const tracksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate tracks with stagger effect
      gsap.from(tracksRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const tracks = [
    { name: "Android", img: androidImg },
    { name: "Chrome", img: chromeImg },
    { name: "Firebase", img: firebaseImg },
    { name: "Flutter", img: flutterImg },
    { name: "Assistant", img: assistantImg },
    { name: "Maps", img: mapsImg },
    { name: "Tensorflow", img: tensorflowImg },
    { name: "G-Pay", img: gpayImg },
    { name: "Gemini", img: geminiImg },
    { name: "Cloud", img: cloudImg },
  ];

  return (
    <section className="py-8 relative mb-18" ref={containerRef}>
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white tracking-wide sujoy"
        >
          Tra<span className="text-green-500">cks</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 max-w-6xl mx-auto px-0 md:px-4">
          {tracks.map((track, index) => (
            <div
              key={index}
              ref={(el) => (tracksRef.current[index] = el)}
              className="group flex flex-col items-center justify-center p-6 
                         bg-zinc-800/60 backdrop-blur-md shadow-xl
                         border border-zinc-700/50 hover:border-zinc-500/80
                         hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <div className="w-20 h-20 mb-4 flex items-center justify-center cursor-pointer">
                <img
                  src={track.img}
                  alt={track.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-125"
                />
              </div>

              {/* Title */}
              <div className="text-lg font-semibold text-center text-white sujoy">
                {track.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
