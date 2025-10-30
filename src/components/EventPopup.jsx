import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

const EVENT_DETAILS = {
  name: "Devfest Durgapur 2025",
  startDate: new Date("2025-11-02T09:00:00+05:30"), // 9 AM IST
  endDate: new Date("2025-11-02T12:00:00+05:30"),  // 11 AM IST
};

// --- HELPER FUNCTION ---
// Formats numbers with a leading zero if they are less than 10
const formatNumber = (num) => String(num).padStart(2, "0");

// --- CUSTOM HOOK ---
// Encapsulates all the countdown logic
const useCountdown = (startDate, endDate) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00", hours: "00", minutes: "00", seconds: "00",
  });
  const [status, setStatus] = useState("upcoming"); // upcoming | live | ended

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      if (now >= endDate) {
        setStatus("ended");
        clearInterval(timer);
      } else if (now >= startDate && now < endDate) {
        setStatus("live");
      } else {
        setStatus("upcoming");
        const diff = startDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({
          days: formatNumber(days),
          hours: formatNumber(hours),
          minutes: formatNumber(minutes),
          seconds: formatNumber(seconds),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate, endDate]);

  return { timeLeft, status };
};

// --- SUB-COMPONENTS ---
// For better readability and separation of concerns

const CountdownUnit = ({ value, label, color }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-16 h-16 flex justify-center items-center">
      <AnimatePresence mode="popLayout">
        <motion.p
          key={value}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className={`absolute text-4xl md:text-5xl font-mono font-bold ${color}`}
        >
          {value}
        </motion.p>
      </AnimatePresence>
    </div>
    <p className="text-xs text-gray-700 uppercase tracking-wider">{label}</p>
  </div>
);

const CountdownDisplay = ({ timeLeft }) => (
  <div className="grid grid-cols-4 gap-8 sujoy text-black">
    <CountdownUnit value={timeLeft.days} label="Days" color="text-[#4285F4]" />
    <CountdownUnit value={timeLeft.hours} label="Hours" color="text-[#EA4335]" />
    <CountdownUnit value={timeLeft.minutes} label="Mins" color="text-[#FBBC05]" />
    <CountdownUnit value={timeLeft.seconds} label="Secs" color="text-[#34A853]" />
  </div>
);

// --- MAIN COMPONENT ---
export default function EventPopup({ eventDetails = EVENT_DETAILS }) {
  const { name, startDate, endDate, link } = eventDetails;
  const { timeLeft, status } = useCountdown(startDate, endDate);
  const [isOpen, setIsOpen] = useState(false);

  // Check localStorage only once on mount to decide initial state
  useEffect(() => {
    if (localStorage.getItem(`eventEnded-${name}`) !== "true") {
      setIsOpen(true);
    }
  }, [name]);
  
  // Effect to handle closing the popup
  useEffect(() => {
      if (status === "ended") {
          setIsOpen(false);
          localStorage.setItem(`eventEnded-${name}`, "true");
      }

      const handleEsc = (event) => {
          if (event.key === 'Escape') {
              setIsOpen(false);
          }
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
  }, [status, name]);


  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-md z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)} // Close on backdrop click
      >
        <motion.div
          className="relative bg-white text-gray-900 shadow-2xl p-8 w-full max-w-2xl text-center border-6 border-transparent"
          style={{
            borderImage: "linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853) 1",
          }}
          initial={{ scale: 0.8, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }}
          exit={{ scale: 0.8, y: 50, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <h2 className="text-3xl md:text-4xl sujoy text-gray-800">{name}</h2>
            <div className="flex flex-col md:flex-row items-center gap-2 text-black font-semibold text-md mt-2">
                <FaCalendarAlt />
                <span>{startDate.toLocaleDateString(undefined, {
                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                })}</span>
            </div>
          </div>

          {/* Status-dependent Content */}
          <div className="min-h-auto flex flex-col justify-center items-center">
            {status === "upcoming" && <CountdownDisplay timeLeft={timeLeft} />}
            {status === "live" && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="flex items-center gap-2 text-3xl sujoy font-bold text-red-400">
                        We’re Live Now!
                    </div>
              </motion.div>
            )}
          </div>
            <button
                onClick={() => setIsOpen(false)}
                aria-label="Close popup"
                className="cursor-pointer sujoy w-full rounded py-2 px-4 mt-8 font-bold bg-green-500 text-black transition-colors"
            >
                Close 
            </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}