import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera } from 'lucide-react';
import './gallery.css';
import Openingpic from '../assets/Openingpic.jpeg';
import Studio_opening from '../assets/Studio_opening.mp4';
import StudioTShirt from '../assets/Studio_t-shrit.jpeg';
import studio2pic from '../assets/studio2pic.jpeg';
import Studiopic from '../assets/Studiopic.jpeg';
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  useEffect(() => {
    // Hero title animation
    gsap.from('.gallery-hero h1', {
      opacity: 0,
      y: -30,
      duration: 1,
      delay: 0.2
    });
  }, []);

  return (
    <div className="gallery-page">
      <div className="gallery-glow-1" />
      <div className="gallery-glow-2" />

      {/* ── HERO SECTION ── */}
      <section className="gallery-hero">
        <div className="container">
          <div className="hero-badge" style={{ margin: '0 auto 2rem' }}>
            <Camera size={16} fill="currentColor" /> Our Visual Journey
          </div>
          <h1 className="text-gradient">Studio <span className="font-script text-gradient-accent">Gallery</span></h1>
          <p className="gallery-hero-sub">
            A celebration of rhythm, art, and the vibrant life at Prastuti Dance Studio.
            Take a glimpse into our world.
          </p>
        </div>
      </section>

      {/* ── GALLERY GRID SECTION ── */}
      <section className="gallery-container">
        <div className="gallery-main-grid">
           <div className="gallery-item span-large">
             <video src={Studio_opening} autoPlay loop muted controls playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
           </div>

           <div className="gallery-item span-large">
             <img src={Openingpic} alt="Studio Opening Day" />
             <div className="gallery-overlay">
               <h3>Grand Opening</h3>
               <p>The dawn of Prastuti Studio</p>
             </div>
           </div>
           
           <div className="gallery-item span-tall">
             <img src={Studiopic} alt="Main Studio Space" />
             <div className="gallery-overlay">
               <h3>Professional Floor</h3>
               <p>Designed for dancers</p>
             </div>
           </div>

           <div className="gallery-item span-med">
             <img src={studio2pic} alt="Creative Corner" />
             <div className="gallery-overlay">
               <h3>Creative Corner</h3>
               <p>Artistic ambiance</p>
             </div>
           </div>

           <div className="gallery-item span-med">
             <img src={StudioTShirt} alt="Studio Official Gear" />
             <div className="gallery-overlay">
               <h3>Official Gear</h3>
               <p>Join the movement</p>
             </div>
           </div>
        </div>
      </section>

      {/* ── FOOTER OVERLAY ── */}
      <div style={{ height: '100px' }} />
    </div>
  );
};

export default Gallery;