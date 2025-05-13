import Card from '../components/Card'
import project1 from '../assets/images/1.jpeg'
import project2 from '../assets/images/2.jpeg'
import project3 from '../assets/images/3.jpeg'
import project4 from '../assets/images/4.jpeg'
import project5 from '../assets/images/5.jpeg'
import project6 from '../assets/images/6.jpeg'

const Project = [
  {
    image: project3,
    brand: 'Blush Botanica',
    product: 'Luxe Skin Revival Kit',
    title: 'low Goals Achieved, Your Radiance Ritual Starts Here',
  },
  {
    image: project2,
    brand: 'LumiPix',
    product: 'SnapMini 11',
    title: 'Capture Moments in a Blink, Pocket-Sized Nostalgia',
  },
  {
    image: project1,
    brand: 'Apple',
    product: 'AirPods Max',
    title: 'Silence Meets Performance, Power in Every Layer',
  },
  {
    image: project4,
    brand: 'CurvoLux',
    product: 'Ziggle Table Lamp',
    title: 'Mood Lighting That Adapts to Your Life',
  },
  {
    image: project5,
    brand: 'WhimsyWorks',
    product: 'Hopper Stapler',
    title: 'Add a Little Leap to Your Desk Game',
  },
  {
    image: project6,
    brand: 'VitaBloom',
    product: 'C+ Radiance Serum',
    title: 'Glow Naturally, Powered by Pure Citrus Drops',
  },
]

const Projects = () => {
  return (
    <section className='px-4 py-10'>
        <div className='container mb-10'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl text-left font-medium'>
              Featured Projects
          </h1>
        </div>

        <div className='overflow-x-auto w-full'>
          <div className='flex gap-6 min-w-max px-4 md:px-10 lg:px-21'>
            {Project.map((pro, index) => (
              <div key={index} className='flex-shrink-0 w-[300px] md:w-[350px]'>
                <Card 
                   image={pro.image}
                   brand={pro.brand}
                   product={pro.product}
                   title={pro.title} 
                  />
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Projects