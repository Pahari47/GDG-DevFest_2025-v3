// src/utils/scrollToSection.js
import { useNavigate, useLocation } from "react-router-dom";

export function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  function scrollToSection(id) {
    if (location.pathname === "/") {
      // Already on Home → scroll directly
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to Home with hash
      navigate(`/#${id}`);
    }
  }

  return scrollToSection;
}
