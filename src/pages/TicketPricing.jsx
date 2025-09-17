const plans = [
  {
    title: "Early Bird",
    price: "209 INR",
    description: "Catch that worm!",
    button: "Buy Ticket",
    soldOut: true,
    accent: "red-400",
    color: "text-green-400",
    btnColor: "bg-green-400 text-black hover:bg-green-500",
    link: "https://pages.razorpay.com/pl_RBHCb7yKq1qITX/view", 
  },
  {
    title: "Regular",
    price: "299 INR",
    description: "Next slot open soon.",
    button: "Buy Ticket",
    soldOut: true,
    accent: "green-400",
    color: "text-yellow-400",
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
    color: "text-blue-400",
    btnColor: "bg-gray-700 text-black hover:bg-gray-700",
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid mt-10 lg:mt-0 grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-12">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="relative flex flex-col items-center border-2 border-white rounded-xl bg-white/5 w-auto py-16 px-10 text-center overflow-hidden"
          >
            {/* Accent block at bottom-right (z-0) */}
            <div
              className={`absolute bottom-0 right-0 w-12 h-12 rounded-br-xl rounded-tl-3xl opacity-80 ${accentColors[plan.accent]} z-0`}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <h3 className={`text-2xl font-bold mb-2 sujoy ${plan.color}`}>
                {plan.title}
              </h3>

              <div className="text-3xl font-extrabold text-white mb-2 sujoy">
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
                  className={`px-6 py-2 sujoy rounded shadow font-semibold border-white border inline-block ${plan.btnColor}`}
                >
                  {plan.button}
                </a>
              ) : (
                <button
                  className={`px-6 sujoy py-2 rounded shadow font-semibold border-white border ${plan.btnColor}`}
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
