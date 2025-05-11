import Button from '../components/Button'

const Introduction = () => {
  return (
    <section className='py-32'>
      <div className="container px-3 md:px-4 lg:px-4 py-6">
        <div className='flex flex-col justify-center items-center gap-10'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl text-center tracking-tighter max-w-2xl leading-tight'>From insight to impact across brand, digital, and physical worlds.</h1>
          <Button label='See our work' />
        </div>
      </div>
    </section>
  )
}

export default Introduction