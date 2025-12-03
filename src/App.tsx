import './index.css'

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="nav-logo">Porto.</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-left">
            <p className="hero-kicker">Portfolio</p>
            <h1 className="hero-title">
              Naufal Oktora Siswanto <span>Portfolio</span>
            </h1>
            <p className="hero-subtitle">
              Junior Full‑stack Developer with strong Laravel/PHP and React
              experience. Terbiasa mengerjakan fitur end‑to‑end dari konsep,
              backend API, sampai UI yang rapi dan siap deploy.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact Me
              </a>
            </div>
            <div className="hero-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>UI / UX</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-avatar" />
              <div className="hero-card-body">
                <p className="hero-name">Naufal Oktora Siswanto</p>
                <p className="hero-role">Junior Full‑stack Developer</p>
                <p className="hero-location">
                  Sidoarjo · PERUM MCA J 1/11 Candi Sumorame
                </p>
              </div>
            </div>
            <div className="hero-stat-grid">
              <div className="hero-stat">
                <span className="hero-stat-number">5+</span>
                <span className="hero-stat-label">Real Projects & Modules</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">2+</span>
                <span className="hero-stat-label">
                  Years of Web & Mobile Dev
                </span>  
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">100%</span>
                <span className="hero-stat-label">Focus on Reliability</span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="section-header">
            <h2>About</h2>
            <p>
              Saya adalah mahasiswa Ilmu Komputer BINUS University (5–6
              semester) yang fokus di Full‑stack Web Development. Terbiasa
              mengelola struktur data kompleks, relasi database, REST API,
              validasi, role‑based authorization, sampai deployment di shared
              hosting/cPanel.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <h3>Backend & Database</h3>
              <p>
                Laravel/PHP, SQL, REST API, background jobs & scheduler, log
                management, cache optimization, dan file/image handling yang
                aman.
              </p>
            </div>
            <div className="about-card">
              <h3>Frontend & Mobile</h3>
              <p>
                React, TypeScript, modern UI, Android SDK, Flutter dengan pola
                BLoC, fokus ke performa dan pengalaman pengguna.
              </p>
            </div>
            <div className="about-card">
              <h3>Workflow</h3>
              <p>
                Git, teamwork, clean architecture, dokumentasi deployment, dan
                praktik terbaik pengelolaan environment produksi.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <div className="section-header">
            <h2>Projects</h2>
            <p>
              Beberapa proyek nyata dan modul yang saya kerjakan sebagai
              Full‑stack Developer dan mahasiswa.
            </p>
          </div>
          <div className="projects-marquee">
            <div className="projects-track">
              {/* Satu set project */}
              <article className="project-card">
                <h3>EtnoGring – Village Tourism CMS (UNESA)</h3>
                <p>
                  Platform jaringan & CMS untuk administrasi wisata desa. Saya
                  membangun fitur galeri budaya, dokumentasi tradisi, dan dua
                  dashboard interaktif untuk pengelolaan konten & dokumen
                  penting.
                </p>
                <div className="project-tags">
                  <span>Laravel</span>
                  <span>CMS</span>
                  <span>Dashboard</span>
                </div>
              </article>
              <article className="project-card">
                <h3>Mifta Motorsport – Service Booking Module</h3>
                <p>
                  Modul booking servis end‑to‑end dengan validasi time‑slot,
                  pencegahan double booking, scheduler auto‑complete, helper
                  gambar yang fleksibel, serta strategi cache & log rotation
                  untuk performa optimal.
                </p>
                <div className="project-tags">
                  <span>Laravel</span>
                  <span>Scheduler</span>
                  <span>Caching</span>
                </div>
              </article>
              <article className="project-card">
                <h3>Android & Flutter Apps (BINUS)</h3>
                <p>
                  Pengembangan aplikasi mobile menggunakan Android SDK & Flutter
                  (BLoC). Fokus pada konfigurasi build, debugging dengan ADB,
                  state management yang rapi, dan optimasi memori agar aplikasi
                  stabil.
                </p>
                <div className="project-tags">
                  <span>Android SDK</span>
                  <span>Flutter</span>
                  <span>BLoC</span>
                </div>
              </article>

              {/* Duplikasi untuk efek loop halus */}
              <article className="project-card">
                <h3>Project 1</h3>
                <p>
                  Deskripsi singkat project. Tulis apa yang kamu kerjakan, tech
                  stack, dan hasilnya.
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>UI</span>
                </div>
              </article>
              <article className="project-card">
                <h3>Project 2</h3>
                <p>
                  Deskripsi singkat project lain. Bisa landing page, dashboard,
                  atau portfolio untuk orang lain.
                </p>
                <div className="project-tags">
                  <span>TypeScript</span>
                  <span>API</span>
                </div>
              </article>
              <article className="project-card">
                <h3>Project 3</h3>
                <p>
                  Satu lagi project yang kamu banggakan. Tambahkan link ke GitHub
                  atau demo kalau ada.
                </p>
                <div className="project-tags">
                  <span>Fullstack</span>
                  <span>Deployment</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section section-contact">
          <div className="section-header">
            <h2>Contact</h2>
            <p>
              Siap kerja sama atau butuh bantuan project? Kirim pesan ke email
              di bawah.
            </p>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Form dummy – ganti dengan integrasi email nanti 🙂')
            }}
          >
            <input
              type="text"
              placeholder="Nama kamu"
              className="input"
              required
            />
            <input
              type="email"
              placeholder="Email kamu"
              className="input"
              required
            />
            <textarea
              placeholder="Ceritakan sedikit tentang project atau pertanyaanmu..."
              className="textarea"
              rows={4}
              required
            />
            <button type="submit" className="btn btn-primary full">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
