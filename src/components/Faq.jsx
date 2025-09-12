import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contactRef = useRef(null);
  const questionsRef = useRef([]);
  const answersRef = useRef([]);

  const faqItems = [
    {
      question: 'What is Google Developer Groups (GDG)?',
      answer: 'Google Developer Groups (GDGs) are community groups for developers who are interested in Google\'s developer technology. These groups are intended to be a space for developers to learn, connect, and grow together.'
    },
    {
      question: 'Who can register for DevFest?',
      answer: 'DevFest is open to all developers, students, tech enthusiasts, and anyone interested in Google technologies. Whether you\'re a beginner or an experienced developer, there\'s something for everyone at DevFest.'
    },
    {
      question: 'What is unique about DevFest?',
      answer: 'DevFest brings together world-class experts in Google technologies to share their knowledge and experience. It features technical talks, workshops, codelabs, and networking opportunities that you won\'t find anywhere else.'
    },
    {
      question: 'How can I stay informed?',
      answer: 'Follow our social media channels and join our mailing list to stay updated with the latest information. You can also visit our website regularly for announcements and updates about DevFest and other events.'
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
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      // Animate contact section
      gsap.from(contactRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      // Animate questions
      questionsRef.current.forEach((question, index) => {
        gsap.from(question, {
          x: -50,
          opacity: 0,
          duration: 0.7,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: question,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        });
      });

      // Animate initial answer
      if (answersRef.current[0]) {
        gsap.from(answersRef.current[0], {
          x: 50,
          opacity: 0,
          duration: 0.8,
          delay: 0.5,
          ease: 'power2.out'
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate answer when active index changes
    if (answersRef.current[activeIndex]) {
      gsap.fromTo(answersRef.current[activeIndex],
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="py-8">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="sujoy text-4xl md:text-5xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        
        <p className="sujoy text-lg text-center mb-12 text-yellow-500">
          Need Answers? Find them here.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 p-8">
          {/* Questions Section - Left Side */}
          <div className="lg:w-2/5">
            <h3 className="sujoy text-2xl font-semibold mb-6">What is DevFest?</h3>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  ref={el => questionsRef.current[index] = el}
                  className={`sujoy p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-zinc-800 shadow-md hover:shadow-lg'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center">
                    <span className="flex-1 font-medium">{item.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${activeIndex === index ? 'transform rotate-90' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Answers Section - Right Side */}
          <div className="lg:w-3/5">
            <div className="p-8 h-full">
              <div className="flex items-center mb-6">
                <h3 className="sujoy text-2xl font-semibold text-yellow-500">Answer</h3>
              </div>

              <div ref={el => answersRef.current[activeIndex] = el} className="sujoy text-lg leading-relaxed">
                {faqItems[activeIndex].answer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;