import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Checklist with Auto-Save',
    description:
      'An interactive checklist experience focused on preserving user progress through automatic saving and reliable state updates.',
    tags: ['React', 'TypeScript', 'State Management'],
    github: 'https://github.com/gsheode/checklist-autosave',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Autocomplete Typeahead',
    description:
      'A typeahead suggestion experience that helps users discover and select matching results efficiently as they type.',
    tags: ['React', 'TypeScript', 'Autocomplete'],
    github: 'https://github.com/gsheode/autocomplete-typeahead-suggestions',
    accent: 'from-violet-400 to-fuchsia-500',
  },
]

const skills = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Redux',
      'TanStack Query',
      'TypeScript',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Elixir',
      'Ruby on Rails',
      'ASP.NET',
      'GraphQL',
      'REST APIs',
    ],
  },
  {
    title: 'Tools & Testing',
    items: [
      'Git',
      'Webpack',
      'Babel',
      'Playwright',
      'TestCafe',
      'Jest',
    ],
  },
]

const experience = [
  {
    years: 'Mar 2026 – Present',
    role: 'Software Engineer',
    company: 'Clarity (formerly Hiive) · Vancouver, BC',
    detail:
      'Shaping frontend architecture for a customer-facing trading platform and owning Elixir/GraphQL and Next.js/React features from concept to launch. Improved Apollo Client caching and removed stale portfolio data while reducing unnecessary GraphQL requests.',
  },
  {
    years: 'Sept 2022 – Mar 2026',
    role: 'Software Engineer 2',
    company: 'Highspot LLC · Seattle, WA',
    detail:
      'Rebuilt a legacy content viewer with SSG, led a JavaScript-to-TypeScript migration, and implemented optimistic react-query updates. Built React and Ruby solutions and led external-sharing integrations across Gmail, Outlook, and Salesforce.',
  },
  {
    years: 'Oct 2020 – Sept 2022',
    role: 'Software Engineer II',
    company: 'Dimensional Fund Advisors LLC · Austin, TX',
    detail:
      'Improved the company website and public front end using a headless Sitecore architecture, Coveo search, Formik/Yup forms, and Rush.js monorepo splitting.',
  },
  {
    years: 'Earlier Experience',
    role: 'Intern & Junior Application Developer',
    company: 'WalletGyde · Sprint · iNautix Technologies, BNY Mellon',
    detail:
      'Built React and C# financial counseling tools, migrated AngularJS applications to Angular and TypeScript, and delivered React/Redux and Java 8/Spring market-testing solutions.',
  },
]

const education = [
  {
    degree: 'Master of Science, Information Technology Management',
    institution: 'University of Texas at Dallas',
    duration: 'Aug 2018 – May 2020',
  },
  {
    degree: 'Bachelor of Engineering, Information Technology',
    institution: 'University of Pune, Pune, India',
    duration: 'Aug 2012 – Jul 2016',
  },
  {
    degree: 'TypeScript: The Complete Developer’s Guide',
    institution: 'Udemy',
    duration: 'Certification',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#07111f]/85 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          aria-label="Primary navigation"
        >
          <a
            href="#top"
            className="text-lg font-bold tracking-tight"
          >
            GS<span className="text-cyan-400">.</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#education">Education</a>
            <a
              className="rounded-full border border-cyan-400/40 px-4 py-2 text-cyan-300 transition hover:bg-cyan-400/10"
              href="#contact"
            >
              Get in touch
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative mx-auto flex min-h-[720px] max-w-6xl items-center px-6 pb-16 pt-28">
          <div className="hero-grid absolute inset-0 -z-0 opacity-35" />
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
            className="relative z-10 max-w-4xl"
          >
            <motion.p
              variants={reveal}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400"
            >
              <span className="h-px w-10 bg-cyan-400" /> Software Engineer
            </motion.p>
            <motion.h1
              variants={reveal}
              transition={{ duration: 0.65 }}
              className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[82px]"
            >
              I build scalable software that{' '}
              <span className="gradient-text">makes an impact.</span>
            </motion.h1>
            <motion.p
              variants={reveal}
              transition={{ duration: 0.65 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              Product-minded engineer experienced in owning complex features,
              shaping frontend architecture, and delivering scalable web applications
              from concept to launch.
            </motion.p>
            <motion.div
              variants={reveal}
              transition={{ duration: 0.65 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a className="primary-button" href="#projects">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a
                className="secondary-button"
                href="https://github.com/gsheode"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="border-y border-white/5 bg-white/[0.015]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <p className="section-label">01 / About</p>
              <h2 className="mt-4 text-4xl font-bold">Engineering with purpose.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>
                I’m a product-minded Software Engineer based in Vancouver,
                BC, with experience across React, Next.js, Elixir, Ruby on Rails,
                GraphQL, and ASP.NET.
              </p>
              <p>
                I shape frontend architecture, lead migrations and modernization,
                improve application performance and caching, and build reliable
                customer-facing experiences.
              </p>
              <p>
                I also use AI-assisted development tools—including Cursor, GitHub
                Copilot, and Claude—to accelerate delivery while maintaining clear
                coding standards and thoughtful engineering practices.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <p className="section-label">02 / Expertise</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {skills.map(({ title, items }) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                className="bg-[#0b1727] p-8"
              >
                <h3 className="mb-6 text-xl font-semibold text-cyan-300">{title}</h3>
                <ul className="space-y-3 text-slate-300">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-white/5 bg-[#091524]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="section-label">03 / Selected work</p>
            <div className="mt-4 flex items-end justify-between gap-6">
              <h2 className="max-w-xl text-4xl font-bold sm:text-5xl">
                Complex products, delivered end to end.
              </h2>

            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.55 }}
                  className="group flex min-h-[330px] flex-col rounded-2xl border border-white/10 bg-[#0d1b2c] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <div className={`mb-12 h-1 w-16 rounded-full bg-gradient-to-r ${project.accent}`} />
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View repository <span className="transition group-hover:translate-x-1">→</span>
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
          <p className="section-label">04 / Experience</p>
          <h2 className="mt-4 text-4xl font-bold">Where I’ve made a difference.</h2>
          <div className="mt-12 border-t border-white/10">
            {experience.map((item) => (
              <div
                key={`${item.role}-${item.company}`}
                className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-[160px_1fr_1.4fr] md:items-start"
              >
                <p className="text-sm text-cyan-400">{item.years}</p>
                <div>
                  <h3 className="font-semibold">{item.role}</h3>
                  <p className="mt-1 text-slate-400">{item.company}</p>
                </div>
                <p className="leading-7 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="border-y border-white/5 bg-white/[0.015]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="section-label">05 / Education & Certifications</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-2xl border border-white/10 bg-[#0b1727] p-7"
                >
                  <p className="text-sm text-cyan-400">{edu.duration}</p>
                  <h3 className="mt-3 text-xl font-semibold">{edu.degree}</h3>
                  <p className="mt-2 text-slate-400">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/10 px-7 py-16 text-center sm:px-12"
          >
            <p className="section-label">06 / Contact</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
              Let’s build something meaningful.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
              Vancouver, BC
            </p>
            <a className="primary-button mt-8" href="mailto:gandhali.p.sheode@gmail.com">
              gandhali.p.sheode@gmail.com <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Gandhali Sheode</p>
        <div className="flex gap-5">
          <a className="hover:text-cyan-300" href="https://github.com/gsheode" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-cyan-300" href="https://linkedin.com/in/gsheode/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

export default App
