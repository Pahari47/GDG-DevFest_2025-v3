import { useEffect } from "react";

const speakers = [
  { name: "Jitendra Gupta", img: "./jitendra_gupta.png" },
  { name: "Aditya Thakur",  img: "./aditya_thakur.png"},
  { name: "Debajit Mallick", img: "./debajit_mallick.png"},
  { name: "Mayur Madnani", img: "./mayur_madnani.png" },
  { name: "Snighdha Kashyap",img: "./snighdha_kashyap.png" },
  { name: "Nitin Prakash",img: "./nitin_prakash.png" },
  { name: "Bhavik Makwana",img: "./bhavik_makwana.png" },
];

const borderColors = [
  "border-red-500",
  "border-blue-500",
  "border-yellow-400",
  "border-green-500",
  "border-pink-500",
  "border-purple-500",
  "border-cyan-500",
];

export default function Speakers() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="w-full xl:max-w-6xl mx-auto pt-28 xl:pt-34 pb-12 px-6">
      <h2 className="arcade-font text-2xl md:text-4xl text-center mb-10 text-white">
        <span className="text-blue-500">Meet</span> Our{" "}
        <span className="text-green-500">Speakers</span>
      </h2>

      <div className="flex flex-col items-center space-y-12">
        {/* Row 1: 4 speakers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-center">
          {speakers.slice(0, 4).map((speaker, idx) => (
            <SpeakerCard
              key={idx}
              speaker={speaker}
              borderColor={borderColors[idx % borderColors.length]}
            />
          ))}
        </div>

        {/* Row 2: 3 speakers, centered */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 justify-center">
          {speakers.slice(4, 7).map((speaker, idx) => (
            <SpeakerCard
              key={idx + 4}
              speaker={speaker}
              borderColor={borderColors[(idx + 4) % borderColors.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpeakerCard({ speaker, borderColor }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden border-4 shadow-xl ${borderColor} w-[200px] h-[260px]`}
    >
      {/* Speaker Image */}
      <img
        src={speaker.img}
        alt={speaker.name}
        className="w-full h-full object-cover transform hover:scale-105 transition duration-500 ease-in-out"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Name */}
      <div className="absolute bottom-4 w-full text-center">
        <p className="arcade-font text-white text-lg font-semibold drop-shadow-md">
          {speaker.name}
        </p>
      </div>
    </div>
  );
}