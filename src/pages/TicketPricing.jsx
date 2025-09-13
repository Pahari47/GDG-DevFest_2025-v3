const plans = [
  {
    title: "Early Bird",
    price: "179 INR",
    description: "Catch that worm!",
    button: "Buy Ticket",
    soldOut: false,
    accent: "red-400",
    btnColor: "bg-green-400 text-black hover:bg-green-500",
    link: "https://pages.razorpay.com/pl_RBHCb7yKq1qITX/view", 
  },
  {
    title: "Regular",
    price: "299 INR",
    description: "Regular prices for everyone.",
    button: "Buy Ticket",
    soldOut: false,
    accent: "green-400",
    btnColor: "bg-yellow-400 text-black hover:bg-yellow-500",
    link: "https://pages.razorpay.com/pl_RHCH0BqVix7Tnh/view",
  },
  {
    title: "Professional",
    price: "Coming Soon!",
    description: "We've still got you covered.",
    button: "Buy Ticket",
    soldOut: false,
    accent: "yellow-400",
    btnColor: "bg-blue-400 text-black hover:bg-blue-500",
    link: null, 
  },
];

const accentColors = {
  "red-400": "bg-red-400",
  "green-400": "bg-green-400",
  "yellow-400": "bg-yellow-400",
};

export default function TicketPricing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col md:flex-row gap-6 px-4 py-12">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="relative flex flex-col items-center border-2 border-white rounded-xl bg-white/5 w-72 py-10 px-6 text-center overflow-hidden"
          >
            {/* Accent block at bottom-right (z-0) */}
            <div
              className={`absolute bottom-0 right-0 w-12 h-12 rounded-br-xl rounded-tl-3xl opacity-80 ${accentColors[plan.accent]} z-0`}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.title}
              </h3>
              <div className="text-3xl font-extrabold text-white mb-2">
                {plan.price}
              </div>
              <div className="mb-7 text-gray-200">{plan.description}</div>

              {plan.soldOut ? (
                <button
                  disabled
                  className="bg-gray-700 text-gray-300 px-6 py-2 rounded shadow cursor-not-allowed opacity-70 border border-gray-500"
                >
                  Sold Out
                </button>
              ) : plan.link ? (
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2 rounded shadow font-semibold border-white border inline-block ${plan.btnColor}`}
                >
                  {plan.button}
                </a>
              ) : (
                <button
                  className={`px-6 py-2 rounded shadow font-semibold border-white border ${plan.btnColor}`}
                >
                  {plan.button}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}