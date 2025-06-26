import React, { useRef, useEffect } from "react";
import "./WhatIsIMKom.css";
import ImagePreloader from "./ImagePreloader";

import background from "../assets/background 2.png";
import image1 from "../assets/IMKOM/img1.jpg";
import image2 from "../assets/IMKOM/img2.jpeg";
import image3 from "../assets/IMKOM/img3.jpg";
import image4 from "../assets/IMKOM/img4.jpeg";
import image5 from "../assets/IMKOM/img5.jpeg";
import image6 from "../assets/IMKOM/img6.jpg";
import image7 from "../assets/IMKOM/img7.jpg";
import image8 from "../assets/IMKOM/img8.jpg";
import image9 from "../assets/IMKOM/img9.jpg";
import image10 from "../assets/IMKOM/img10.jpg";
import image11 from "../assets/IMKOM/img11.jpg";
import element1 from "../assets/ELEMEN/e1.png";

const videoThumbnail = "https://img.youtube.com/vi/yNFrxutdvgg/hqdefault.jpg";

const images = [
  background, element1,
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10, image11,
];

const WhatIsIMKom = () => {
  const sliderImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];
  const loopedImages = [...sliderImages, ...sliderImages];
  const sliderRef = useRef(null);

  useEffect(() => {
    let scrollAmount = 0;
    const scrollStep = 0.3;
    const container = sliderRef.current;

    const scroll = () => {
      if (!container) return;
      scrollAmount += scrollStep;
      container.scrollLeft = scrollAmount;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      }
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <ImagePreloader images={images}>
      <section id="whatis" className="whatis" style={{ backgroundImage: `url(${background})` }}>
        <div className="scroll-slider-wrapper">
          <div className="scroll-slider" ref={sliderRef}>
            {loopedImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Scroll ${index}`}
                className="scroll-slider-img"
              />
            ))}
          </div>
        </div>

        <div className="video-dedication-section">
          <div className="video-dedication-layout">
            <div className="youtube-video">
              <a href="https://www.youtube.com/watch?v=yNFrxutdvgg" target="_blank" rel="noopener noreferrer" className="video-thumbnail-link">
                <img src={videoThumbnail} alt="Video Profile Thumbnail" className="video-thumbnail" loading="lazy" />
                <div className="play-button-overlay"></div>
              </a>
            </div>
            <div className="dedication-text">
              <h1 className="dedication-title">BERDEDIKASI SATUKAN HATI</h1>
            </div>
          </div>
        </div>

        <h1 className="whatis-title">APA ITU I'M KOM?</h1>

        <div className="whatis-content">
          <img src={element1} alt="Magnifying Glass Element" className="whatis-element" />
          <p>
            I’M KOM merupakan akronim dari Ikatan Mahasiswa Komunikasi dan merupakan
            himpunan mahasiswa di bawah naungan Fakultas Ilmu Komunikasi Universitas
            Multimedia Nusantara. I’M KOM membawahi tiga program studi, yaitu Strategic
            Communication, Digital Journalism, dan PJJ Ilmu Komunikasi (Pembelajaran
            Jarak Jauh).
          </p>
        </div>
      </section>
    </ImagePreloader>
  );
};

export default WhatIsIMKom;