import {
  Code,
  Database,
  Globe,
  Lightbulb,
  Server,
  Smartphone,
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend & Mobile',
      skills: [
        { name: 'React / TypeScript', level: 95 },
        { name: 'React Native / Expo', level: 92 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Redux / State Management', level: 88 },
        { name: 'UI Architecture', level: 90 },
      ],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend & Platforms',
      skills: [
        { name: 'Laravel / PHP 8.x', level: 95 },
        { name: 'Magento 2 / Adobe Commerce', level: 96 },
        { name: 'Node.js / Bun.js', level: 90 },
        { name: 'GraphQL / REST APIs', level: 92 },
        { name: 'WordPress / Moodle LMS', level: 88 },
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data, Infra & AI',
      skills: [
        { name: 'PostgreSQL / MySQL', level: 92 },
        { name: 'Redis / Real-time Systems', level: 88 },
        { name: 'Docker / AWS / CI-CD', level: 85 },
        { name: 'OpenAI / LangChain', level: 85 },
        { name: 'Stripe / Payments', level: 90 },
      ],
    },
  ]

  const coreCompetencies = [
    { icon: <Lightbulb className="w-6 h-6" />, text: 'Multi-tenant SaaS Architecture' },
    { icon: <Smartphone className="w-6 h-6" />, text: 'Zero-to-One Product Builds' },
    { icon: <Database className="w-6 h-6" />, text: 'Performance Optimisation' },
    { icon: <Globe className="w-6 h-6" />, text: 'Team Leadership & Mentorship' },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600">
              Technical depth combined with product ownership
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-orange-500 mb-6">{category.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreCompetencies.map((competency, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="text-orange-400 mb-3 group-hover:scale-110 transition-transform duration-200">
                    {competency.icon}
                  </div>
                  <span className="text-white font-medium">{competency.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
