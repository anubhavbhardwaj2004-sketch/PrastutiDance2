import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Trophy, Star, Award, Heart, TrendingUp, Users, Play, User } from 'lucide-react';
import './Achivements.css';
import prastuti from '../assets/WhatsApp Image 2026-03-28 at 3.38.01 PM.jpeg';
const Achivements = () => {
    useEffect(() => {
        // Reveal cards on scroll
        gsap.from('.achievement-card', {
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.achievements-grid',
                start: 'top 80%'
            }
        });

        gsap.from('.achievement-hero h1', {
            opacity: 0,
            y: -20,
            duration: 1
        });
    }, []);

    const stats = [
        { id: 1, label: 'Awards Won', value: '50+', icon: <Trophy size={24} /> },
        { id: 2, label: 'Performances', value: '200+', icon: <Star size={24} /> },
        { id: 3, label: 'Happy Students', value: '500+', icon: <Users size={24} /> },
        { id: 4, label: 'Growth', value: '100%', icon: <TrendingUp size={24} /> },
    ];

    const milestones = [
        {
            id: 1,
            year: '2023',
            title: 'State Championship Winners',
            desc: 'Our senior troupe secured the first position at the Delhi State Dance Competition.',
            icon: <Award size={32} />
        },
        {
            id: 2,
            year: '2022',
            title: 'Best Choreography Award',
            desc: 'Recognized for innovation and creative expression at the National Street Dance Festival.',
            icon: <Star size={32} />
        },
        {
            id: 3,
            year: '2021',
            title: 'Community Outreach Milestone',
            desc: 'Successfully reached 1000+ children through our "Dance for All" initiative.',
            icon: <Heart size={32} />
        },
        {
            id: 4,
            year: '2024',
            title: '10 Years of Excellence',
            desc: 'Celebrating a decade of passion, growth, and thousands of students trained.',
            icon: <Trophy size={32} />
        }
    ];

    return (
        <div className="achievements-page">
            <div className="orb orb-1" />
            <div className="orb orb-2" />

            {/* ── HERO SECTION ── */}
            <section className="achievement-hero">
                <div className="container">
                    <div className="hero-badge" style={{ margin: '0 auto 2rem' }}>
                        <Award size={16} fill="currentColor" /> Our Legacy
                    </div>
                    <h1 className="text-gradient">Studio <span className="font-script text-gradient-accent">Achievements</span></h1>
                </div>
            </section>

            {/* ── STATS SECTION ── */}
            <section className="container" style={{ marginBottom: '5rem' }}>
                <div className="hero-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', padding: '3rem' }}>
                    {stats.map((stat) => (
                        <div key={stat.id} className="hero-stat">
                            <div style={{ color: 'var(--accent-red)', marginBottom: '0.8rem' }}>{stat.icon}</div>
                            <span className="stat-num">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── MILESTONES GRID ── */}
            <section className="achievements-grid">
                {milestones.map((m) => (
                    <div key={m.id} className="achievement-card glass-card">
                        <span className="year">{m.year}</span>
                        <div className="award-icon">{m.icon}</div>
                        <h3>{m.title}</h3>
                        <p>{m.desc}</p>
                    </div>
                ))}
            </section>

            {/* ── TEACHER SPOTLIGHT ── */}
            <section className="teacher-spotlight section-padding">
                <div className="container">
                    <div className="spotlight-grid">
                        <div className="spotlight-video-box">
                            <div className="video-card spotlight-card">
                                {/* <video src={GURURANDHAWA} controls className="spotlight-video" /> */}
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/4RSxIX2I6Ic?si=4QAXE0sQe6jv8XK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div className="spotlight-badge">Guru Randhawa Project</div>
                            </div>
                        </div>
                        <div className="spotlight-content">
                            <div className="hero-badge"><Star size={14} fill="currentColor" /> Faculty Highlight</div>
                            <h2 className="section-title" style={{ textAlign: 'left', margin: '1rem 0' }}>
                                Meet Our Lead Artist: <span className="text-gradient-accent">Akansha Mam</span>
                            </h2>
                            <div className="teacher-profile-box">
                                <img src={prastuti} alt="Akansha Mam" className="teacher-round-pic" />
                                <div className="profile-text">
                                    <p className="lead-text">Professional Dancer & Choreographer</p>
                                    <p className="body-text">
                                        With a background in official music video shoots and national stages, Akansha Mam brings elite industry experience to Prastuti Studio. Her collaboration in the Guru Randhawa project is a testament to the professional caliber of instruction we offer.
                                    </p>
                                </div>
                            </div>
                            <div className="spotlight-stats">
                                <div className="s-stat">
                                    <span className="s-num">8+</span>
                                    <span className="s-label">Years Experience</span>
                                </div>
                                <div className="s-stat">
                                    <span className="s-num">Official</span>
                                    <span className="s-label">Artist Collaboration</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ height: '100px' }} />
        </div>
    );
};

export default Achivements;