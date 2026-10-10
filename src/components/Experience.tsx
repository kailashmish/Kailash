import { Calendar, ChevronRight, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      period: 'Aug 2025 – Present',
      title: 'Lead Full-Stack Engineer & Architect',
      company: 'Ezer Commerce',
      location: 'New Orleans, LA · Remote',
      description:
        'Sole architect of a multi-tenant AI customer engagement SaaS — schema, WebSocket infrastructure, and multi-channel pipeline (WhatsApp, SMS, Email, FB Messenger) handling high message volumes at 99.9% delivery.',
      highlights: [
        'Built React 19 + TypeScript frontend and React Native mobile apps (iOS/Android) as the single engineer owning the full product surface',
        'Engineered Stripe subscription billing pipeline; designed headless CMS cutting editorial time by 60%',
        'Established TypeScript standards, CI/CD pipelines, and code-review process — reducing bug rate by 30%',
      ],
    },
    {
      period: 'Jun 2022 – Aug 2025',
      title: 'Senior Full-Stack Engineer',
      company: 'Azguards Technolabs',
      location: 'Ahmedabad, India · Remote',
      description:
        'Led 20+ enterprise Magento 2 projects end-to-end — subscriptions, GraphQL integrations, and Hyvä theme builds serving large-scale e-commerce customers.',
      highlights: [
        'Architected Moodle LMS platforms with custom plugins, SCORM/xAPI, SAML2 SSO, and branded Boost themes for thousands of learners',
        'Automated majority of manual merchant workflows through custom PHP modules for billing, inventory, and multi-store management',
        'Optimised platform performance by 40% via OPcache, Varnish, and MySQL profiling — achieving sub-2s load times',
      ],
    },
    {
      period: 'Jul 2021 – Jun 2022',
      title: 'Full-Stack Engineer',
      company: 'Sastodeal',
      location: 'Kathmandu, Nepal',
      description:
        'Maintained a large-scale Magento 2 marketplace platform with a focus on performance, payments, and conversion.',
      highlights: [
        'Reduced page-load time by 35% and bounce rate by 20% through caching and query optimisation',
        'Integrated payment gateways and real-time shipping tracking, improving checkout conversion by 15%',
      ],
    },
    {
      period: 'Jan 2019 – Jun 2021',
      title: 'Full-Stack Developer',
      company: 'Udeytech Software Pvt. Ltd.',
      location: 'Janakpur, Nepal',
      description:
        'Delivered 15+ Magento 2 builds from scratch across fashion, electronics, and B2B — mastering DI, plugins, service contracts, and EAV.',
      highlights: [
        'Integrated multiple payment providers and shipping carriers',
        '100% on-time delivery across all engagements',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600">
              8+ years of progressive growth in technology and product leadership
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-300 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-20">
                <div className="absolute -left-20 top-6 w-4 h-4 bg-orange-500 rounded-full hidden md:block"></div>

                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {exp.title}
                      </h3>
                      <div className="text-lg text-orange-600 font-semibold">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col text-slate-500 text-sm mt-2 md:mt-0">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <ChevronRight
                          size={16}
                          className="text-orange-500 mr-2 mt-1 flex-shrink-0"
                        />
                        <span className="text-slate-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
