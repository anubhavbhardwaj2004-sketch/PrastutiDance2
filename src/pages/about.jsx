import { Link } from 'react-router-dom';
import './about.css';
import prastuti from '../assets/WhatsApp Image 2026-03-28 at 3.38.01 PM.jpeg';
import rohit from '../assets/WhatsApp Image 2026-03-28 at 3.41.54 PM.jpeg';
import frontlogo from '../assets/Screenshot 2026-03-28 134130.png';
const valuesData = [
  { icon: '🎭', title: 'Passion First', desc: 'We ignite a love for dance and movement in every student who walks through our doors.', color: '#ff2a4b' },
  { icon: '🏆', title: 'Excellence', desc: 'Professional-grade training that prepares students for stage performances and competitions.', color: '#ffcf00' },
  { icon: '🤝', title: 'Community', desc: 'A warm, inclusive family where every dancer is celebrated and encouraged.', color: '#00f0ff' },
  { icon: '🌱', title: 'Growth', desc: 'We nurture confidence and creativity alongside technical dance skills.', color: '#39ff14' },
];

const instructorsData = [
  {
    name: 'Prastuti Ma\'am' + 'Akansha Ma\'am',
    role: 'Founder & Lead Instructor',
    img: prastuti,
  },
  {
    name: 'Prince Sir',
    role: 'Bollywood & Hip-Hop',
    img: rohit,
  },
  {
    name: 'Akansha Ma\'am',
    role: 'Yoga & Zumba',
    img: prastuti,
  },
];

const About = () => {
  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <div className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-content">
          <div className="about-hero-badge">✦ Our Story</div>
          <h1 className="about-hero-title">
            About <span className="text-gradient">Prastuti</span>
            <br />
            <span className="text-gradient-accent">Dance Studio</span>
          </h1>
          <p className="about-hero-sub">
            A decade of rhythm, passion, and transformation — shaping dancers, building confidence, and celebrating movement.
          </p>
        </div>
      </div>

      {/* ── ABOUT GRID ── */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-box">
              <div className="img-frame">
                <img className='frontlogo'
                  src={frontlogo}
                  alt="Prastuti Dance Studio"
                />
                <div className="img-glow" />
              </div>
              <div className="experience-badge">
                <span className="badge-num">10+</span>
                <span className="badge-text">Years of Excellence</span>
              </div>
            </div>

            <div className="about-text-content">
              <div className="section-badge">Who We Are</div>
              <h2 className="section-title">
                Where Passion <span className="text-gradient">Meets Performance</span>
              </h2>
              <p className="about-intro">
                At Prastuti Dance Studio, we believe dance and movement are powerful forms of self-expression. Our studio offers a vibrant, positive, and professional environment where students of all ages can explore their passion and build confidence.
              </p>
              <p className="about-desc">
                From energetic dance sessions to calming yoga practices, we are dedicated to nurturing both creativity and wellness. Join our community and discover the joy of movement.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Students</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Dance Forms</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Years Exp.</div>
                </div>
              </div>

              <Link to="/admission" className="btn-primary">Join a Class →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <div className="section-badge" style={{ margin: '0 auto 14px' }}>Our Values</div>
     <center><h2 className="section-title">What Drives <span className="text-gradient-accent">Us</span></h2></center>
           <br></br>
           <center> <p>The principles that shape every class and every dancer at Prastuti.</p></center>
          </div>
          <div className="values-grid">
            {valuesData.map((v) => (
              <div key={v.title} className="value-card" style={{ '--card-color': v.color }}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
  <br></br><center><center className='section-title'><span className="text-gradient-accent">Batches</span></center></center>
     <br></br>
      <center>Fitness</center>
<b><center>9 to 10:00 AM - Monday to Friday</center></b>
      <br></br>
      <center>Ladies</center>  
      <b><center>12 to 1:00 PM - Monday to Friday</center></b>
      <br></br>
      <center>Kids</center>
      <b><center>4:00 to 5:00 PM - Monday to Friday</center></b>
      <br></br>
      <center>Fitness</center>
      <b><center>6:00 to 7:00 PM - Monday to Friday</center></b>
      <br></br>
      <center>Advance Dance</center>
      <b><center>7:00 to 8:00 PM - Monday to Friday</center></b>
      <br></br>
      <center>Dance Beginner</center>
      <b><center>8:00 to 9:00 PM - Monday to Friday</center></b>
      </div>
      </section>

      {/* ── INSTRUCTORS ── */}
      <section className="instructors-section">
        <div className="container">
          <div className="instructors-header">
            <div className="section-badge" style={{ margin: '0 auto 14px' }}>The Team</div>
            <h2 className="section-title">Meet Our <span className="text-gradient">Instructors</span></h2>
            <p>Experienced professionals who bring passion and expertise to every session.</p>
          </div>
          <div className="instructors-grid">
            {instructorsData.map((inst) => (
              <div key={inst.name} className="instructor-card">
                <img src={inst.img} alt={inst.name} className="instructor-img" />
                <div className="instructor-info">
                  <h3>{inst.name}</h3>
                  <p className="instructor-role">{inst.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta-section">
        <div className="container">
          <h2>Ready to <span className="text-gradient">Start Dancing?</span></h2>
          <p>Join hundreds of students who've found their rhythm at Prastuti Dance Studio.</p>
          <div className="cta-btns">
            <Link to="/admission" className="btn-primary">Enroll Now — ₹1500</Link>
            <a href="tel:8882867685" className="btn-ghost">📞 Call Us</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;