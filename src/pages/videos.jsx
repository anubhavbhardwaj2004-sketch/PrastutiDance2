import React from 'react';
import './videos.css';

// Import local video assets
import video1 from '../assets/WhatsApp Video 2026-03-28 at 4.02.16 PM.mp4';
import video2 from '../assets/WhatsApp Video 2026-03-28 at 4.15.29 PM.mp4';
import video3 from '../assets/WhatsApp Video 2026-03-28 at 4.26.34 PM.mp4';
// Fixed: Removed the trailing space from the import path below
import video4 from '../assets/SaveGram.App_AQPogw7kCE_VMpZ6FXC6M6JccDbdbUXD3W81_zTPp-rt1z-Iw1-rD6BkA1eGBLsVS9fN3aA5z0qunsHgt-SQDt-k.mp4';

const Vidieo = () => {
  return (
    <div className="video-page">
      {/* ── HERO ── */}
      <div className="video-hero">
        <div className="video-hero-bg" />
        <div className="video-hero-content">
          <div className="video-hero-badge">✦ Gallery</div>
          <h1 className="video-hero-title">
            Studio <span className="text-gradient">Moments</span>
          </h1>
          <p className="video-hero-sub">
            A window into the rhythm and energy of Prastuti Dance Studio.
          </p>
        </div>
      </div>

      <section className="videos-main-section">
        <div className="container">
          <div className="video-list">
            
            {/* Video Box 1 */}
            <div className="video-box-card">
              <div className="video-player-wrap">
                <video src={video1} controls autoPlay muted loop playsInline />
              </div>
              <div className="video-info-side">
                <span className="video-number">01</span>
                <span className="video-tag">Highlights</span>
                <h3 className="video-title">Studio Performance</h3>
                <div className="video-divider"></div>
                <p className="video-desc">
                  Capturing the energy and coordination of our students during their group routine.
                </p>
              </div>
            </div>

            {/* Video Box 2 */}
            <div className="video-box-card">
              <div className="video-player-wrap">
                <video src={video2} controls playsInline />
              </div>
              <div className="video-info-side">
                <span className="video-number">02</span>
                <span className="video-tag">Classical Fusion</span>
                <h3 className="video-title">Traditional Practice</h3>
                <div className="video-divider"></div>
                <p className="video-desc">
                  Elegant movements blending traditional dance with modern rhythm.
                </p>
              </div>
            </div>

            {/* Video Box 3 */}
            <div className="video-box-card">
              <div className="video-player-wrap">
                <video src={video3} controls playsInline />
              </div>
              <div className="video-info-side">
                <span className="video-number">03</span>
                <span className="video-tag">Workshop</span>
                <h3 className="video-title">Urban Choreography</h3>
                <div className="video-divider"></div>
                <p className="video-desc">
                  Exploring sharp textures and intricate steps in our urban intensive session.
                </p>
              </div>
            </div>

            {/* Video Box 4 */}
            <div className="video-box-card">
              <div className="video-player-wrap">
                <video src={video4} controls playsInline />
              </div>
              <div className="video-info-side">
                <span className="video-number">04</span>
                <span className="video-tag">Professional Project</span>
                <h3 className="video-title">Duet Dancing</h3>
                <div className="video-divider"></div>
                <p className="video-desc">
                  Featuring our lead artist Akansha Mam in an official collaboration. Witness elite choreography on a national stage.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Vidieo;
