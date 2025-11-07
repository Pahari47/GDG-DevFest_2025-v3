import { useEffect } from "react";

const WinnerCard = ({ name, imageUrl, rank, rankColor, extraClasses = "" }) => {
  return (
    <div 
      className={`bg-zinc-800 min-h-100 items-center rounded-lg shadow-2xl overflow-hidden text-center transform transition-all duration-500 ease-in-out ${extraClasses}`}
    >
      <div className="relative items-center">
        <img
          src={imageUrl}
          alt="Winner"
          className="w-full h-72 object-cover"
          onError={(e) => { e.target.src = 'https://png.pngtree.com/png-clipart/20221230/original/pngtree-blank-face-man-cartoon-character-png-image_8831926.png'; }}
        />
        <div className={`absolute top-0 right-0 m-4 px-3 py-1 bg-black bg-opacity-50 rounded-full text-lg font-bold ${rankColor}`}>
          {rank}
        </div>
      </div>
      <div className="p-6">
        <h2 className={`text-2xl font-bold sujoy ${rankColor}`}>{name}</h2>
      </div>
    </div>
  );
};


export default function CtfwinnerPage () {
  const commonImageUrl = "https://png.pngtree.com/png-clipart/20221230/original/pngtree-blank-face-man-cartoon-character-png-image_8831926.png";

  useEffect(() => {
        window.scrollTo({
          top: 0,
        });
    }, []);

  const winners = [
    { 
      id: 1, 
      name: "Md sarfraj ali", 
      rank: "1st Place", 
      rankColor: "text-yellow-400",
      scale: "md:scale-100"
    },
    { 
      id: 2, 
      name: "Dipanjan Mandal", 
      rank: "2nd Place", 
      rankColor: "text-gray-300",
      scale: "md:scale-100" 
    },
    { 
      id: 3, 
      name: "Aniket Shaw", 
      rank: "3rd Place", 
      rankColor: "text-orange-400",
      scale: "md:scale-100"
    },
  ];

  return (
    <div className="min-h-screen w-full px-2 py-24 md:px-8 md:py-34">
      <header className="text-center w-full md:max-w-6xl mx-auto mb-8 md:mb-16">
        <h1 className="text-xl p-1 md:text-5xl sujoy font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
          Congratulations to Our Winners!
        </h1>
      </header>
      
      <main className="w-full p-4 md:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-12 items-end">
          {winners.map(winner => (
            <WinnerCard
              key={winner.id}
              name={winner.name}
              imageUrl={commonImageUrl}
              rank={winner.rank}
              rankColor={winner.rankColor}
              extraClasses={`${winner.scale} hover:!scale-115`} // Apply scaling and hover effect
            />
          ))}
        </div>
      </main>
    </div>
  );
};