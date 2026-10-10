import { Layers, Rocket, Smartphone, Zap } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'End-to-End Ownership',
      description:
        'Sole architect of multi-tenant SaaS platforms — schema, WebSockets, billing, and mobile apps',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: '50+ Projects Shipped',
      description:
        'Enterprise Magento, LMS, marketplaces, and AI products delivered at scale',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Web & Mobile',
      description:
        'React 19, React Native/Expo, Laravel, Magento 2, and Bun.js production systems',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Focused',
      description:
        'Sub-2s load times, 40% platform gains, and high-availability delivery',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Lead Full-Stack Engineer and Architect with 8+ years delivering
                enterprise SaaS, AI-driven platforms, e-commerce systems, and
                mobile applications. Adobe Commerce Certified Professional with a
                consistent track record of performance optimisation and
                high-availability delivery.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Strong across TypeScript, React, React Native, PHP/Laravel,
                Magento 2, Node/Bun, PostgreSQL, Redis, Docker, and AWS. Experienced
                integrating OpenAI/LangChain, Stripe subscriptions, WhatsApp/Twilio
                messaging, Moodle LMS platforms, and headless CMS workflows —
                owning products from zero-to-one through production scale.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                I specialize in multi-tenant architecture, real-time systems, and
                payment ecosystems. Whether shipping a CTO-led AI travel app or
                leading 20+ Magento builds, I focus on clean systems, fast delivery,
                and measurable business impact.
              </p>

              <div className="pt-6">
                <a
                  href="https://www.linkedin.com/in/kailash-mishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200"
                >
                  View LinkedIn Profile →
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-orange-500 mb-4">{highlight.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
