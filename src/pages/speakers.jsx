import { useEffect } from "react";

export default function Speakers() {
    useEffect(() => {
    // Always scroll to top when component mounts
    window.scrollTo({
      top: 0,
    //   behavior: 'smooth'
    });
    }, []);

    return (
        <div className="sujoy flex items-center justify-center min-h-screen text-center text-4xl md:text-6xl font-bold text-blue-400">Stay Tuned!</div>
    )
}
