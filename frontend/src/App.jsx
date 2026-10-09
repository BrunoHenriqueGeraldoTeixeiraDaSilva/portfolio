import './App.css'

// Edit this block to change your name, links, and email.
const PROFILE = {
  name: 'Bruno Silva',
  role: 'Computer science student at the University of Maryland',
  intro:
    'I build web apps with Java, Spring Boot, PostgreSQL and React. Looking for a software, data or IT internship.',
  email: 'brunohenriquqegtsilva@gmail.com',
  github: 'https://github.com/BrunoHenriqueGeraldoTeixeiraDaSilva',
  linkedin: 'https://www.linkedin.com/in/bruno-silva-48109830a',
}

// Replace each link with the project's own GitHub repo URL.
const PROJECTS = [
  {
    title: 'Premier League Database',
    description:
      'A full-stack app for browsing Premier League data, backed by a relational PostgreSQL database and a Spring Boot API with a React interface.',
    stack: 'Java, Spring Boot, PostgreSQL, React',
    href: PROFILE.github,
  },
  {
    title: 'TerpBuddy',
    description:
      'A study-partner app for UMD students, built on a Spring Boot backend with a PostgreSQL database.',
    stack: 'Java, Spring Boot, PostgreSQL',
    href: PROFILE.github,
  },
]

const SKILLS = [
  { label: 'Languages', value: 'Java, Python, C, JavaScript, SQL' },
  { label: 'Backend', value: 'Spring Boot' },
  { label: 'Frontend', value: 'React' },
  { label: 'Database', value: 'PostgreSQL' },
  { label: 'Tools', value: 'Git, GitHub' },
  { label: 'Spoken', value: 'English, Portuguese' },
]

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <a className="nav-logo" href="#top">
          {PROFILE.name}
        </a>
        <nav aria-label="Main">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <h1>{PROFILE.name}</h1>
          <p className="hero-role">{PROFILE.role}</p>
          <p className="hero-intro">{PROFILE.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">See my projects</a>
            <a className="btn" href="#contact">Get in touch</a>
          </div>
        </section>

        <section className="section" id="about">
          <h2>About</h2>
          <div className="about-text">
            <p>
              I'm a senior at the University of Maryland studying computer
              science with a minor in general business. I graduate in Fall 2027.
            </p>
            <p>
              I like working on the part of an app you don't see: databases,
              APIs, and the logic that connects them. I speak English and
              Portuguese.
            </p>
          </div>
        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>
          <ul className="project-list">
            {PROJECTS.map((project) => (
              <li className="project" key={project.title}>
                <h3>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p>{project.description}</p>
                <p className="project-stack">{project.stack}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="skills">
          <h2>Skills</h2>
          <dl className="skills">
            {SKILLS.map((skill) => (
              <div key={skill.label} style={{ display: 'contents' }}>
                <dt>{skill.label}</dt>
                <dd>{skill.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section" id="contact">
          <h2>Contact</h2>
          <p className="contact-lead">
            I'm looking for internships in software, data and IT. Email is the
            fastest way to reach me.
          </p>
          <div className="contact-links">
            <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>
              Email me
            </a>
            <a className="btn" href={PROFILE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {PROFILE.name}
      </footer>
    </div>
  )
}
