import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import divisiMiba from "../assets/IMKOM/divisi-miba-2.png";
import mibaIndvWebp from "../assets/IMKOM/miba-indv-2.webp";
import mibaIndvPng from "../assets/IMKOM/miba-indv.png";
import background3 from "../assets/background 3.png";
import ImageSlider from "./ImageSlider";
import komvis1 from "../assets/PROKER/MIBA/Komvis/komvis-1.jpg";
import komvis2 from "../assets/PROKER/MIBA/Komvis/komvis-2.jpg";
import komvis3 from "../assets/PROKER/MIBA/Komvis/komvis-3.jpg";
import komvis4 from "../assets/PROKER/MIBA/Komvis/komvis-4.jpg";
import komvis5 from "../assets/PROKER/MIBA/Komvis/komvis-5.jpg";
import komvis6 from "../assets/PROKER/MIBA/Komvis/komvis-6.jpg";
import komvis7 from "../assets/PROKER/MIBA/Komvis/komvis-7.jpg";
import komvis8 from "../assets/PROKER/MIBA/Komvis/komvis-8.jpg";
import komvis9 from "../assets/PROKER/MIBA/Komvis/komvis-9.jpg";
import styles from "./DivisiMiba.module.css";

const DivisiMiba = () => {
  const [isMobile, setIsMobile] = useState(false);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkScreenSize, 100);
    };

    checkScreenSize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const komvisSlides = [
    { url: komvis1, title: "Komvis 1" },
    { url: komvis2, title: "Komvis 2" },
    { url: komvis3, title: "Komvis 3" },
    { url: komvis4, title: "Komvis 4" },
    { url: komvis5, title: "Komvis 5" },
    { url: komvis6, title: "Komvis 6" },
    { url: komvis7, title: "Komvis 7" },
    { url: komvis8, title: "Komvis 8" },
    { url: komvis9, title: "Komvis 9" },
  ];

  const sliderStyles = {
    width: isMobile ? "100%" : "90%",
    margin: "0 auto",
  };

  return (
    <div className={styles['divisi-miba-wrapper-2']}>
      <Header />
      <main className={styles['divisi-miba-main-2']}>
        <section ref={section1Ref} className={styles['divisi-miba-intro']}>
          <div className={styles['section-content']}>
            <div className={styles['divisi-miba-top-2']}>
              <img src={divisiMiba} alt="Divisi Miba" className={styles['divisi-miba-image-2']} />
              <div className={styles['divisi-miba-titles-2']}>
                <h1 className={styles['miba-title-2']}>MIBA</h1>
                <h2 className={styles['miba-subtitle-2']}>Minat Bakat</h2>
              </div>
            </div>
            <div className={styles['description-box-2']}>
              <p>
                Divisi MIBA mengurus segala kegiatan mengenai perlombaan dan kompetisi yang diadakan oleh pihak internal maupun eksternal UMN. Selain itu, menjadi wadah bagi minat dan bakat mahasiswa FIKOM.
              </p>
            </div>
          </div>
        </section>
        <section ref={section2Ref} className={styles['individual-image-section']}>
          <div className={styles['section-content']}>
            <picture>
              <source srcSet={mibaIndvWebp} type="image/webp" />
              <img src={mibaIndvPng} alt="Miba Individuals" className={styles['individual-image']} loading="lazy" />
            </picture>
          </div>
        </section>
        <section ref={section3Ref} className={styles['division-page-3']}>
          <div className={styles['section-content']}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA MIBA</h1>
            <div className={styles['image-slider-container']} style={sliderStyles}>
              <ImageSlider slides={komvisSlides} autoPlay={true} showButtons={true} showIndicators={true} />
            </div>
            <h2 className={styles['division-subtitle-3']}>KOMVIS</h2>
            <div className={styles['division-content-3']}>
              <p>
                KOMVIS merupakan program kerja tahunan divisi MIBA, dengan mengunjungi salah satu perusahaan atau media. KOMVIS bertujuan untuk memberi kesempatan kepada mahasiswa Fakultas Ilmu Komunikasi untuk melihat dunia kerja secara langsung dan mendapatkan pengalaman baru seputar dunia kerja, sehingga mengurangi adanya culture shock ketika nanti magang atau bekerja. Pada I'M KOM Gen XV, KOMVIS akan dilaksanakan sebanyak 2 kali. KOMVIS pertama akan dilaksanakan pada 25 April 2025, untuk program studi strategic communication, dengan mengunjungi PT. Amerta Indah Otsuka. KOMVIS kedua akan berlangsung sekitar bulan Oktober - November, untuk program studi digital journalism, dengan mengunjungi salah satu media.
              </p>
            </div>
          </div>
        </section>
        <section className={styles['division-page-3']}>
          <div className={`${styles['section-content']} ${styles['last-section']}`}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA MIBA</h1>
            <div className={styles['program-container']}>
              <div className={styles['program-item']}>
                <h2 className={styles['program-subtitle-3']}>Perlombaan</h2>
                <div className={styles['program-box']}>
                  <p><strong>Salah satu tugas utama Divisi Minat dan Bakat dalam himpunan mahasiswa adalah mengidentifikasi dan mengorganisasi berbagai peluang perlombaan, kompetisi, serta kegiatan pengembangan diri yang relevan dengan potensi dan minat mahasiswa. Kegiatan ini mencakup pencarian informasi lomba dari berbagai sumber baik dari lingkup kampus, regional, nasional, maupun internasional, yang kemudian dikurasikan dan disebarluaskan kepada mahasiswa melalui media komunikasi internal.</strong></p>
                </div>
              </div>
              <div className={styles['program-item']}>
                <h2 className={styles['program-subtitle-3']}>Cheetah</h2>
                <div className={styles['program-box']}>
                  <p><strong>Divisi Minat dan Bakat juga berperan dalam menyarikan serta mengembangkan talenta mahasiswa melalui seleksi atau pemantauan dari kegiatan dan perlombaan internal di tingkat fakultas (I'M KOM Cup). Tujuannya adalah untuk mencari individu yang memiliki potensi unggul di bidang seni, olahraga, maupun keterampilan lainnya, yang kemudian dapat direpresentasikan dalam ajang kompetisi antar fakultas di tingkat universitas mewakili Fakultas Ilmu Komunikasi.</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DivisiMiba;