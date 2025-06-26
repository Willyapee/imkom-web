import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageSliderMultiPane from "./ImageSliderMultiPane";
import instagramIcon from "../assets/ELEMEN/instagram-icon.png";
import pfik1 from "../assets/PROKER/PFIK/pfik1.webp";
import pfik2 from "../assets/PROKER/PFIK/pfik2.jpg";
import pfik3 from "../assets/PROKER/PFIK/pfik3.jpg";
import pfik4 from "../assets/PROKER/PFIK/pfik4.jpg";
import pfik5 from "../assets/PROKER/PFIK/pfik5.jpg";
import pfik6 from "../assets/PROKER/PFIK/pfik6.jpg";
import pfik7 from "../assets/PROKER/PFIK/pfik7.jpg";
import pfik8 from "../assets/PROKER/PFIK/pfik8.jpg";
import pfik9 from "../assets/PROKER/PFIK/pfik9.jpg";
import pfik10 from "../assets/PROKER/PFIK/pfik10.jpg";
import pfik11 from "../assets/PROKER/PFIK/pfik11.jpg";
import pfik12 from "../assets/PROKER/PFIK/pfik12.jpg";
import pfik13 from "../assets/PROKER/PFIK/pfik13.jpg";
import pfik14 from "../assets/PROKER/PFIK/pfik14.jpg";
import pfik15 from "../assets/PROKER/PFIK/pfik15.jpg";
import pfik16 from "../assets/PROKER/PFIK/pfik16.jpg";
import pfik17 from "../assets/PROKER/PFIK/pfik17.jpg";
import pfik18 from "../assets/PROKER/PFIK/pfik18.jpg";
import pfik19 from "../assets/PROKER/PFIK/pfik19.jpg";
import pfik20 from "../assets/PROKER/PFIK/pfik20.jpg";
import pfik21 from "../assets/PROKER/PFIK/pfik21.jpg";
import pfikLogo from "../assets/ELEMEN/pfik.png";
import "./PFIK.css";
import ImagePreloader from "./ImagePreloader"; 

const pfikSlides = [
  { url: pfik1, title: 'Image 1' },
  { url: pfik2, title: 'Image 2' },
  { url: pfik3, title: 'Image 3' },
  { url: pfik4, title: 'Image 4' },
  { url: pfik5, title: 'Image 5' },
  { url: pfik6, title: 'Image 6' },
  { url: pfik7, title: 'Image 7' },
  { url: pfik8, title: 'Image 8' },
  { url: pfik9, title: 'Image 9' },
  { url: pfik10, title: 'Image 10' },
  { url: pfik11, title: 'Image 11' },
  { url: pfik12, title: 'Image 12' },
  { url: pfik13, title: 'Image 13' },
  { url: pfik14, title: 'Image 14' },
  { url: pfik15, title: 'Image 15' },
  { url: pfik16, title: 'Image 16' },
  { url: pfik17, title: 'Image 17' },
  { url: pfik18, title: 'Image 18' },
  { url: pfik19, title: 'Image 19' },
  { url: pfik20, title: 'Image 20' },
  { url: pfik21, title: 'Image 21' },
];

function PFIK() {
  const imagesToPreload = pfikSlides.map((slide) => slide.url);
  return (
    <ImagePreloader images={imagesToPreload}>
    <div className="pfik-wrapper">
      <Header />
      <section className="pfik-main">
        <div className="pfik-content">
          <div className="pfik-logo-container">
            <img src={pfikLogo} alt="PFIK Logo" className="pfik-logo" />
          </div>
          <div className="pfik-details">
            <div className="pfik-title-section">
              <h1 className="pfik-title">PFIK</h1>
              <h2 className="pfik-subtitle">Perkenalan Fakultas Ilmu Komunikasi</h2>
            </div>
            <div className="pfik-description">
              <p>Perkenalan Fakultas Ilmu Komunikasi (PFIK) ditujukan untuk memperkenalkan dunia perkuliahan kepada mahasiswa baru. Diharapkan kegiatan PFIK dapat membantu mahasiswa dalam mempersiapkan diri, berkembang bersama, dan beradaptasi dengan segala rintangan yang akan dilalui di masa perkuliahan.</p>
            </div>
          </div>
        </div>
        <div className="pfik-slider-container">
          <ImageSliderMultiPane
            slides={pfikSlides}
            autoPlay={true}
            showButtons={true}
          />
        </div>
        <div className="instagram-icon">
          <img src={instagramIcon} alt="Instagram" />
          <a href="https://www.instagram.com/pf_ilkom/" className="instagram-handle">@pf_ilkom</a>
        </div>
      </section>
      <Footer />
    </div>
    </ImagePreloader>
  );
}

export default PFIK;