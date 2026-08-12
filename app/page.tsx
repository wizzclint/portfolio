const caseStudies = [
  {
    num: "01",
    org: "Clacachi Technology Hub",
    role: "Product Designer",
    dates: "Apr 2026 — Present",
    summary:
      "Own end-to-end product design across a growing platform — user flows, high-fidelity UI, and the design system and handoff docs the dev team builds from.",
    tags: ["Design Systems", "Developer Handoff", "Mentorship"],
    // TODO: replace with your live Figma "Present" link
    figmaUrl: "https://figma.com/your-clacachi-project-link",
  },
  {
    num: "02",
    org: "Stridrsoft",
    role: "Product Designer, Mobile",
    dates: "Oct 2025 — Dec 2025",
    summary:
      "Designed and refined UI for a cross-platform Flutter app, running usability testing to iron out inconsistencies between iOS and Android.",
    tags: ["Mobile UI", "Usability Testing", "iOS & Android"],
    figmaUrl: "https://figma.com/your-stridrsoft-project-link",
  },
  {
    num: "03",
    org: "Aioniasoft",
    role: "Product Designer / UX Research",
    dates: "Jan 2024 — Jan 2025",
    summary:
      "Turned user feedback and product data into a prioritized redesign backlog, and built dashboards that made UX and quality metrics visible to stakeholders.",
    tags: ["UX Research", "Dashboards", "Data-Informed Design"],
    figmaUrl: "https://figma.com/your-aioniasoft-project-link",
  },
  {
    num: "04",
    org: "Surgetechnology",
    role: "UI/UX Designer",
    dates: "Jan 2023 — Aug 2023",
    summary:
      "Designed intuitive, accessible interfaces for web applications end to end — research, wireframes, visual design, and dev-ready specs.",
    tags: ["Web UI", "User Research", "Prototyping"],
    figmaUrl: "https://figma.com/your-surgetechnology-project-link",
  },
  {
    num: "05",
    org: "Soutech Ventures",
    role: "Product Designer",
    dates: "Oct 2021 — Dec 2022",
    summary:
      "Established the UI patterns and design standards used across multiple web builds, shortening the path from design to shipped product.",
    tags: ["Web Design", "UI Patterns", "Front-end Collaboration"],
    figmaUrl: "https://figma.com/your-soutechventures-project-link",
  },
];

export default function Home() {
  return (
    <>
      <div className="bg-field" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <main className="shell">
        {/* Signature chrome bar */}
        <div className="chrome">
          <div className="chrome-left">
            <div className="dots">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <span className="chrome-tab">clinton.design — product designer</span>
          </div>
          <div className="chrome-right">
            <span className="pulse-dot" />
            Available for fintech projects
          </div>
        </div>

        {/* Hero */}
        <section className="hero">
          <div className="eyebrow">PRODUCT DESIGNER · MOBILE &amp; WEB</div>
          <h1>
            I design the interfaces <span className="accent-text">fintech products</span> run on.
          </h1>
          <p className="lede">
            Ezeh Chukwuebuka Clinton — a product designer who takes mobile apps, admin
            dashboards, and landing pages from wireframe to a design system your engineers
            can actually build from.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://figma.com/your-portfolio-figma-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Figma work ↗
            </a>
            <a className="btn btn-ghost" href="mailto:wizzclint@gmail.com">
              Email me
            </a>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="k">Based in</div>
              <div className="v">Abuja, Nigeria</div>
            </div>
            <div className="hero-meta-item">
              <div className="k">Focus</div>
              <div className="v">Mobile apps · Dashboards · Design systems</div>
            </div>
            <div className="hero-meta-item">
              <div className="k">Contact</div>
              <div className="v">+234 81 0107 4533</div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section">
          <div className="section-head">
            <h2>About</h2>
            <span className="tag">01 / overview</span>
          </div>
          <div className="about-grid">
            <div>
              <p>
                I&apos;m a product designer with a background that runs through{" "}
                <strong>mobile UI, web dashboards, and UX research</strong> — plus enough
                dev-side exposure to know exactly what a clean handoff needs to look like.
              </p>
              <p>
                My process starts with the user problem, not the pixels: research and
                data first, then wireframes, then a visual system I can hand to engineering
                without a dozen follow-up questions.
              </p>
              <p>
                I&apos;m currently taking on new product design work, with a particular
                interest in <strong>fintech</strong> — mobile apps, admin dashboards, and
                the design systems that hold them together.
              </p>
            </div>
            <div>
              <div className="stat-card">
                <div className="num">5</div>
                <div className="label">Product &amp; design roles across mobile, web, and fintech-adjacent teams</div>
              </div>
              <div className="stat-card">
                <div className="num">02021—Present</div>
                <div className="label">Years of continuous product &amp; UI/UX design experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="section">
          <div className="section-head">
            <h2>Selected work</h2>
            <span className="tag">02 / case studies</span>
          </div>
          <p className="section-intro">
            Five roles, one thread: taking a product from a rough idea to an interface people
            can actually use — and that a dev team can actually build.
          </p>
          <div className="case-list">
            {caseStudies.map((c) => (
              <div className="case-item" key={c.num}>
                <div className="case-num">{c.num}</div>
                <div className="case-org">
                  <h3>{c.org}</h3>
                  <div className="role">{c.role}</div>
                  <div className="dates">{c.dates}</div>
                </div>
                <div className="case-body">
                  <p>{c.summary}</p>
                  <div className="tag-row">
                    {c.tags.map((t) => (
                      <span className="pill" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  className="case-link"
                  href={c.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View in Figma ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="section">
          <div className="section-head">
            <h2>Tools &amp; skills</h2>
            <span className="tag">03 / capabilities</span>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <span className="k-label">Design</span>
              <ul>
                <li>UI / UX &amp; product design</li>
                <li>Wireframing &amp; prototyping</li>
                <li>Design systems &amp; component libraries</li>
                <li>Developer handoff</li>
                <li>Mobile design (iOS &amp; Android)</li>
              </ul>
            </div>
            <div className="skill-card">
              <span className="k-label">Research &amp; QA</span>
              <ul>
                <li>User research</li>
                <li>Usability testing</li>
                <li>Data-informed design decisions</li>
                <li>QA &amp; design review</li>
              </ul>
            </div>
            <div className="skill-card">
              <span className="k-label">Collaboration</span>
              <ul>
                <li>Cross-functional / Agile teams</li>
                <li>Jira-based workflows</li>
                <li>Stakeholder communication</li>
                <li>Design mentorship</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section" style={{ marginBottom: 40 }}>
          <div className="contact-card">
            <h2>Let&apos;s design something people trust with their money.</h2>
            <p>
              Open to new product design work — mobile apps, dashboards, landing pages,
              and the design systems behind them.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:wizzclint@gmail.com">
                wizzclint@gmail.com
              </a>
              <a
                className="btn btn-ghost"
                href="https://figma.com/your-portfolio-figma-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Figma ↗
              </a>
            </div>
            <div className="contact-links">
              <span>+234 81 0107 4533</span>
              <span>Abuja, Nigeria</span>
            </div>
          </div>
        </section>

        <footer>Ezeh Chukwuebuka Clinton — Product Designer · Built with Next.js</footer>
      </main>
    </>
  );
}
