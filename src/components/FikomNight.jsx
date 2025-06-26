import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageSliderMultiPane from "./ImageSliderMultiPane";
import ImagePreloader from "./ImagePreloader";
import instagramIcon from "../assets/ELEMEN/instagram-icon.png";
import fikomNightLogo from "../assets/ELEMEN/fikom.png";
import "./FIkomNight.css";

// Image imports
import fikom1 from "../assets/PROKER/FIKOM/fikom1.webp";
import fikom2 from "../assets/PROKER/FIKOM/fikom2.webp";
import fikom3 from "../assets/PROKER/FIKOM/fikom3.webp";
import fikom4 from "../assets/PROKER/FIKOM/fikom4.webp";
import fikom5 from "../assets/PROKER/FIKOM/fikom5.webp";
import fikom6 from "../assets/PROKER/FIKOM/fikom6.webp";
import fikom7 from "../assets/PROKER/FIKOM/fikom7.webp";
import fikom8 from "../assets/PROKER/FIKOM/fikom8.webp";
import fikom9 from "../assets/PROKER/FIKOM/fikom9.webp";
import fikom10 from "../assets/PROKER/FIKOM/fikom10.webp";
import fikom11 from "../assets/PROKER/FIKOM/fikom11.webp";
import fikom12 from "../assets/PROKER/FIKOM/fikom12.webp";
import fikom13 from "../assets/PROKER/FIKOM/fikom13.webp";
import fikom14 from "../assets/PROKER/FIKOM/fikom14.webp";
import fikom15 from "../assets/PROKER/FIKOM/fikom15.webp";
import fikom16 from "../assets/PROKER/FIKOM/fikom16.webp";
import fikom17 from "../assets/PROKER/FIKOM/fikom17.webp";
import fikom18 from "../assets/PROKER/FIKOM/fikom18.webp";
import fikom19 from "../assets/PROKER/FIKOM/fikom19.webp";
import fikom20 from "../assets/PROKER/FIKOM/fikom20.webp";
import fikom21 from "../assets/PROKER/FIKOM/fikom21.webp";

const fikomNightSlides = [
  { url: fikom1, title: 'Image 1' },
  { url: fikom2, title: 'Image 2' },
  { url: fikom3, title: 'Image 3' },
  { url: fikom4, title: 'Image 4' },
  { url: fikom5, title: 'Image 5' },
  { url: fikom6, title: 'Image 6' },
  { url: fikom7, title: 'Image 7' },
  { url: fikom8, title: 'Image 8' },
  { url: fikom9, title: 'Image 9' },
  { url: fikom10, title: 'Image 10' },
  { url: fikom11, title: 'Image 11' },
  { url: fikom12, title: 'Image 12' },
  { url: fikom13, title: 'Image 13' },
  { url: fikom14, title: 'Image 14' },
  { url: fikom15, title: 'Image 15' },
  { url: fikom16, title: 'Image 16' },
  { url: fikom17, title: 'Image 17' },
  { url: fikom18, title: 'Image 18' },
  { url: fikom19, title: 'Image 19' },
  { url: fikom20, title: 'Image 20' },
  { url: fikom21, title: 'Image 21' },
];

function FikomNight() {
  const imagesToPreload = fikomNightSlides.map((slide) => slide.url);

  return (
    <ImagePreloader images={imagesToPreload}>
      <div className="fikomnight-wrapper">
        <Header />
        <section className="fikomnight-main">
          <div className="fikomnight-content">
            <div className="fikomnight-logo-container">
              <img src={fikomNightLogo} alt="FikomNight Logo" className="fikomnight-logo" />
            </div>
            <div className="fikomnight-details">
              <div className="fikomnight-title-section">
                <h1 className="fikomnight-title">FIKOM NIGHT</h1>
              </div>
              <div className="fikomnight-description">
                <p>
                 FIKOM Night merupakan program kerja tahunan yang dikhususkan bagi mahasiswa baru agar dapat bersosialisasi dan membangun relasi dengan sesama mahasiswa FIKOM. 
                </p>
              </div>
            </div>
          </div>

          <div className="fikomnight-slider-container">
            <ImageSliderMultiPane
              slides={fikomNightSlides}
              autoPlay={true}
              showButtons={true}
            />
          </div>

          <div className="instagram-icon">
            <img src={instagramIcon} alt="Instagram" />
            <a href="https://www.instagram.com/fikomumn/" className="instagram-handle">
              @fikomumn
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </ImagePreloader>
  );
}

export default FikomNight;
