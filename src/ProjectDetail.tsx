import { useParams, Link } from 'react-router-dom'
import './index.css'

const projects = [
  {
    id: 'etnogring',
    title: 'EtnoGring – Village Tourism CMS (UNESA)',
    description: 'Platform jaringan & CMS untuk administrasi wisata desa. Saya membangun fitur galeri budaya, dokumentasi tradisi, dan dua dashboard interaktif untuk pengelolaan konten & dokumen penting.',
    tags: ['Laravel', 'CMS', 'Dashboard'],
    fullDescription: 'Platform jaringan & CMS untuk administrasi wisata desa. Saya membangun fitur galeri budaya, dokumentasi tradisi, dan dua dashboard interaktif untuk pengelolaan konten & dokumen penting. Platform ini memungkinkan pengelola wisata desa untuk mengelola konten budaya, dokumentasi tradisi, dan berbagai dokumen penting dengan mudah melalui dashboard yang intuitif.'
  },
  {
    id: 'mifta-motorsport',
    title: 'Mifta Motorsport – Service Booking Module',
    description: 'Modul booking servis end‑to‑end dengan validasi time‑slot, pencegahan double booking, scheduler auto‑complete, helper gambar yang fleksibel, serta strategi cache & log rotation untuk performa optimal.',
    tags: ['Laravel', 'Scheduler', 'Caching'],
    fullDescription: 'Modul booking servis end‑to‑end dengan validasi time‑slot, pencegahan double booking, scheduler auto‑complete, helper gambar yang fleksibel, serta strategi cache & log rotation untuk performa optimal. Sistem ini memastikan tidak ada double booking, mengelola jadwal secara otomatis, dan mengoptimalkan performa dengan caching yang efektif.'
  },
  {
    id: 'android-flutter',
    title: 'Android & Flutter Apps (BINUS)',
    description: 'Pengembangan aplikasi mobile menggunakan Android SDK & Flutter (BLoC). Fokus pada konfigurasi build, debugging dengan ADB, state management yang rapi, dan optimasi memori agar aplikasi stabil.',
    tags: ['Android SDK', 'Flutter', 'BLoC'],
    fullDescription: 'Pengembangan aplikasi mobile menggunakan Android SDK & Flutter (BLoC). Fokus pada konfigurasi build, debugging dengan ADB, state management yang rapi, dan optimasi memori agar aplikasi stabil. Aplikasi ini dikembangkan dengan arsitektur yang bersih menggunakan BLoC pattern untuk state management yang efisien.'
  },
  {
    id: 'project-1',
    title: 'Project 1',
    description: 'Deskripsi singkat project. Tulis apa yang kamu kerjakan, tech stack, dan hasilnya.',
    tags: ['React', 'UI'],
    fullDescription: 'Deskripsi lengkap project 1. Tulis apa yang kamu kerjakan, tech stack yang digunakan, dan hasil yang dicapai. Jelaskan juga tantangan yang dihadapi dan solusi yang diterapkan.'
  },
  {
    id: 'project-2',
    title: 'Project 2',
    description: 'Deskripsi singkat project lain. Bisa landing page, dashboard, atau portfolio untuk orang lain.',
    tags: ['TypeScript', 'API'],
    fullDescription: 'Deskripsi lengkap project 2. Bisa landing page, dashboard, atau portfolio untuk orang lain. Jelaskan fitur-fitur utama, teknologi yang digunakan, dan hasil yang dicapai.'
  },
  {
    id: 'project-3',
    title: 'Project 3',
    description: 'Satu lagi project yang kamu banggakan. Tambahkan link ke GitHub atau demo kalau ada.',
    tags: ['Fullstack', 'Deployment'],
    fullDescription: 'Deskripsi lengkap project 3. Satu lagi project yang kamu banggakan. Tambahkan link ke GitHub atau demo kalau ada. Jelaskan detail implementasi, teknologi yang digunakan, dan hasil akhir project.'
  }
]

function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="page">
        <div className="section">
          <h2>Project tidak ditemukan</h2>
          <Link to="/" className="btn btn-primary">
            Kembali ke Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <header className="nav">
        <Link to="/" className="nav-logo">Porto.</Link>
        <nav className="nav-links">
          <Link to="/#about">About</Link>
          <Link to="/#projects">Projects</Link>
        </nav>
      </header>

      <main>
        <section className="section">
          <Link to="/" className="btn btn-ghost" style={{ marginBottom: '20px' }}>
            ← Kembali
          </Link>
          <div className="section-header">
            <h2>{project.title}</h2>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {project.fullDescription}
            </p>
          </div>
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default ProjectDetail

