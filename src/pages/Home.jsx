import { Link } from "react-router-dom"
import Default from "../components/defult.jsx"
import LogoLoop from "../transition/LogoLoop.jsx"
import { SiAngular, SiTensorflow, SiGooglecloud, SiGooglegemini, SiFlutter, SiAndroid   } from "react-icons/si";
import Hero from "../components/Hero.jsx"
import About from "../components/About.jsx";
import DevFestStats from "../components/DevFestStats.jsx"
import TechTracks from "../components/TechTracks.jsx";
import Detils from "../components/Detils.jsx";
import FAQ from "../components/Faq.jsx";
import ImageGallery from "../components/ImageGallery.jsx";
import CurvedLoop from '../transition/CurvedLoop.jsx';
import Sponsors from "../components/Sponsors.jsx";
import { color } from "framer-motion";

const techLogos = [
  { node: <SiAngular className="text-red-600" />, title: "Angular" },
  { node: <SiTensorflow className="text-orange-500" />, title: "Tensorflow" },
  { node: <SiGooglecloud className="text-blue-500" />, title: "Google Cloud" },
  { node: <SiGooglegemini className="text-purple-500" />, title: "Google Gemini" },
  { node: <SiFlutter className="text-sky-600" />, title: "Flutter" },
  { node: <SiAndroid className="text-green-500" />, title: "Android" },
];


export default function Home() {
    return (
        <>  
            <Hero />
            <div className="w-full md:max-w-7xl mx-auto">
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
            <CurvedLoop className="sujoy mt-28"
              marqueeText="DEVFEST DURGAPUR 2025 ✦ "
              speed={1}
              curveAmount={0}
              interactive={false}
            />
            <ImageGallery />
            <FAQ />
            <div style={{ height: '60px', position: 'relative', overflow: 'hidden', width: 'full'}}>
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