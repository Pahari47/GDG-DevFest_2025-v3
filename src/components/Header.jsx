import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollToSection } from "../transition/scrollToSection";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.jpg"; // your logo

export default function Header() {
  const scrollToSection = useScrollToSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (section) => {
    scrollToSection(section);
    setMenuOpen(false); // close menu after click
  };

  return (
    <header className="w-full fixed lg:top-6 left-0 z-50">
      <nav className="w-full md:max-w-7xl sujoy bg-black lg:bg-black/80 mx-auto lg:rounded-2xl lg:border-2 border-b-2 border-amber-400 flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleScroll("hero")}
          className="flex items-center gap-2 cursor-pointer text-base"
        >
          <img src={logo} alt="DevFest Logo" className="h-6 md:h-8 w-auto" />
          <span className="md:text-xl font-bold">DevFest</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-8 font-medium">
          <li>
            <button
              onClick={() => handleScroll("about")}
              className="hover:text-blue-500 cursor-pointer"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("tracks")}
              className="hover:text-yellow-500 cursor-pointer"
            >
              Tracks
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("sponsors")}
              className="hover:text-green-500 cursor-pointer"
            >
              Sponsors
            </button>
          </li>
          <li>
            <Link to="/speakers" className="hover:text-red-500 cursor-pointer">
              Speakers
            </Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-purple-500 cursor-pointer">
              Team
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden sujoy absolute top-[72px] right-6 left-6 bg-black/95 border-2 border-amber-400 rounded-xl shadow-lg p-6 space-y-4">
          <button
            onClick={() => handleScroll("about")}
            className="block w-full text-left hover:text-blue-500"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("tracks")}
            className="block w-full text-left hover:text-yellow-500"
          >
            Tracks
          </button>
          <button
            onClick={() => handleScroll("sponsors")}
            className="block w-full text-left hover:text-green-500"
          >
            Sponsors
          </button>
          <Link
            to="/speakers"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-left hover:text-red-500"
          >
            Speakers
          </Link>
          <Link
            to="/team"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-left hover:text-purple-500"
          >
            Team
          </Link>
        </div>
      )}
    </header>
  );
}
