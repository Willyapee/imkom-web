import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageSliderMultiPane from "./ImageSliderMultiPane";
import ImagePreloader from "./ImagePreloader";
import instagramIcon from "../assets/ELEMEN/instagram-icon.png";
import commfestLogo from "../assets/ELEMEN/commfest.png";
import "./Commfest.css";

// Commfest images
import commfest1 from "../assets/PROKER/COMMFEST/commfest1.webp";
import commfest2 from "../assets/PROKER/COMMFEST/commfest2.webp";
import commfest3 from "../assets/PROKER/COMMFEST/commfest3.webp";
import commfest4 from "../assets/PROKER/COMMFEST/commfest4.jpg";
import commfest5 from "../assets/PROKER/COMMFEST/commfest5.webp";
import commfest6 from "../assets/PROKER/COMMFEST/commfest6.webp";
import commfest7 from "../assets/PROKER/COMMFEST/commfest7.webp";
import commfest8 from "../assets/PROKER/COMMFEST/commfest8.webp";
import commfest9 from "../assets/PROKER/COMMFEST/commfest9.webp";
import commfest10 from "../assets/PROKER/COMMFEST/commfest10.webp";
import commfest11 from "../assets/PROKER/COMMFEST/commfest11.webp";
import commfest12 from "../assets/PROKER/COMMFEST/commfest12.webp";
import commfest13 from "../assets/PROKER/COMMFEST/commfest13.webp";
import commfest14 from "../assets/PROKER/COMMFEST/commfest14.webp";
import commfest15 from "../assets/PROKER/COMMFEST/commfest15.webp";
import commfest16 from "../assets/PROKER/COMMFEST/commfest16.webp";
import commfest17 from "../assets/PROKER/COMMFEST/commfest17.webp";
import commfest18 from "../assets/PROKER/COMMFEST/commfest18.webp";
import commfest23 from "../assets/PROKER/COMMFEST/commfest23.webp";

const commfestSlides = [
  { url: commfest1, title: 'Image 1' },
  { url: commfest2, title: 'Image 2' },
  { url: commfest3, title: 'Image 3' },
  { url: commfest4, title: 'Image 4' },
  { url: commfest5, title: 'Image 5' },
  { url: commfest6, title: 'Image 6' },
  { url: commfest7, title: 'Image 7' },
  { url: commfest8, title: 'Image 8' },
  { url: commfest9, title: 'Image 9' },
  { url: commfest10, title: 'Image 10' },
  { url: commfest11, title: 'Image 11' },
  { url: commfest12, title: 'Image 12' },
  { url: commfest13, title: 'Image 13' },
  { url: commfest14, title: 'Image 14' },
  { url: commfest15, title: 'Image 15' },
  { url: commfest16, title: 'Image 16' },
  { url: commfest17, title: 'Image 17' },
  { url: commfest18, title: 'Image 18' },
  { url: commfest23, title: 'Image 23' },
];

function Commfest() {
  const imagesToPreload = commfestSlides.map((slide) => slide.url);

  return (
    <ImagePreloader images={imagesToPreload}>
      <div className="commfest-wrapper">
        <Header />
        <section className="commfest-main">
          <div className="commfest-content">
            <div className="commfest-logo-container">
              <img src={commfestLogo} alt="Commfest Logo" className="commfest-logo" />
            </div>
            <div className="commfest-details">
              <div className="commfest-title-section">
                <h1 className="commfest-title">COMMFEST</h1>
                <h2 className="commfest-subtitle">Communication Festival</h2>
              </div>
              <div className="commfest-description">
                <p>
                  Communication Festival (COMMFEST) merupakan program kerja terbesar FIKOM UMN yang di tahun ini merupakan gabungan dari kedua program kerja besar I’M KOM, yaitu PRIDE dan COMMPRESS. COMMFEST memiliki 6 rangkaian acara, yaitu opening, exhibition, charity, seminar, competition, dan closing.
                </p>
              </div>
            </div>
          </div>

          <div className="commfest-slider-container">
            <ImageSliderMultiPane
              slides={commfestSlides}
              autoPlay={true}
              showButtons={true}
            />
          </div>

          <div className="instagram-icon">
            <img src={instagramIcon} alt="Instagram" />
            <a href="https://www.instagram.com/commfest.umn" className="instagram-handle">
              @commfest.umn
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </ImagePreloader>
  );
}

export default Commfest;
