import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageSliderMultiPane from "./ImageSliderMultiPane";
import instagramIcon from "../assets/ELEMEN/instagram-icon.png";
import ikcp1 from "../assets/PROKER/IMKOM CUP/ikcp1.webp";
import ikcp2 from "../assets/PROKER/IMKOM CUP/ikcp2.webp";
import ikcp3 from "../assets/PROKER/IMKOM CUP/ikcp3.webp";
import ikcp4 from "../assets/PROKER/IMKOM CUP/ikcp4.webp";
import ikcp5 from "../assets/PROKER/IMKOM CUP/ikcp5.webp";
import ikcp6 from "../assets/PROKER/IMKOM CUP/ikcp6.webp";
import ikcp7 from "../assets/PROKER/IMKOM CUP/ikcp7.webp";
import ikcp8 from "../assets/PROKER/IMKOM CUP/ikcp8.webp";
import ikcp9 from "../assets/PROKER/IMKOM CUP/ikcp9.webp";
import ikcp10 from "../assets/PROKER/IMKOM CUP/ikcp10.webp";
import ikcp11 from "../assets/PROKER/IMKOM CUP/ikcp11.jpg";
import ikcp12 from "../assets/PROKER/IMKOM CUP/ikcp12.webp";
import ikcp13 from "../assets/PROKER/IMKOM CUP/ikcp13.jpg";
import ikcp14 from "../assets/PROKER/IMKOM CUP/ikcp14.jpg";
import ikcp15 from "../assets/PROKER/IMKOM CUP/ikcp15.webp";
import ikcp16 from "../assets/PROKER/IMKOM CUP/ikcp16.webp";
import ikcp17 from "../assets/PROKER/IMKOM CUP/ikcp17.webp";
import ikcp18 from "../assets/PROKER/IMKOM CUP/ikcp18.webp";
import ikcp19 from "../assets/PROKER/IMKOM CUP/ikcp19.webp";
import ikcp20 from "../assets/PROKER/IMKOM CUP/ikcp20.webp";
import imKomCupLogo from "../assets/ELEMEN/imkomcup.png";
import "./ImKomCup.css";
import ImagePreloader from "./ImagePreloader";

const imKomCupSlides = [
  { url: ikcp1, title: 'Image 1' },
  { url: ikcp2, title: 'Image 2' },
  { url: ikcp3, title: 'Image 3' },
  { url: ikcp4, title: 'Image 4' },
  { url: ikcp5, title: 'Image 5' },
  { url: ikcp6, title: 'Image 6' },
  { url: ikcp7, title: 'Image 7' },
  { url: ikcp8, title: 'Image 8' },
  { url: ikcp9, title: 'Image 9' },
  { url: ikcp10, title: 'Image 10' },
  { url: ikcp11, title: 'Image 11' },
  { url: ikcp12, title: 'Image 12' },
  { url: ikcp13, title: 'Image 13' },
  { url: ikcp14, title: 'Image 14' },
  { url: ikcp15, title: 'Image 15' },
  { url: ikcp16, title: 'Image 16' },
  { url: ikcp17, title: 'Image 17' },
  { url: ikcp18, title: 'Image 18' },
  { url: ikcp19, title: 'Image 19' },
  { url: ikcp20, title: 'Image 20' },
];

function ImKomCup() {
const imagesToPreload = imKomCupSlides.map((slide) => slide.url);
  return (
    <ImagePreloader images={imagesToPreload}>
    <div className="imkomcup-wrapper">
      <Header />
      <section className="imkomcup-main">
        <div className="imkomcup-content">
          <div className="imkomcup-logo-container">
            <img src={imKomCupLogo} alt="ImKomCup Logo" className="imkomcup-logo" />
          </div>
          <div className="imkomcup-details">
            <div className="imkomcup-title-section">
              <h1 className="imkomcup-title">I'M KOM CUP</h1>
            </div>
            <div className="imkomcup-description">
              <p>I’M KOM CUP merupakan perlombaan di bidang olahraga yang diharapkan dapat menjadi sarana untuk mahasiswa FIKOM yang memiliki minat, bakat dan potensi di bidang tersebut. Perlombaan yang tersedia di I’M KOM CUP meliputi 4 cabang perlombaan seperti futsal, basket, badminton, dan dance.</p>
            </div>
          </div>
        </div>
        <div className="imkomcup-slider-container">
          <ImageSliderMultiPane
            slides={imKomCupSlides}
            autoPlay={true}
            showButtons={true}
          />
        </div>
        <div className="instagram-icon">
          <img src={instagramIcon} alt="Instagram" />
          <a href="https://www.instagram.com/imkom_cup/" className="instagram-handle">@imkom_cup</a>
        </div>
      </section>
      <Footer />
    </div>
    </ImagePreloader>
  );
}

export default ImKomCup;