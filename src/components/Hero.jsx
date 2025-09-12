// src/components/Hero.jsx
import React from "react";
import CurvedLoop from "../transition/CurvedLoop";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-6 py-10 overflow-hidden">
      {/* Date (top-left) */}
      

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-1">
        <h3 className="text-2xl text-yellow-400 md:text-3xl font-semibold mb-18 sujoy">
          2 November 2025
        </h3>
        {/* Moving Text */}
        <CurvedLoop
          marqueeText="✦ DEVFEST ✦ DURGAPUR ✦ 2025 ✦ GDG ✦ DURGAPUR ✦"
          speed={3}
          curveAmount={0}
          direction="right"
          interactive={true}
          className="custom-text-style sujoy text-5xl md:text-7xl lg:text-8xl font-extrabold"
        />

        {/* Buttons */}
        <div className="flex gap-4 w-full max-w-md justify-center absolute mt-48">
          <button className="relative cursor-pointer sujoy px-6 py-3 bg-yellow-400 font-bold text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform">
            Register now
          </button>
          <button className="relative cursor-pointer sujoy px-6 py-3 bg-emerald-800 font-bold text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform">
            Join us
          </button>
        </div>
      </div>

      {/* Description (bottom-left) */}
      <motion.p
      className="max-w-2xl text-gray-300 leading-relaxed text-sm md:text-base sujoy"
      initial={{ y: 50, opacity: 0 }}   // start position
      animate={{ y: 0, opacity: 1 }}    // end position
      transition={{ duration: 0.8, ease: "easeOut" }} // smooth effect
      >
        Ignite Your Development Journey by Google Developer Group. Join a global
        community of developers for a day of inspiration, learning, and
        connection. Dive deep into the latest technologies, experiment with
        cutting-edge tools, and network with like-minded peers.
      </motion.p>
    </section>
  );
}
