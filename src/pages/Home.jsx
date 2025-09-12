import { Link } from "react-router-dom"
import Default from "../components/defult.jsx"
import LogoLoop from "../transition/LogoLoop.jsx"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import Hero from "../components/Hero.jsx"

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
            <Default />
            <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
                  <LogoLoop
                    logos={techLogos}
                    speed={120}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                  />
            </div>

        </>
    )
}