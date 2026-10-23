import React from 'react';

const projects = [
  {
    name: 'ShidoScan',
    category: 'Blockchain Explorer',
    description: 'Frontend and blockchain explorer development.',
    url: 'https://shidoscan.com/',
    number: '01',
  },
  {
    name: 'BlockDAG',
    category: 'Blockchain Infrastructure',
    description: 'Smart contracts and blockchain integration.',
    url: 'https://blockdag.network/',
    number: '02',
  },
  {
    name: 'Qubetics',
    category: 'Blockchain Development',
    description: 'Blockchain development and ecosystem solutions.',
    url: 'https://www.qubetics.com/',
    number: '03',
  },
  {
    name: 'BDAGScan',
    category: 'Blockchain Explorer',
    description: 'Blockchain explorer development.',
    url: 'https://bdagscan.com/?chain=EVM',
    number: '04',
  },
];

const services = [
  {
    number: '01',
    title: 'Blockchain Development',
    description:
      'Custom blockchain networks, EVM-compatible chains, consensus mechanisms, and Web3 infrastructure.',
  },
  {
    number: '02',
    title: 'Smart Contract Development',
    description:
      'Secure Solidity contracts, token standards, DeFi protocols, staking systems, and integrations.',
  },
  {
    number: '03',
    title: 'Web3 Applications',
    description:
      'Modern dApps, wallet connections, Web3 dashboards, and blockchain-powered platforms.',
  },
  {
    number: '04',
    title: 'Blockchain Explorers',
    description:
      'Custom explorers with transaction tracking, wallet details, blocks, and network analytics.',
  },
  {
    number: '05',
    title: 'Tokenization & DeFi',
    description:
      'Token development, staking platforms, RWA tokenization, and decentralized finance solutions.',
  },
  {
    number: '06',
    title: 'Full-Stack Development',
    description:
      'Responsive websites, backend APIs, databases, integrations, and scalable cloud applications.',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">B</span>
          <span>BlockForge<span className="brand-dot">.</span></span>
        </a>

        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Start a project <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              BLOCKCHAIN ENGINEERING STUDIO
            </div>

            <h1>
              Build what's
              <br />
              <span>next.</span> On-chain.
            </h1>

            <p className="hero-description">
              We build blockchain infrastructure, smart contracts, and Web3
              products that turn ambitious ideas into working technology.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#contact">
                Let's build together <span>↗</span>
              </a>
              <a className="button-secondary" href="#work">
                Explore our work <span>↓</span>
              </a>
            </div>

            <div className="hero-note">
              <span>●</span> Available for selected projects worldwide
            </div>
          </div>

          <div className="visual-card">
            <div className="visual-top">
              <span>NETWORK / 001</span>
              <span className="live-indicator">● LIVE CONCEPT</span>
            </div>

            <div className="orbital">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="core">
                <span>B</span>
              </div>
              <span className="node node-one" />
              <span className="node node-two" />
              <span className="node node-three" />
              <span className="node node-four" />
            </div>

            <div className="visual-bottom">
              <div>
                <span className="mini-label">FOCUS</span>
                <strong>Decentralized systems</strong>
              </div>
              <span className="visual-arrow">↗</span>
            </div>
          </div>

          <div className="hero-index">01 — ENGINEERING THE DECENTRALIZED FUTURE</div>
        </section>

        <section className="trust-strip">
          <span>BUILT WITH MODERN TECHNOLOGY</span>
          <div>Solidity</div>
          <div>Rust</div>
          <div>React</div>
          <div>Substrate</div>
          <div>Web3</div>
        </section>

        <section className="section-wrap services-section" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow">WHAT WE DO</div>
              <h2>
                Engineering ideas
                <br />
                into <span>reality.</span>
              </h2>
            </div>
            <p>
              From protocol-level engineering to polished user experiences,
              we help teams build and scale blockchain products.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="card-top">
                  <span>{service.number} / SERVICE</span>
                  <span className="card-icon">↗</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact">Discuss your project <span>→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <div className="eyebrow">SELECTED EXPERIENCE</div>
                <h2>
                  Work that
                  <br />
                  <span>moves the chain.</span>
                </h2>
              </div>
              <p>
                A selection of blockchain projects our team has contributed
                to across development, integration, and explorer interfaces.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-art">
                    <span className="project-number">{project.number}</span>
                    <div className="project-symbol">
                      {project.name === 'ShidoScan'
                        ? 'S'
                        : project.name === 'BlockDAG'
                        ? 'B'
                        : project.name === 'Qubetics'
                        ? 'Q'
                        : 'D'}
                    </div>
                    <span className="project-open">↗</span>
                  </div>
                  <div className="project-info">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      Visit project <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="portfolio-disclaimer">
              These projects reflect team contributions and do not imply
              sole ownership or endorsement by the respective project teams.
            </p>
          </div>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="about-art">
            <div className="about-grid" />
            <div className="about-center">
              <span>B</span>
              <small>BUILD / DEPLOY / SCALE</small>
            </div>
            <span className="about-tag">WEB3 × ENGINEERING</span>
          </div>

          <div className="about-copy">
            <div className="eyebrow">WHO WE ARE</div>
            <h2>
              Technical depth.
              <br />
              <span>Real execution.</span>
            </h2>
            <p>
              BlockForge is a blockchain and software development team
              focused on building practical, scalable digital products.
              We combine engineering expertise with a delivery-first
              approach to help startups and businesses move forward.
            </p>
            <p>
              We work with clients across India, the United States, Europe,
              the UAE, Saudi Arabia, and other international markets.
            </p>
            <a className="text-link" href="#contact">
              Tell us what you're building <span>↗</span>
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="eyebrow">HAVE A PROJECT IN MIND?</div>
            <h2>
              Let's build
              <br />
              something <span>meaningful.</span>
            </h2>
            <p>
              Tell us about your idea, technical requirements, or development
              goals. Let's explore how we can work together.
            </p>
            <a
              className="button-primary"
              href="mailto:hello@blockforge.dev?subject=BlockForge%20Project%20Enquiry"
            >
              Discuss a project <span>↗</span>
            </a>
            <div className="contact-caption">
              Replace this sample email with your preferred business email
              before launching.
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">B</span>
          <span>BlockForge<span className="brand-dot">.</span></span>
        </a>
        <p>Blockchain engineering for what's next.</p>
        <a href="#home">Back to top ↑</a>
        <span className="copyright">© {new Date().getFullYear()} BlockForge</span>
      </footer>
    </div>
  );
}

export default App;
