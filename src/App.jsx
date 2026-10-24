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

            <div className="orbital orbital-3d">
  <div className="orbit orbit-one" />
  <div className="orbit orbit-two" />
  <div className="orbit orbit-three" />

  <div className="core core-3d">
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
          <div className="tech-card">
  <img src="https://cdn.simpleicons.org/solidity/white" alt="Solidity" />
  <span>Solidity</span>
</div>
<div className="tech-card">
  <img src="https://cdn.simpleicons.org/rust/white" alt="Rust" />
  <span>Rust</span>
</div>
<div className="tech-card">
  <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" />
  <span>React</span>
</div>
<div className="tech-card">
  <img src="https://cdn.simpleicons.org/polkadot/E6007A" alt="Substrate" />
  <span>Substrate</span>
</div>
<div className="tech-card">
  <img src="https://cdn.simpleicons.org/web3dotjs/white" alt="Web3" />
  <span>Web3</span>
</div>
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
            <button
  type="button"
  className="button-primary"
  onClick={() =>
    document.getElementById("inquiry-form").showModal()
  }
>
  Discuss a project <span>↗</span>
</button>
          </div>
        </section>
      </main>
      <dialog id="inquiry-form" className="inquiry-dialog">
  <div className="inquiry-header">
    <h2>Project Inquiry</h2>
    <button
      type="button"
      onClick={() =>
        document.getElementById("inquiry-form").close()
      }
      aria-label="Close form"
    >
      ✕
    </button>
  </div>

  <form
    action="https://formsubmit.co/versatilehimu@gmail.com"
    method="POST"
  >
    <input type="hidden" name="_subject" value="New BlockForge Project Inquiry" />
    <input type="hidden" name="_captcha" value="true" />
    <input type="hidden" name="_template" value="table" />

    <label>
      Full name *
      <input type="text" name="Full name" required />
    </label>

    <label>
      Email *
      <input type="email" name="Email" required />
    </label>

    <label>
      WhatsApp number *
      <input type="tel" name="WhatsApp number" required />
    </label>

    <label>
      Project type *
      <select name="Project type" required>
        <option value="">Select project type</option>
        <option>Blockchain / L1 / L2</option>
        <option>Smart contract development</option>
        <option>dApp / Web3 development</option>
        <option>Token development</option>
        <option>DeFi / DAO</option>
        <option>RWA tokenization</option>
        <option>Website / Software development</option>
        <option>Other</option>
      </select>
    </label>

    <label>
      Estimated budget (USD) *
      <select name="Estimated budget (USD)" required>
        <option value="">Select estimated budget</option>
        <option>Under $1,000</option>
        <option>$1,000–$2,500</option>
        <option>$2,500–$5,000</option>
        <option>$5,000–$10,000</option>
        <option>$10k+</option>
      </select>
    </label>

    <label>
      Project details *
      <textarea
        name="Project details"
        rows="5"
        required
        placeholder="Tell us about your project, requirements, and goals."
      />
    </label>

    <button type="submit" className="button-primary">
      Submit Inquiry ↗
    </button>
  </form>
</dialog>
      <a
href="https://wa.me/917068199604?text=Hello%20BlockForge%2C%20I%27m%20interested%20in%20your%20blockchain%20development%20services.%20I%27d%20like%20to%20discuss%20a%20project."
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with BlockForge on WhatsApp"
>
  <svg
  className="whatsapp-icon"
  viewBox="0 0 24 24"
  aria-hidden="true"
  fill="currentColor"
>
  <path d="M20.52 3.48A11.82 11.82 0 0 0 12.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.16 1.6 5.98L.05 24l6.25-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.43ZM12.07 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
</svg>
</a>
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
