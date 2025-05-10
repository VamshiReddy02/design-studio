import { IoMenu } from 'react-icons/io5'
import logoImage from '../assets/images/logo.png'
import Button from '../components/Button'

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
  { label: "Careers", href: "#careers" },
]
const Navbar = () => {
  return (
    <section className='px-3 md:px-4 lg:px-4 py-6'>
      <div className="container">
        <div className='flex justify-between items-center'>
          {/* logo Image */}
          <div>
            <img src={logoImage} alt='logo' className='h-9 md:h-auto w-auto' />
          </div>
          {/* links */}
          <div className='flex justify-end items-center gap-14'>
            <IoMenu className='h-10 w-10 md:hidden'/>
            <div className='hidden lg:flex justify-center items-center'>
              <nav className='flex gap-12 font-sm'>
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <Button label='Get in touch' className='hover:bg-transparent hover:text-white transition hidden md:inline-flex items-center'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar