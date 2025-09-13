import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import que from "../assets/images/que.png"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const tiersRef = useRef([]);

  // Sample sponsor data (replace with actual sponsor logos)
  const sponsorTiers = [
    {
      name: "Platinum Sponsors",
      level: "platinum",
      sponsors: [
        { name: "Comming Soon", logo: que },
        { name: "Comming Soon", logo: que },
      ]
    },
    {
      name: "Gold Sponsors",
      level: "gold",
      sponsors: [
        { name: "Comming Soon", logo: que },
        { name: "Comming Soon", logo: que },
      ]
    },
    {
      name: "Silver Sponsors",
      level: "silver",
      sponsors: [
        { name: "Comming Soon", logo: que },
        { name: "Comming Soon", logo: que },
      ]
    },
    {
      name: "Community Partners",
      level: "community",
      sponsors: [
        { name: "Comming Soon", logo: que },
        { name: "Comming Soon", logo: que },
        { name: "Comming Soon", logo: que },
        { name: "Comming Soon", logo: que },
      ]
    }
  ];

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
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      // Animate sponsor tiers with stagger
      tiersRef.current.forEach((tier, index) => {
        gsap.from(tier, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tier,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-8">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-8 sujoy">
          Our <span className="text-blue-600">Sponsors</span>
        </h2>
        
        <p ref={subtitleRef} className="text-lg text-center  mb-12 max-w-2xl mx-auto sujoy">
          We're grateful to our partners and sponsors who make DevFest 2025 possible. 
          Their support helps us create an amazing experience for all attendees.
        </p>

        <div className="max-w-6xl mx-auto">
          {sponsorTiers.map((tier, tierIndex) => (
            <div 
              key={tierIndex}
              ref={el => tiersRef.current[tierIndex] = el}
              className="mb-16 last:mb-0"
            >
              <h3 className={`text-2xl font-bold text-center mb-8 sujoy ${
                tier.level === 'platinum' ? 'text-gray-500' :
                tier.level === 'gold' ? 'text-yellow-600' :
                tier.level === 'silver' ? 'text-gray-500' : 'text-green-600'
              }`}>
                {tier.name}
              </h3>
              
              <div className={`grid grid-cols-2 ${
                tier.sponsors.length === 2 ? 'md:grid-cols-2' :
                tier.sponsors.length === 3 ? 'md:grid-cols-3' :
                tier.sponsors.length >= 4 ? 'md:grid-cols-4' : ''
              } gap-8 place-items-center`}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div 
                    key={sponsorIndex}
                    className={`sujoy rounded-xl shadow-md p-6 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                      tier.level === 'platinum' ? 'h-40' :
                      tier.level === 'gold' ? 'h-32' :
                      tier.level === 'silver' ? 'h-28' : 'h-24'
                    }`}
                  >
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className={`max-w-full max-h-full object-contain ${
                        tier.level === 'platinum' ? 'opacity-100' :
                        tier.level === 'gold' ? 'opacity-90' :
                        tier.level === 'silver' ? 'opacity-80' : 'opacity-70'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;