import { useEffect } from "react";

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
      { name: "Arnab Mukherjee", role: "Aam Panna Creations", img: "./cpg.jpeg" },
      { name: "Nachiketa Pahari", role: "Recharge ", img: "./Nachiketa.jpg" },
      { name: "Soumaditya Pal", role: "LegalCare", img: "./soumyo.jpg" },
      { name: "Sujoy Garai", role: "Dr B.C. Roy Engineering College", img: "./sujoy.jpg" },
      { name: "Sitangshu Maji ", role: "Volunteer", img: "./sitangshu.png" },
      { name: "Priyangshu Singh", role: "Volunteer", img: "./priyangshu.jpg" },
    ],
  },
  {
    title: "Outreach Team",
    members: [
      { name: "Survi Mukherjee ", role: "Dr. B.C. Roy Engineering College", img: "./survii.png" },
      { name: "Anisha Kundu", role: "INFOTACT", img: "./anisha2.jpg" },
      { name: "Shruti Thakur ", role: "GDG on campus BCREC ", img: "./shruti.png" },
      { name: "Rahul Poddar", role: "Dr. B.C. Roy Engineering College", img: "./rahul.jpg" },
      { name: "Sujay Roy ", role: "Volunteer", img: "./sujoyy.jpg" },
      { name: "Kishlay Kumar ", role: "Dr B.C Roy Engineering College ", img: "./kish.jpg" },
    ],
  },
  {
    title: "Graphics Team",
    members: [
      { name: "Soumyadtiya Bauri", role: "GDG ON CAMPUS BCREC ", img: "./soumyod.jpg" },
      { name: "Amar Mahato", role: "Dr. B.C. Roy Engineering College", img: "./amar.jpg" },
      { name: "Pawan Sharma", role: "Core Team Member", img: "./pawan.jpg" },
      { name: "Sourojit Banerjee ", role: "Oasis Infobyte ", img: "./surojit.jpg" },
      { name: "Sankha Chakraborty", role: "Asansol Engineering College", img: "./sankha.jpeg" },
      { name: "Sayan Sarkar", role: "GDG On Campus BCET", img: "./sayans.jpg" },
    ],
  },
  {
    title: "Management Team",
    members: [
      { name: "Aniket Banerjee", role: "Dr B.C Roy Engineering College", img: "./aniket.jpg" },
    ],
  },
];

export default function TeamSection() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <section className="pt-28 xl:pt-34 pb-12 px-6 bg-black">
      <h2 className="arcade-font text-2xl md:text-4xl text-center mb-10 text-white">
        <span className="text-blue-500">Meet</span> Our <span className="text-green-500">Team</span>
      </h2>

      {teams.map((team, i) => (
        <div key={i} className="mb-16">
          <h3 className="arcade-font text-lg md:text-2xl text-center mb-8 text-yellow-200">
            {team.title}
          </h3>

          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {team.members.map((member, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="relative aspect-square w-[200px] overflow-hidden rounded">
                    <div
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url(${member.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                  <p className="arcade-font text-purple-600 text-sm md:text-base mt-3">
                    {member.name}
                  </p>
                  <p className="arcade-font text-gray-400 text-xs md:text-sm">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}