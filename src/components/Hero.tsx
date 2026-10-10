import { Mail, MapPin } from 'lucide-react'
import profile from '../Images/kailash.jpeg'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-100 overflow-hidden">
                <img
                  src={profile}
                  alt="Kailash Mishra"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            KAILASH MISHRA
          </h1>

          <div className="text-xl md:text-2xl text-orange-400 font-semibold mb-4 tracking-wide">
            Lead Full-Stack Engineer · Architect
          </div>

          <div className="text-lg text-slate-300 mb-2">
            8+ Years of Experience in Web, Mobile & AI Systems
          </div>

          <div className="flex items-center justify-center text-slate-400 mb-8">
            <MapPin size={18} className="mr-2" />
            <span>Nepal · Remote</span>
          </div>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Full-stack architect delivering enterprise SaaS, AI-driven platforms,
            e-commerce systems, and mobile apps. Proven ability to own technical
            vision end-to-end — from database design to production infrastructure —
            across multi-tenant architectures, real-time systems, and complex
            payment ecosystems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/kailashmish"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              aria-label="GitHub"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kailash-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="mailto:mishrakailash120@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
