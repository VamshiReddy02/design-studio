
const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

const Footer = () => {
  return (
    <section className="py-32">
      <div className="container px-3 md:px-4 lg:px-4">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
            <div>
              <h1 className='text-4xl h-2 md:h-auto w-auto uppercase tracking-[1rem]'>VYNSX</h1>
            </div>
            <div className="flex gap-6">
                {footerLinks.map((link) => (
                  <a href={link.href} key={link.label} className='text-white/50 text-sm'>{link.label}</a>
                ))}
            </div>
          </div>
      </div>
    </section>
  )
}

export default Footer