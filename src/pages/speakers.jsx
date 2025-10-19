import { useEffect } from "react";

import img1 from "/Asset42.png";
import img2 from "/Asset43.png";
import img3 from "/Asset44.png";
import img4 from "/Asset45.png";
import img5 from "/Asset46.png";
import img6 from "/Asset47.png";
import img7 from "/Asset48.png";
import img8 from "/Asset49.png";
import img9 from "/Asset50.png";

const speakers = [
  { id: 1, name: "Jitendra Gupta", img: img1, color: "text-pink-400" },
  { id: 2, name: "Bhavik Makwana", img: img5, color: "text-blue-400" },
  { id: 3, name: "Snighdha Kashyap", img: img2, color: "text-pink-400" },
  { id: 4, name: "Aditya Thakur", img: img8, color: "text-yellow-400" },
  { id: 5, name: "Mayur Madnani", img: img3, color: "text-pink-400" },
  { id: 6, name: "Debajit Mallick", img: img7, color: "text-yellow-400" },
  { id: 7, name: "Jay Thakkar", img: img4, color: "text-pink-400" },
  { id: 8, name: "Nitin Prakash", img: img6, color: "text-green-400" },
  { id: 9, name: "Saurabh Mishra", img: img9, color: "text-blue-400" },
];

export default function Speaker() {

  useEffect(() => {
      window.scrollTo({
        top: 0,
      });
  }, []);

  return (
    <div className="max-h-full w-full xl:max-w-7xl mx-auto pt-28 xl:pt-34 pb-12 px-6">
      <h2 className="arcade-font text-4xl md:text-4xl text-center mb-2 md:mb-10 text-white">
        <span className="text-blue-500">Meet</span> Our{" "}
        <span className="text-green-500">Speakers</span>
      </h2>

      <div className="py-6 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="shadow-md overflow-hidden p-4 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:text-yellow-400 cursor-pointer"
          >
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-full h-auto object-cover"
            />
            <div
              className={`text-center py-4 px-4 font-semibold sujoy text-3xl transition-colors duration-300 ${speaker.color}`}
            >
              {speaker.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

