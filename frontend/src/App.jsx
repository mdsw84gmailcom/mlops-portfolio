import "./App.css";
import { useState } from "react";

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! Ask me about Marian's projects, technical skills or LIA availability.",
    },
  ]);

  const handleChatSubmit = async (event) => {
    event.preventDefault();

    if (!message.trim()) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMessage },
    ]);

    setMessage("");

    try {
      const response = await fetch("https://mlops-portfolio-i8vq.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.answer },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <main>
      <nav className="navbar">
  <a href="#" className="navLogo">MDS</a>

  <button
    className="menuButton"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation menu"
  >
    {menuOpen ? "×" : "☰"}
  </button>

  <div className={`navLinks ${menuOpen ? "open" : ""}`}>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </div>
</nav>
      <section className="hero">
  <div className="heroContent">
    <p className="eyebrow">MLOPS ENGINEERING · STOCKHOLM</p>

    <h1 style={{ whiteSpace: "nowrap" }}>
      Marian
    <span> De Silva</span>
  </h1>

    <h2>MLOps Engineer in training</h2>

    <p className="intro">
      Building practical AI and software solutions with a focus on
      real-world problems, reliable systems and thoughtful execution.
    </p>

    <div className="heroButtons">
      <a href="#projects">View my projects</a>

      <a href="/Marian_De_Silva_CV_MLOps.pdf" download>
        Download CV
      </a>

      <a href="#contact" className="secondary">
        Contact me
      </a>
    </div>
  </div>


  <div className="heroVisual" aria-hidden="true">
  </div>
    
  </section>

  <div className="lionessSection">
  <img
    src="/lioness-hero.png"
    alt=""
    className="heroLioness"
  />

  <div className="heroNote">
      <span>Persistent</span>
      <span>Precise</span>
      <span>Purpose-driven</span>
  </div>
</div>

      <section className="section" id="about">
        <div className="sectionLabel">About</div>

        <div className="aboutGrid">
          <div>
            <h3>From business operations to MLOps and AI</h3>
          </div>

          <div className="aboutText">
            <p>
              I am currently studying MLOps Engineering at Nackademin in
              Stockholm, with a focus on building, deploying and maintaining
              practical AI and machine learning solutions.
            </p>

            <p>
              Before moving into tech, I gained extensive experience in
              business operations, including running my own company and working
              with finance, payroll and system responsibility.
            </p>

            <p>
              That background has given me a strong understanding of how
              technology, processes and real business needs connect. I am
              detail-oriented, persistent and motivated by solving problems
              properly rather than just making them work temporarily.
            </p>
          </div>
        </div>
      </section>

      <section className="section opportunities">
        <div className="sectionLabel">Open to opportunities</div>

        <div className="opportunityGrid">
          <div className="opportunityCard">
            <span>LIA 1</span>
            <strong>8 Feb – 21 May 2027</strong>
          </div>

          <div className="opportunityCard">
            <span>Summer</span>
            <strong>Summer 2027</strong>
          </div>

          <div className="opportunityCard">
            <span>LIA 2</span>
            <strong>23 Aug – 31 Dec 2027</strong>
          </div>
        </div>
      </section>
      <section className="section" id="projects">
  <div className="sectionLabel">Featured Projects</div>

  <div className="projectsGrid">
    <article className="projectCard">
      <div className="projectMeta">Machine Learning · FastAPI · Docker</div>
      <h3>M3 Model API</h3>
      <p>
        Group project focused on deploying a machine learning model through a
        FastAPI service with Docker support and a production-oriented project
        structure.
      </p>

      <div className="projectTags">
        <span>Python</span>
        <span>FastAPI</span>
        <span>PyTorch</span>
        <span>Docker</span>
        <span>uv</span>
      </div>

      <a
        href="https://github.com/monaabdi9085-dev/M3-model-api-Marian-Mona"
        target="_blank"
        rel="noreferrer"
      >
        View repository →
      </a>
    </article>

    <article className="projectCard">
      <div className="projectMeta">Fullstack ML Application</div>
      <h3>Taxi Prediction</h3>
      <p>
        A fullstack machine learning application combining a FastAPI backend
        with a Streamlit frontend.
      </p>

      <div className="projectTags">
        <span>Python</span>
        <span>FastAPI</span>
        <span>Streamlit</span>
        <span>Machine Learning</span>
      </div>

      <a
        href="https://github.com/mdsw84gmailcom/taxi_prediction_fullstack_marian"
        target="_blank"
        rel="noreferrer"
      >
        View repository →
      </a>
    </article>

    <article className="projectCard">
  <div className="projectMeta">Individual project · Real business use case</div>
  <h3>E-commerce Product Importer</h3>
  <p>
    A reusable data pipeline that transforms supplier product data into a
    validated Shopify-ready catalog, normalizes product images and safely
    compares changes with a live Shopify store before synchronization.
  </p>

  <div className="projectTags">
    <span>Python</span>
    <span>Shopify API</span>
    <span>Pandas</span>
    <span>Data Engineering</span>
    <span>pytest</span>
  </div>

  <a
  href="https://github.com/mdsw84gmailcom/ecommerce-product-importer"
  target="_blank"
  rel="noreferrer"
>
  View repository →
</a>

</article>
    <article className="projectCard">
  <div className="projectMeta">Group Project · Edge Computing</div>
  <h3>InfraredFox Mini</h3>

  <p>
  An Edge Computing and IoT system using Raspberry Pi Pico 2 W, sensors
  and MQTT to collect and process real-time data, with TimescaleDB
  storage and Grafana monitoring.
</p>

  <div className="projectTags">
  <span>Edge Computing</span>
  <span>MQTT</span>
  <span>Raspberry Pi Pico 2 W</span>
  <span>TimescaleDB</span>
  <span>Grafana</span>
</div>

<a
  href="https://github.com/Aleex87/InfraredFoxMini"
  target="_blank"
  rel="noreferrer"
>
  View repository →
</a>

</article>
  </div>
</section>
<section className="section" id="building">
  <div className="sectionLabel">Currently Exploring</div>

  <div className="ideasGrid">
    <div className="idea">
      <span>01</span>
      <div>
        <h3>Smart Parking</h3>
        <p>
          Exploring how AI and data can simplify parking decisions,
          signage and price comparison.
        </p>
      </div>
    </div>

    <div className="idea">
      <span>02</span>
      <div>
        <h3>Ingredient Analysis</h3>
        <p>
          Exploring OCR and AI to turn complex ingredient lists into
          understandable information.
        </p>
      </div>
    </div>

    <div className="idea">
      <span>03</span>
      <div>
        <h3>Safety & Support</h3>
        <p>
          Exploring responsible technology for access to information,
          support and safer decision-making.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="section" id="skills">
  <div className="sectionLabel">Tech & Skills</div>

  <div className="skillsGrid">
    <div className="skillGroup">
      <h3>Development</h3>
      <div className="skillTags">
        <span>Python</span>
        <span>FastAPI</span>
        <span>Git</span>
        <span>Linux</span>
        <span>uv</span>
      </div>
    </div>

    <div className="skillGroup">
      <h3>Data & Databases</h3>
      <div className="skillTags">
        <span>SQL</span>
        <span>DuckDB</span>
        <span>PostgreSQL</span>
        <span>Vector Databases</span>
      </div>
    </div>

    <div className="skillGroup">
      <h3>MLOps & Cloud</h3>
      <div className="skillTags">
        <span>Docker</span>
        <span>Azure</span>
        <span>AWS</span>
        <span>GitHub Actions</span>
        <span>CI/CD</span>
        <span>MLflow</span>
      </div>
    </div>

    <div className="skillGroup">
      <h3>AI & Machine Learning</h3>
      <div className="skillTags">
        <span>Machine Learning</span>
        <span>PyTorch</span>
        <span>RAG</span>
        <span>LLMs</span>
      </div>
    </div>

    <div className="skillGroup">
      <h3>Edge & IoT</h3>
      <div className="skillTags">
        <span>Raspberry Pi Pico 2 W</span>
        <span>MicroPython</span>
        <span>MQTT</span>
        <span>Edge Computing</span>
        <span>IoT</span>
      </div>
    </div>
  </div>
</section>
<section className="section" id="education">
  <div className="sectionLabel">Education</div>

  <div className="educationGrid">
    <div>
      <h3>MLOps Engineer</h3>
      <p className="educationSchool">Nackademin · Stockholm</p>
      <p className="educationPeriod">2025 – 2027</p>
    </div>

    <div className="educationText">
      <p>
        A vocational higher education program focused on the full machine
        learning lifecycle — from development and data handling to deployment,
        cloud platforms, CI/CD, monitoring, security and edge computing.
      </p>

      <div className="educationHighlights">
        <span>Machine Learning</span>
        <span>MLOps</span>
        <span>Cloud Platforms</span>
        <span>Databases</span>
        <span>Linux</span>
        <span>Edge Computing</span>
      </div>
    </div>
  </div>
</section>
<section className="section contact" id="contact">
  <div className="sectionLabel">Let's connect</div>

  <div className="contactGrid">
    <div>
      <h3>Interested in working together?</h3>
      <p>
        I'm currently looking for LIA opportunities and summer work within
        MLOps, AI, cloud and software development.
      </p>
    </div>

    <div className="contactLinks">
      <a
        href="https://github.com/mdsw84gmailcom"
        target="_blank"
        rel="noreferrer"
      >
        GitHub →
      </a>

      <a href="mailto:mdsw84@gmail.com">
        Email →
      </a>

      <a
        href="https://www.linkedin.com/in/marian-de-silva-28a1b4388"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn →
      </a>
    </div>
  </div>

  <footer>
    <span>Marian De Silva</span>
    <span>MLOps Engineering · Stockholm</span>
  </footer>
</section>
<div className="chatWrapper">
  {chatOpen && (
    <div className="chatPanel">
      <div className="chatHeader">
        <div>
          <strong>Ask Marian AI</strong>
          <span>Projects · Skills · LIA</span>
        </div>

        <button onClick={() => setChatOpen(false)} aria-label="Close chat">
          ×
        </button>
      </div>

      <div className="chatBody">
        {messages.map((item, index) => (
          <div
            key={index}
            className={`chatMessage ${item.role}`}
          >
            {item.text}
          </div>
        ))}
      </div>

      <form className="chatInput" onSubmit={handleChatSubmit}>
        <input
          type="text"
          placeholder="Ask about Marian..."
          aria-label="Ask about Marian"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">↑</button>
      </form>
    </div>
  )}

  <button
    className="chatButton"
    onClick={() => setChatOpen(!chatOpen)}
    aria-label="Open Ask Marian AI"
  >
    <span>Ask Marian AI</span>
    <strong>✦</strong>
  </button>
</div>
    </main>
  );
}

export default App;
