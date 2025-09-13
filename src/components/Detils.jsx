// src/components/Detils.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import blueBg from "../assets/images/blue.png";
import greenBg from "../assets/images/green.png";
import yellowBg from "../assets/images/yellow.png";


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollStack = ({ children }) => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        gsap.fromTo(
          item,
          {
            y: 100,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="space-y-8 py-12">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ref: (el) => (itemsRef.current[index] = el),
        })
      )}
    </div>
  );
};

const ScrollStackItem = React.forwardRef(({ children, bgImage }, ref) => {
  return (
    <div
      ref={ref}
      className="p-8 mx-auto max-w-4xl relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
});

const Detils = () => {
  return (
    <section className="py-8 mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center md:mb-12 sujoy">
          Why Attend <span className="text-yellow-400">DevFest 2025</span> ?
        </h2>

        <ScrollStack>
          {/* 1 - Networking */}
          <ScrollStackItem bgImage={blueBg}>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold sujoy mb-4">Cutting-edge Content</h3>
                <p className="text-md md:text-lg">
                  Learn how to build safe, secure, and scalable solutions with the latest Google technologies. Get insights directly from Googlers, Google Developer Experts (GDEs), and fellow community members.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          {/* 2 - Career */}
          <ScrollStackItem bgImage={greenBg}>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold sujoy mb-4">Community Connections</h3>
                <p className="text-md md:text-lg">
                 Connect with local developers in your area. Join engaging panel discussions, Q&A sessions, and meetups to share ideas and discover real-world projects that are shaping the future of technology.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          {/* 3 - Community */}
          <ScrollStackItem bgImage={yellowBg}>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold sujoy mb-4">Hands-on Learning</h3>
                <p className="text-md md:text-lg">
                  Get hands-on experience through full-day workshops, codelabs, and debugging sessions. DevFest offers practical learning for all skill levels.
                </p>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  );
};

export default Detils;
