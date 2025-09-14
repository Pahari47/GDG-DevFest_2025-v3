// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import gdgLogo from "../assets/images/logo.jpg"; // replace with your logo

export default function Footer() {
  return (
    <footer className="py-8 px-6 mt-0">
      <div className="w-full md:max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl md:text-2xl p-2 font-bold sujoy text-yellow-500">
            Keep in touch for latest announcements!
          </h2>
          <p className="mt-2 p-2 w-full">
            Let's get connected so that we can reach out to each other via socials. <br />
            Stack out <span className="font-medium">@GDGDurgapur</span> for updates and news.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a href="https://www.facebook.com/GDGDurgapur/" className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/gdg.durgapur/" className="bg-pink-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-zinc-800 text-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/company/gdgdurgapur/" className="bg-blue-800 text-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition">
              <FaLinkedinIn />
            </a>
            {/* <a href="#" className="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition">
              <FaYoutube />
            </a> */}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <img src={gdgLogo} alt="GDG Logo" className="h-12 mb-2" />
          <span className="sujoy font-medium text-md text-green-500">Google <span className="text-blue-500">Developer</span>  <span className="text-white">Groups</span></span>
        </div>
      </div>
    </footer>
  );
}
