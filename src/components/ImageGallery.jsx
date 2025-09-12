import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '../assets/images/aboutimg.jpg'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ImageGallery = () => {
  const galleryRef = useRef(null);
  const titleRef = useRef(null);
  const imagesRef = useRef([]);

  // Sample images (replace with your actual image paths)
  const images = [
    img, img, img, img, img, img, 
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

      // Animate images with staggered effect
      gsap.from(imagesRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      // Add hover animations
      imagesRef.current.forEach(image => {
        image.addEventListener('mouseenter', () => {
          gsap.to(image, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        image.addEventListener('mouseleave', () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={galleryRef} className="py-2 mb-12">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-12 sujoy">
          DevFest <span className="text-yellow-400">Gallery</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl group cursor-pointer bg-amber-50">
              <img
                ref={el => imagesRef.current[index] = el}
                src={image}
                alt={`DevFest event ${index + 1}`}
                className="h-60 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="sujoy">
                  <h3 className="font-bold text-lg">DevFest 2024</h3>
                  <p className="text-sm">Event #{index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;