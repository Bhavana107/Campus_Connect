import { useEffect, useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import AuthModule from './src/components/AuthModule.jsx';
import StudentPortal from './src/components/StudentPortal.jsx';

const slides = [
  {
    title: 'Modern University Infrastructure',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Collaborative Learning & Hackathons',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Real-Time Academic Management',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
  },
];

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo-group">
          <div className="brand-badge">RV</div>
          <div>
            <span className="university-name">RV UNIVERSITY<sup>®</sup></span>
            <p className="sub-dept">School of Computer Science &amp; Engineering</p>
          </div>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="btn-secondary">Login</Link>
          <Link to="/register" className="btn-primary">Register</Link>
        </div>
      </header>

      <section className="hero-banner">
        <div className="hero-content">
          <span className="module-tag">CS3301 - FULL STACK DEVELOPMENT</span>
          <h1>CAMPUS CONNECT PORTAL</h1>
          <p className="subtitle">
            Connecting Students, Faculty, and Administrators on a Single Digital Platform.
          </p>

          <div className="hero-cta-group">
            <a href="#roles" className="btn-hero-primary">Explore User Portals ➔</a>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Campus Life &amp; Portal Highlights</h2>
        <p className="section-subtitle">
          Experience academic management simplified through modern technology.
        </p>

        <div className="carousel-wrapper">
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div className="slide" key={slide.title}>
                  <img src={slide.image} alt={slide.title} />
                  <div className="slide-caption">{slide.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="carousel-dots" aria-label="Slide indicators">
          {slides.map((slide, index) => (
            <span
              key={slide.title}
              className={`dot ${index === activeIndex ? 'active-dot' : ''}`}
              data-index={index}
            />
          ))}
        </div>
      </section>

      <section id="roles" className="section-container bg-light">
        <h2 className="section-title">Choose Your Portal View</h2>

        <div className="roles-grid">
          <article className="role-card student-border">
            <div className="role-icon">👨‍🎓</div>
            <h3>Student Portal</h3>
            <ul className="feature-bullets">
              <li>• View Notices &amp; Events</li>
              <li>• Submit Assignments</li>
              <li>• Track Attendance</li>
              <li>• Update Profile</li>
            </ul>
            <Link to="/student/notices" className="btn-portal student-bg">
              Access Student View
            </Link>
          </article>

          <article className="role-card faculty-border">
            <div className="role-icon">👨‍🏫</div>
            <h3>Faculty Portal</h3>
            <ul className="feature-bullets">
              <li>• Post Notices &amp; Events</li>
              <li>• Create Assignments</li>
              <li>• Mark Attendance</li>
              <li>• View Submissions</li>
            </ul>
            <button className="btn-portal faculty-bg" type="button">
              Access Faculty View
            </button>
          </article>

          <article className="role-card admin-border">
            <div className="role-icon">🛡️</div>
            <h3>Admin Portal</h3>
            <ul className="feature-bullets">
              <li>• Manage Users</li>
              <li>• Manage Notices &amp; Events</li>
              <li>• View System Reports</li>
              <li>• System Settings</li>
            </ul>
            <button className="btn-portal admin-bg" type="button">
              Access Admin View
            </button>
          </article>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthModule initialMode="login" />} />
      <Route path="/register" element={<AuthModule initialMode="register" />} />
      <Route
        path="/student/*"
        element={<StudentPortal onBackToHome={() => navigate('/')} />}
      />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}