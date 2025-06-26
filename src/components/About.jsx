import React, { useState, useEffect, useRef } from 'react';
import CurvedText from './CurvedText';
import Header from './Header';
import Footer from './Footer';
import './About.css';
import './VisiMisi.css';
import './Mascots.css';
import ImagePreloader from './ImagePreloader';

import background from '../assets/background 1.png';
import background2 from '../assets/background 2.png';
import background3 from '../assets/background 5.png';
import logo from '../assets/arsyan.png';
import logoBase from '../assets/logo base.png';
import arrow from '../assets/ELEMEN/arrow.png';
import jejeStar from '../assets/jeje-star.png';
import kokomStar from '../assets/kokom-star.png';
import junaStar from '../assets/juna-star.png';

const imagesToPreload = [
  background, background2, background3,
  logo, logoBase, arrow,
  jejeStar, kokomStar, junaStar
];

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const arrow1Ref = useRef(null);
  const text1Ref = useRef(null);
  const arrow2Ref = useRef(null);
  const text2Ref = useRef(null);
  const arrow3Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden');
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = [arrow1Ref, text1Ref, arrow2Ref, text2Ref, arrow3Ref, text3Ref];
    elements.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      elements.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [isMobile]);

  const radius = Math.min(windowWidth * 0.4, 450);

  return (
    <ImagePreloader images={imagesToPreload}>
      <div className="about-wrapper">
        <Header />

        <section className="about" style={{ backgroundImage: `url(${background3})` }}>
          <div className="about-title-container">
            {isMobile ? (
              <div className="about-title-static">
                <div>FILOSOFI LOGO</div>
                <div>I'M KOM</div>
              </div>
            ) : (
              <CurvedText text="FILOSOFI LOGO I'M KOM" radius={radius} />
            )}
          </div>

          <div className="about-content">
            <div className="about-logo-container">
              <img src={isMobile ? logoBase : logo} alt="I'M KOM Logo" className="about-logo" />
            </div>

            {isMobile && (
              <>
                <img ref={arrow1Ref} src={arrow} alt="Arrow" className="arrow hidden" />
                <div ref={text1Ref} className="about-text hidden">
                  <span className="point-number">1.</span>
                  <p>Bentuk lingkaran menyatakan bahwa I'M KOM selalu satu dan tidak akan pernah putus.</p>
                </div>
                <img ref={arrow2Ref} src={arrow} alt="Arrow" className="arrow hidden" />
                <div ref={text2Ref} className="about-text hidden">
                  <span className="point-number">2.</span>
                  <p>Tulisan I'M KOM yang bersambung dengan gambar pena menggambarkan bahwa I'M KOM akan terus berkarya dan tidak akan pernah berhenti.</p>
                </div>
                <img ref={arrow3Ref} src={arrow} alt="Arrow" className="arrow hidden" />
                <div ref={text3Ref} className="about-text hidden">
                  <span className="point-number">3.</span>
                  <p>Tulisan Cor Unum merupakan motto I'M KOM yang berasal dari Bahasa Latin, berarti satu hati.</p>
                </div>
              </>
            )}
          </div>
        </section>

        <section className="visi-misi" style={{ backgroundImage: `url(${background2})` }}>
          <div className="visi-misi-container">
            <div className="vision-wrapper">
              <h2 className="visi-title">VISI</h2>
              <div className="vision-statement">
                <p>
                  Mewujudkan I’M KOM GEN XV sebagai himpunan yang IDEAL (Inovatif, Dinamis, Etis, Aspiratif, dan Loyal) dalam upaya meningkatkan kesejahteraan dan pengembangan diri seluruh mahasiswa Fakultas Ilmu Komunikasi, baik di bidang akademis maupun non akademis.
                </p>
              </div>
            </div>
            <div className="mission-wrapper">
              <h2 className="misi-title">MISI</h2>
              <div className="mission-points">
                <div className="mission-point">
                  <span className="point-number">1.</span>
                  <p>Mendedikasikan I’M KOM Gen XV sebagai himpunan yang dekat dengan mahasiswa melalui program kerja yang inovatif dan solutif untuk memfasilitasi seluruh kebutuhan dan potensi, mengembangkan minat dan bakat, mewujudkan aspirasi, serta memecahkan masalah seluruh mahasiswa FIKOM UMN</p>
                </div>
                <div className="mission-point mission-point-top-right">
                  <span className="point-number">2.</span>
                  <p>Membangun dan memelihara hubungan yang aktif dan positif dengan berbagai pihak internal dan eksternal untuk menciptakan peluang baru dan menjaga citra I’M KOM Gen XV</p>
                </div>
                <div className="mission-point">
                  <span className="point-number">3.</span>
                  <p>Membangun budaya organisasi yang inklusif dan harmonis antar pengurus untuk menyumbuhkan rasa kepemilikan dan menjadikan I’M KOM Gen XV sebagai rumah kedua bagi seluruh pengurus di dalamnya</p>
                </div>
                <div className="mission-point">
                  <span className="point-number">4.</span>
                  <p>Menjadikan I’M KOM Gen XV sebagai tempat yang tepat bagi seluruh pengurus untuk mengembangkan diri dengan mendorong kolaborasi dan keterlibatan aktif demi mencapai hasil yang maksimal dalam setiap program kerja</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mascots" style={{ backgroundImage: `url(${background})` }}>
          <div className="mascots-container">
            <h2 className="mascots-title">MEET OUR MASCOTS</h2>
            <div className="mascots-grid">
              <div className="mascot-item">
                <h3 className="mascot-name">JEJE</h3>
                <img src={jejeStar} alt="Jeje Mascot" className="mascot-image" loading="eager" />
                <p className="mascot-description">Jeje dari PJJ yang super produktif siap membantu!</p>
              </div>
              <div className="mascot-item">
                <h3 className="mascot-name">KOKOM</h3>
                <img src={kokomStar} alt="Kokom Mascot" className="mascot-image" loading="eager" />
                <p className="mascot-description">Kokom dari SC yang cool banget!</p>
              </div>
              <div className="mascot-item">
                <h3 className="mascot-name">JUNA</h3>
                <img src={junaStar} alt="Juna Mascot" className="mascot-image" loading="eager" />
                <p className="mascot-description">Juna dari Jurnalistik yang siap menangkap berita terkini!</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ImagePreloader>
  );
}

export default About;
