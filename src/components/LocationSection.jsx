// src/components/LocationSection.jsx
import React from "react";
import venueImg from "../assets/images/DSC_0042.jpg"; // replace with your place image
import logoImg from "../assets/images/mas.png";   // replace with your DevFest logo

export default function LocationSection() {
  return (
    <section id="location" className="py-8 px-6 mt-4 md:mt-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center sujoy">DevFest 2025 <span className="text-yellow-500">Venue</span></h2>
        <p className="text-lg mb-10 text-center text-gray-300">
          Join us at <span className="font-semibold text-green-500">Srijoni Auditorium, City Center, Durgapur</span> – 
          the hub of innovation and collaboration for DevFest 2025!
        </p>

        {/* 2-column layout */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left - Venue Image with logo overlay */}
          <div className="relative w-full">
            <img
              src={venueImg}
              alt="DevFest Venue"
              className="w-full h-[450px] object-cover rounded shadow-lg"
            />
            {/* Logo Overlay */}
            <img
              src={logoImg}
              alt="DevFest Logo"
              className="absolute bottom-0 left-4 transform scale-x-[-1] w-auto h-36"
            />
          </div>

          {/* Right - Map with logo overlay */}
          <div className="relative w-full">
            <iframe
              title="DevFest Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.886258817152!2d87.300556!3d23.536593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7721d46db093d%3A0xf428f81ae93fe3fc!2sSrijoni%20Auditorium!5e0!3m2!1sen!2sin!4v1757863197820!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded shadow-lg"
            ></iframe>

            {/* Logo Overlay */}
            <img
              src={logoImg}
              alt="DevFest Logo"
              className="absolute bottom-0 right-4 w-auto h-36"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
