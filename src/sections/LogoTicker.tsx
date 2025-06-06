import { Fragment } from 'react'
import quantumLogo from "../assets/images/quantum.svg";
import acmeLogo from "../assets/images/acme-corp.svg";
import echoValleyLogo from "../assets/images/echo-valley.svg";
import pulseLogo from "../assets/images/pulse.svg";
import outsideLogo from "../assets/images/outside.svg";
import apexLogo from "../assets/images/apex.svg";
import celestialLogo from "../assets/images/celestial.svg";
import twiceLogo from "../assets/images/twice.svg";
import { motion } from 'framer-motion';



const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

const Logoticker = () => {
  return (
    <section className='py-32 overflow-x-clip'>
      <div className="container px-20 md:px-25 lg:px-25"></div>
      <h3 className='text-center text-white/50 text-xl'>Already chosen by these market leaders</h3>
      <div className='flex overflow-x-hidden mt-12 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]'>
        <div className="flex flex-none gap-24 pr-24">
          {Array.from({ length: 2}).map((_,i) => (
            <Fragment key={i}>
              {logos.map((logo, index) => (
                <motion.img
                key={`${logo.name}-${i}-${index}`}
                src={logo.image}
                alt={logo.name}
                className="w-32 h-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.9,
                }}
              />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logoticker