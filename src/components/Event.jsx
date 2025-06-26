import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CurvedText from './CurvedText';
import Header from './Header';
import Footer from './Footer';
import './Event.css';
import background from '../assets/background 4.png';

import pfikLogoWebp from '../assets/ELEMEN/pfik.webp';
import pfikLogoPng from '../assets/ELEMEN/pfik.png';

import fikomLogoWebp from '../assets/ELEMEN/fikom.webp';
import fikomLogoPng from '../assets/ELEMEN/fikom.png';

import imkomcupLogoWebp from '../assets/ELEMEN/imkomcup.webp';
import imkomcupLogoPng from '../assets/ELEMEN/imkomcup.png';

import commfestLogoWebp from '../assets/ELEMEN/commfest.webp';
import commfestLogoPng from '../assets/ELEMEN/commfest.png';

import ImagePreloader from './ImagePreloader';

const imagesToPreload = [
  background,
  pfikLogoWebp,
  pfikLogoPng,
  fikomLogoWebp,
  fikomLogoPng,
  imkomcupLogoWebp,
  imkomcupLogoPng,
  commfestLogoWebp,
  commfestLogoPng,
];

function Event() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const radius = Math.min(windowWidth * 0.4, 450);

  return (
    <ImagePreloader images={imagesToPreload}>
    <div className="event-wrapper">
      <Header />
      <section className="event" style={{ backgroundImage: `url(${background})` }}>
        <div className="event-container">
          <div className="event-title-container">
            {isMobile ? (
              <div className="event-title-static">
                <div>EVENT TAHUNAN</div>
              </div>
            ) : (
              <CurvedText text="EVENT TAHUNAN" radius={radius} />
            )}
          </div>

          <div className="event-grid">
            <Link to="/event/pfik" className="event-item">
              <picture>
                <source srcSet={pfikLogoWebp} type="image/webp" />
                <img src={pfikLogoPng} alt="PFIK Logo" className="event-logo" />
              </picture>
              <p className="event-name">PFIK</p>
            </Link>

            <Link to="/event/fikom-night" className="event-item">
              <picture>
                <source srcSet={fikomLogoWebp} type="image/webp" />
                <img src={fikomLogoPng} alt="FIKOM NIGHT Logo" className="event-logo" />
              </picture>
              <p className="event-name">FIKOM NIGHT</p>
            </Link>

            <Link to="/event/im-kom-cup" className="event-item">
              <picture>
                <source srcSet={imkomcupLogoWebp} type="image/webp" />
                <img src={imkomcupLogoPng} alt="I'M KOM CUP Logo" className="event-logo" />
              </picture>
              <p className="event-name">I'M KOM CUP</p>
            </Link>

            <Link to="/event/commfest" className="event-item">
              <picture>
                <source srcSet={commfestLogoWebp} type="image/webp" />
                <img src={commfestLogoPng} alt="COMMFEST Logo" className="event-logo" />
              </picture>
              <p className="event-name">COMMFEST</p>
            </Link>
          </div>

          <p className="tap-info">Tap the icon for more information</p>
        </div>
      </section>
      <Footer />
    </div>
    </ImagePreloader>
  );
}

export default Event;
