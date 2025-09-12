import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const DevFestStats = () => {
  const containerRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsRef.current.forEach((stat) => {
        // Extract number and suffix (like "+")
        const rawText = stat.dataset.value || stat.textContent;
        const match = rawText.match(/(\d+)(\+?)/); 
        const finalNumber = match ? parseInt(match[1], 10) : 0;
        const suffix = match ? match[2] : "";

        // Start from 0
        stat.textContent = "0" + suffix;

        gsap.to(stat, {
          innerText: finalNumber,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          snap: { innerText: 1 }, // ensures whole numbers only
          onUpdate: function () {
            stat.textContent = Math.ceil(stat.innerText) + suffix;
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4" ref={containerRef}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-26 sujoy">
          DevFest 2025<br />
            <span className="text-yellow-400 text-2xl">Brings you</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="text-center sujoy">
            <div 
              ref={el => statsRef.current[0] = el}
              data-value="10+"
              className="text-4xl md:text-5xl font-bold text-purple-900 mb-2"
            >
              10+
            </div>
            <div className="text-lg uppercase tracking-wider">Speakers</div>
          </div>
          
          {/* Stat 2 */}
          <div className="text-center sujoy">
            <div 
              ref={el => statsRef.current[1] = el}
              data-value="400+"
              className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2"
            >
              400+
            </div>
            <div className="text-lg uppercase tracking-wider">Participants</div>
          </div>
          
          {/* Stat 3 */}
          <div className="text-center sujoy">
            <div 
              ref={el => statsRef.current[2] = el}
              data-value="8+"
              className="text-4xl md:text-5xl font-bold text-blue-800 mb-2"
            >
              8+
            </div>
            <div className="text-lg uppercase tracking-wider">Sessions</div>
          </div>
          
          {/* Stat 4 */}
          <div className="text-center sujoy">
            <div 
              ref={el => statsRef.current[3] = el}
              data-value="5+"
              className="text-4xl md:text-5xl font-bold text-orange-400 mb-2"
            >
              5+
            </div>
            <div className="text-lg uppercase tracking-wider">Workshops</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevFestStats;
