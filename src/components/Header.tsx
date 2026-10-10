import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const textClass = isScrolled
    ? 'text-slate-800'
    : 'text-white'
  const linkClass = isScrolled
    ? 'text-slate-600 hover:text-orange-500'
    : 'text-slate-200 hover:text-orange-400'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold ${textClass}`}>
            Kailash Mishra
          </div>

          <div className="hidden md:flex space-x-8">
            {['about', 'experience', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${linkClass} transition-colors duration-200 capitalize font-medium`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-slate-600' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {['about', 'experience', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-slate-600 hover:text-orange-500 hover:bg-slate-50 transition-colors duration-200 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
