import { useState, type FormEvent } from 'react'
import { CheckCircle, Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name}\n${formData.email}`,
    )
    window.location.href = `mailto:mishrakailash120@gmail.com?subject=${subject}&body=${body}`
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600">
              Let&apos;s discuss how we can build something great together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                I&apos;m always interested in discussing new opportunities,
                consulting on SaaS/mobile products, or collaborating on meaningful
                engineering work. Feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-orange-100 rounded-lg text-orange-500 mr-4">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Email</div>
                    <a
                      href="mailto:mishrakailash120@gmail.com"
                      className="text-slate-600 hover:text-orange-500 transition-colors"
                    >
                      mishrakailash120@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-orange-100 rounded-lg text-orange-500 mr-4">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Location</div>
                    <div className="text-slate-600">Nepal · Open to remote</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">
                    Opening your email app…
                  </h4>
                  <p className="text-slate-600">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
