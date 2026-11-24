import {
  MessageIcon,
  ExternalLink,
  Plus,
  Sparkles,
  Video,
  Radio,
  Phone,
} from 'elite-icons-react';

export function App() {
  return (
    <div className="showcase-page">
      <header className="topbar">
        <div className="brand">
          <Sparkles size={20} color="#ccff00" />
          <h1>
            ELITE<span>ICONS</span> / SHOWCASE
          </h1>
        </div>
        <nav className="nav">
          <a href="https://eliteicons.github.io">GALLERY ↗</a>
          <a href="https://EliteIcons.github.io/Guide/">GUIDE ↗</a>
          <a href="https://eliteicons.github.io/Icon-Studio/">STUDIO ↗</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <span className="pill">BUILT WITH ELITE-ICONS-REACT</span>
          <h2>
            PROUDLY <span className="accent">USED BY</span>
          </h2>
          <p>
            Apps, websites, and developer tools powered by EliteIcons open-source SVGs and React components.
          </p>
        </section>

        <section className="projects-grid">
          {/* Project 1: What'sOn */}
          <article className="project-card featured">
            <div className="card-top">
              <div className="app-icon">
                <MessageIcon size={32} color="#ccff00" strokeWidth={2} />
              </div>
              <span className="tag">MESSAGING / P2P</span>
            </div>

            <h3>What&apos;sOn</h3>
            <p>
              P2P Ocean Messenger featuring instant 1-on-1 direct messages, Waver group rooms, and live audio &amp; video calls.
            </p>

            <div className="used-icons-strip">
              <span>ICONS USED:</span>
              <div className="mini-icons">
                <MessageIcon size={16} color="#ccff00" />
                <Video size={16} color="#ccff00" />
               <Phone size={16} color="#ccff00"  />
              </div>
            </div>

            <a
              href="https://shahadah-studs.github.io/Whats-on/"
              target="_blank"
              rel="noopener noreferrer"
              className="visit-btn"
            >
              LAUNCH WHAT&apos;SON <ExternalLink size={15} />
            </a>
          </article>

          {/* More Coming Soon / Submit Your Website Card */}
          <article className="project-card coming-soon">
            <div className="soon-icon">
              <Plus size={32} color="#ccff00" strokeWidth={2} />
            </div>

            <span className="soon-badge">OPEN SLOT / #002</span>
            <h3>MORE COMING SOON...</h3>
            <p>
              Using <strong>EliteIcons</strong> or <code>elite-icons-react</code> in your website or app? Your project could be featured right here!
            </p>

            <a
              href="https://github.com/EliteIcons/EliteIcons.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="submit-btn"
            >
              SUBMIT YOUR WEBSITE ↗
            </a>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
