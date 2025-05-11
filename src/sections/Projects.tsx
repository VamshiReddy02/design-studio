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
    brand: 'Owala',
    product: 'FreeSip Water Bottle',
    title: 'Uniquely Functional and Artistically Styled',
  },
  {
    image: project2,
    brand: 'IonQ',
    product: 'Forte Enterprise Quantum Computer',
    title: 'Redefining Quantum Computing',
  },
  {
    image: project1,
    brand: 'Sony',
    product: 'WH-1000XM5',
    title: 'Next-Level Noise Cancellation and Comfort',
  },
  {
    image: project4,
    brand: 'Philips Hue',
    product: 'Smart Table Lamp',
    title: 'Mood Lighting That Adapts to Your Life',
  },
  {
    image: project5,
    brand: 'Sonos',
    product: 'Roam Portable Speaker',
    title: 'Powerful Sound in a Compact, Travel-Ready Form',
  },
  {
    image: project6,
    brand: 'Segway',
    product: 'Ninebot KickScooter',
    title: 'Effortless Urban Mobility with Sleek Design',
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