import { useEffect, useRef } from 'react'
import heroVideo from '../assets/images/HeroVid.gif'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const clipRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: clipRef,
    offset: ['start end', 'center center'],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(() => {
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const width = useTransform(scrollYProgress, [0, 1], ['85vw', '100vw'])
  const height = useTransform(scrollYProgress, [0, 1], ['85vh', '100vh'])

  return (
    <section className="relative overflow-x-hidden">
      {/* Heading section with .container */}
      <div className="py-32">
        <div className="container px-3 md:px-4 lg:px-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-center lg:text-left">
            Design and build the unimaginable
          </h1>
        </div>
      </div>

      {/* Scrolling image section */}
      <div className="h-[100vh] w-full" ref={clipRef}>
        <motion.div
          style={{
            width,
            height,
            position: 'sticky',
            top: 0,
            left: 0,
            right: 0,
            margin: '0 auto',
            overflow: 'hidden',
          }}
        >
          <img
            src={heroVideo}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
