import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      // Animate tracks with stagger effect
      gsap.from(tracksRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const tracks = [
    { name: 'Android', icon: '🤖' },
    { name: 'Chrome', icon: '🌐' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Assistant', icon: '🎙️' },
    { name: 'Maps', icon: '🗺️' },
    { name: 'Tensorflow', icon: '🧠' },
    { name: 'G-Pay', icon: '💳' },
    { name: 'Codekit', icon: '🧰' },
    { name: 'Cloud', icon: '☁️' }
  ];

  return (
    <section className="py-12" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-12 sujoy"
        >
          Tracks
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={index}
              ref={el => tracksRef.current[index] = el}
              className="flex flex-col items-center p-6 bg-zinc-800 rounded-xl shadow-lg hover:bg-zinc-950 transition-colors duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{track.icon}</div>
              <div className="text-lg font-medium text-center sujoy">{track.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
