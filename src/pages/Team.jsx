// src/components/TeamSection.jsx
import React from "react";
import borderFrame from "../assets/images/abou.png"; // arcade frame image

// Teams grouped
const teams = [
  {
    title: "Organizer Team",
    members: [
      { name: "Aninda Saha", role: "Confidential", img: "./aninda.jpg" },
      { name: "Oishi Sen", role: "Genpact", img: "./oishi.jpg" },
      { name: "Priyanka Singh", role: "Accenture", img: "./Priyanka.jpg" },
    ],
  },
  {
    title: "Web Team",
    members: [
      { name: "Avishek Mukherjee ", role: "SoulAI", img: "./abhishek.jpg" },
      { name: "Arnab Mukherjee", role: "Aam Panna Creations", img: "cpg.jpeg" },
      { name: "Nachiketa Pahari", role: "Recharge ", img: "./Nachiketa.jpg" },
      { name: "Soumaditya Pal", role: "LegalCare", img: "./soumyo.jpg" },
      { name: "Sujoy Garai", role: "Volenteer", img: "./sujoy.jpg" },
      { name: "Sitangshu Maji ", role: "Volenteer", img: "./sitangshu.png" },
      { name: "Priyangshu Singh", role: "Volenteer", img: "./priyangshu.jpg" },
    ],
  },
  {
    title: "Outreach Team",
    members: [
      { name: "Survi Mukherjee ", role: "Dr. B.C Roy Engineering College", img: "./survii.png" },
      { name: "Anisha Kundu", role: "INFOTACT", img: "./anisha2.jpg" },
      { name: "Shruti Thakur ", role: "GDG on campus BCREC ", img: "./shruti.png" },
      { name: "Rahul Poddar", role: "Dr. B. C. Roy Engineering College", img: "./rahul.jpg" },
      { name: "Sujay Roy ", role: "Volenteer", img: "./sujoyy.jpg" },
      { name: "Kishlay Kumar ", role: "Dr B.C Roy Engineering College ", img: "./kish.jpg" },
    ],
  },
  {
    title: "Graphics Team",
    members: [
      { name: "Soumyadtiya Bauri", role: "GDG ON CAMPUS BCREC ", img: "./soumyod.jpg" },
      { name: "Amar Mahato", role: "GDG on campus BCREC", img: "./amar.jpg" },
      { name: "Pawan Sharma", role: "Core Team Member", img: "./pawan.jpg" },
      { name: "Sourojit Banerjee ", role: "Oasis Infobyte ", img: "./surojit.jpg" },
      { name: "Sankha Chakraborty", role: "Aec", img: "./sankha.jpeg" },
    ],
  },
  {
    title: "Management Team",
    members: [
      { name: "Riya Gupta ", role: "Gdg durgapur ", img: "./riya.jpg" },
      { name: "Aniket Banerjee", role: "Volenteer ", img: "./aniket.jpg" },
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="pt-28 pb-12 px-6 bg-black">
      {/* Main Heading in arcade font */}
      <h2 className="arcade-font text-2xl md:text-4xl text-center mb-10 text-white">
        🎮 Meet Our Team 🎮
      </h2>

      {teams.map((team, i) => (
        <div key={i} className="mb-16">
          {/* Team Title in arcade font */}
          <h3 className="arcade-font text-lg md:text-2xl text-center mb-8 text-gray-200">
            {team.title}
          </h3>

          {/* Grid of Members */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.members.map((member, idx) => (
              <div
                key={idx}
                className="relative aspect-square w-[200px] mx-auto overflow-hidden rounded-xl border border-gray-700"
              >
                {/* Member Image */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${member.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Frame Overlay */}
                <img
                  src={borderFrame}
                  alt="Frame"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                />

                {/* Role (normal font) */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/70 text-white px-2 py-1 rounded text-[8px] md:text-[10px] text-center">
                  {member.role}
                </div>

                {/* Name (normal font) */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center bg-black/80 text-white px-2 py-1 rounded text-[9px] md:text-xs font-bold">
                  {member.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}            <div
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
