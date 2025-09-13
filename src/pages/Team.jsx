// src/components/TeamSection.jsx
import React from "react";
import borderFrame from "../assets/images/abou.png"; // your frame image

const teamMembers = [
  {
    name: "Sujoy Garai",
    role: "Full Stack Developer",
    img: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
  },
  {
    name: "Ananya Roy",
    role: "UI/UX Designer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaUTLa8k-uV8Wnd57YgRHt0Yx6hhlTraE3KrRTTicgj3znOQ2yAAIeTv5gQeUeLLjyjM&usqp=CAU",
  },
  {
    name: "Ravi Kumar",
    role: "Backend Engineer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZdrybHV3F79eAqX8lguAtd1W6Z037RAR7eDdxxi96nDBs490Dd5oH9EQAbC-Ubk5ad0&usqp=CAU",
  },
  {
    name: "Priya Sharma",
    role: "Graphic Designer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DQ-tp12zlDGEUfulC2NNYwJ7vvskGXip6w&s",
  },
];

export default function TeamSection() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="relative w-[280px] h-[420px] mx-auto">
            {/* Member Image as background */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${member.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Frame overlay */}
            <img
              src={borderFrame}
              alt="Frame"
              className="absolute inset-0 w-full h-full pointer-events-none"
            />

            {/* Role (Top) */}
            <div className="absolute top-10 left-26 -translate-x-1/2 bg-zinc-800/50 text-white w-auto px-4 py-2 rounded text-sm font-medium">
              {member.role}
            </div>

            {/* Name (Bottom) */}
            <div className="flex justify-center items-center w-auto">
            <div className="absolute  bottom-12 text-center bg-zinc-800 text-white px-6 py-2 rounded sujoy text-sm font-bold">
              {member.name}
            </div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
