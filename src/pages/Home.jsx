import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Activity, Music, Heart, Users, Star } from 'lucide-react';
import './Home.css';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  { id: 1, title: 'Dance Classes', icon: <Music size={40} />, desc: 'Professional training in Bollywood, Hip-Hop, Contemporary & more for all ages.', color: '#ff2a4b', delay: 0.1 },
  { id: 2, title: 'Yoga Sessions', icon: <Activity size={40} />, desc: 'Focus on flexibility, strength, and mindfulness for overall wellness.', color: '#00f0ff', delay: 0.2 },
  { id: 3, title: 'Zumba Fitness', icon: <Heart size={40} />, desc: 'High-energy fitness combining dance and cardio to burn calories and have fun.', color: '#39ff14', delay: 0.3 },
  { id: 4, title: 'Wedding Dance', icon: <Users size={40} />, desc: 'Personalized choreography for your special day — make it truly memorable.', color: '#ffcf00', delay: 0.4 },
];

const videosData = [
  { id: 1, title: 'Hip Hop Routine', thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'Yoga Flow', thumbnail: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'Zumba Party', thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop' },
];

// Generates floating particle positions
const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 8 + 3,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 4,
}));

const Home = () => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Animate floating particles
    gsap.utils.toArray('.particle').forEach((particle) => {
      gsap.to(particle, {
        y: `${Math.random() * -80 - 30}px`,
        x: `${(Math.random() - 0.5) * 60}px`,
        opacity: Math.random() * 0.6 + 0.2,
        duration: particle.dataset.duration || 5,
        delay: particle.dataset.delay || 0,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Hero title word-by-word reveal
    gsap.fromTo(
      '.hero-word',
      { y: 120, opacity: 0, rotateX: -90 },
      { y: 0, opacity: 1, rotateX: 0, duration: 0.9, stagger: 0.15, ease: 'power4.out', delay: 0.3 }
    );
    gsap.fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1.2 });
    gsap.fromTo('.hero-cta', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, delay: 1.5, ease: 'back.out(1.7)' });
    gsap.fromTo('.hero-stats', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1.8, stagger: 0.15 });

    // About Section
    gsap.fromTo('.about-img-box', { x: -80, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.2,
      scrollTrigger: { trigger: '.about-section', start: 'top 70%' }
    });
    gsap.fromTo('.about-text-content', { x: 80, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.2,
      scrollTrigger: { trigger: '.about-section', start: 'top 70%' }
    });

    // Services
    gsap.fromTo('.service-card', { y: 60, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, stagger: 0.18,
      scrollTrigger: { trigger: '.services-section', start: 'top 75%' }
    });

    // Videos
    gsap.fromTo('.video-card', { scale: 0.88, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 0.65, stagger: 0.2,
      scrollTrigger: { trigger: '.videos-section', start: 'top 80%' }
    });

    // Section titles
    gsap.utils.toArray('.animate-title').forEach((title) => {
      gsap.fromTo(title, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: title, start: 'top 85%' }
      });
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <div className="home-page">
      {/* ── HERO ── */}
      <section className="hero-section" ref={heroRef} id="home">
        {/* Animated gradient orbs */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>

        {/* Floating particles */}
        <div className="particles-layer" aria-hidden="true">
          {particles.map((p) => (
            <div
              key={p.id}
              className="particle"
              data-duration={p.duration}
              data-delay={p.delay}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div className="grid-overlay" aria-hidden="true"></div>

        <div className="hero-content container">
          <div className="hero-badge">
            <Star size={14} fill="currentColor" /> Prastuti Dance Studio
          </div>

          <h1 className="hero-title">
            <span className="hero-word-wrap"><span className="hero-word">Where</span></span>
            {' '}
            <span className="hero-word-wrap"><span className="hero-word text-gradient">Passion</span></span>
            <br />
            <span className="hero-word-wrap font-script"><span className="hero-word text-gradient-accent">Meets</span></span>
            {' '}
            <span className="hero-word-wrap"><span className="hero-word">Performance</span></span>
          </h1>

          <p className="hero-subtitle">
            Step into a world of rhythm, energy, and expression at Prastuti Dance Studio.
            <br />
            Dance • Yoga • Zumba • Wedding Dance
          </p>

          <div className="hero-cta">
            <Link to="/admission" className="btn-primary">Join Now — ₹1500</Link>
            <Link to="/about" className="btn-ghost">Explore Studio</Link>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat hero-stats">
              <span className="stat-num">10+</span>
              <span className="stat-label">Years Excellence</span>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat hero-stats">
              <span className="stat-num">500+</span>
              <span className="stat-label">Happy Students</span>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat hero-stats">
              <span className="stat-num">4</span>
              <span className="stat-label">Disciplines</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section section-padding" id="about">
        <div className="container about-grid">
          <div className="about-img-box">
            <div className="img-frame">
              <img
                src="https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=800&auto=format&fit=crop"
                alt="Prastuti Studio"
              />
              <div className="img-glow"></div>
            </div>
            <div className="experience-badge">
              <span className="badge-num">10+</span>
              <span className="badge-text">Years of Excellence</span>
            </div>
          </div>

          <div className="about-text-content">
            <h2 className="section-title animate-title" style={{ textAlign: 'left', left: 0, transform: 'none' }}>
              About <span className="font-script text-gradient-accent">Prastuti</span>
            </h2>
            <p className="lead-text">
              At Prastuti Dance Studio, we believe dance and movement are powerful forms of self-expression.
            </p>
            <p className="body-text">
              Our studio offers a vibrant, positive, and professional environment where students of all ages can explore their passion and build confidence. From energetic dance sessions to calming yoga practices, we are dedicated to nurturing both creativity and wellness.
            </p>
            <ul className="feature-list">
              {['Professional Instructors', 'Spacious Modern Studio', 'All Age Groups Welcome', 'Flexible Batch Timings'].map((f) => (
                <li key={f}><span className="check-icon">✦</span> {f}</li>
              ))}
            </ul>
            <Link to="/admission" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>Enroll Today</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section section-padding" id="services">
        <div className="container">
          <h2 className="section-title animate-title">Our <span className="text-gradient">Disciplines</span></h2>
          <p className="section-sub animate-title">Find the perfect class and move to your own rhythm</p>
          <div className="services-grid">
            {servicesData.map((s) => (
              <div key={s.id} className="service-card glass-card" style={{ '--card-color': s.color }}>
                <div className="icon-wrapper" style={{ color: s.color }}>
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="card-glow" style={{ background: s.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEOS ── */}
      <section className="videos-section section-padding" id="videos">
        <div className="container">
          <h2 className="section-title animate-title">Studio <span className="font-script text-gradient-accent">Highlights</span></h2>
          <p className="section-sub animate-title">A glimpse into our vibrant studio world</p>
          <div className="videos-grid">
            {videosData.map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay">
                    <div className="play-btn">
                      <Play size={28} color="#fff" fill="#fff" />
                    </div>
                  </div>
                </div>
                <div className="video-label">
                  <h4>{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/admission" className="btn-primary">Ready to Move? Enroll Now →</Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer-section">
        <div className="footer-glow"></div>
        <div className="container footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <span className="font-script">Prastuti</span><span className="dot-red">.</span>
            </div>
            <p className="footer-tagline">Where Passion Meets Performance.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Classes</a></li>
              <li><a href="#videos">Studio Videos</a></li>
              <li><Link to="/admission">Join Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>📞 8882867685, 9560775432</p>
            <p>📍 C-2/160, Block C, Yamuna Vihar, Delhi - 110053</p>
            <p>🕐 Mon – Sat: 7 a.m. to 9 p.m.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Prastuti Dance Studio. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
