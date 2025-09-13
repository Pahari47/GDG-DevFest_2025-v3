// src/components/Hero.jsx
import React from "react";
import CurvedLoop from "../transition/CurvedLoop";
import { motion } from "framer-motion";
import bgImg from "../assets/images/DSC00207.jpg";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="relative min-h-full md:min-h-screen top-12 lg:top-0 w-full flex flex-col justify-between px-4 sm:px-6 md:px-12 py-10 overflow-hidden"
    >
      {/* Dark overlay to reduce image opacity */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Fade-up border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent z-0"></div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-1 z-10 text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl text-yellow-400 font-semibold sujoy mb-8 md:mb-16 xl:mb-22">
          2 November 2025
        </h3>

        {/* Moving Text */}
        <div className="w-full h-20">
          <CurvedLoop
            marqueeText="✦ DEVFEST ✦ DURGAPUR ✦ 2025 ✦ GDG ✦ DURGAPUR ✦"
            speed={1.5}
            curveAmount={0}
            direction="right"
            interactive={true}
            className="custom-text-style sujoy font-extrabold text-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-0 md:mt-0">
        <button className="relative cursor-pointer sujoy text-sm sm:text-base px-6 py-3 bg-yellow-400 font-bold text-black border-4 border-yellow-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform">
  <Link to="/TicketPricing">Register now</Link>
</button>
          <button className="relative cursor-pointer sujoy text-sm sm:text-base px-6 py-3 bg-emerald-800 font-bold text-black border-4 border-emerald-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform">
            Join us
          </button>
        </div>
      </div>

      {/* Description (centered at bottom) */}
      <motion.div
        className="relative z-10 flex justify-center mt-10 md:mt-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="max-w-xl italic text-shadow-amber-300 sm:max-w-2xl text-center text-md md:text-base leading-relaxed sujoy">
          Fire Up your Dev journey with Google Developer Group. Connect with a global community, explore the latest tech, try hands - on tools, and get inspired by fellow developers — all in one power-packed day.
        </p>
      </motion.div>
    </section>
  );
}
