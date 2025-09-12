import { Link } from "react-router-dom"
import Default from "../components/defult.jsx"
import LogoLoop from "../transition/LogoLoop.jsx"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import Hero from "../components/Hero.jsx"
import About from "../components/About.jsx";
import DevFestStats from "../components/DevFestStats.jsx"
import TechTracks from "../components/TechTracks.jsx";
import Detils from "../components/Detils.jsx";
import FAQ from "../components/Faq.jsx";
import ImageGallery from "../components/ImageGallery.jsx";
import CurvedLoop from '../transition/CurvedLoop.jsx';
import Sponsors from "../components/Sponsors.jsx";

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
];

export default function Home() {
    return (
        <>  
            <Hero />
            <div className="max-w-7xl mx-auto">
            <About />
            <div style={{ height: '60px', position: 'relative', overflow: 'hidden'}}>
                  <LogoLoop
                    logos={techLogos}
                    speed={80}
                    direction="left"
                    logoHeight={52}
                    gap={60}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    ariaLabel="Technology partners"
                  />
            </div>
            <DevFestStats />
            <TechTracks />
            <Sponsors />
            <Detils />
            <CurvedLoop className="sujoy mt-6"
              marqueeText="DEVFEST DURGAPUR 2025 ✦ "
              speed={1}
              curveAmount={0}
              interactive={false}
            />
            <ImageGallery />
            <FAQ />
            <div style={{ height: '60px', position: 'relative', overflow: 'hidden'}}>
                  <LogoLoop
                    logos={techLogos}
                    speed={80}
                    direction="left"
                    logoHeight={52}
                    gap={60}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    ariaLabel="Technology partners"
                  />
            </div>
            </div>
        </>
    )
}