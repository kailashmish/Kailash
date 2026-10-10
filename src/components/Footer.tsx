import { Heart, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Kailash Mishra</h3>
            <p className="text-slate-300 mb-6">
              Lead Full-Stack Engineer — building web, mobile, and AI systems
              that ship
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://www.linkedin.com/in/kailash-mishra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://github.com/kailashmish"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="mailto:mishrakailash120@gmail.com"
                className="p-3 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-700">
            <p className="flex items-center justify-center text-slate-400 flex-wrap gap-1">
              Made with <Heart size={16} className="mx-1 text-orange-500" /> by
              Kailash Mishra
              <span className="mx-2">•</span>© {new Date().getFullYear()} All
              rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
