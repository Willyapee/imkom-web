import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import divisiBph from "../assets/IMKOM/divisi-bph-2.png";
import bphIndvWebp from "../assets/IMKOM/bph-indv-2.webp";
import bphIndvPng from "../assets/IMKOM/bph-indv.png";
import background3 from "../assets/background 3.png";
import ImageSlider from "./ImageSlider";
import bphBersama1 from "../assets/PROKER/BPH/BERSAMA/bph-bersama-1.jpg";
import bphBersama2 from "../assets/PROKER/BPH/BERSAMA/bph-bersama-2.jpg";
import bphBersama3 from "../assets/PROKER/BPH/BERSAMA/bph-bersama-3.jpg";
import bphBersama4 from "../assets/PROKER/BPH/BERSAMA/bph-bersama-4.jpg";
import bphBersama5 from "../assets/PROKER/BPH/BERSAMA/bph-bersama-5.jpg";
import bphBersama6 from "../assets/PROKER/BPH/BERSAMA/bph-bersama-6.jpg";
import "./Proker.css";
import styles from "./DivisiBph.module.css";

const DivisiBph = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  useEffect(() => {
    const essentialImages = [background3, divisiBph, bphIndvWebp, bphIndvPng];
    essentialImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setTimeout(() => {
      const sliderImages = [
        bphBersama1,
        bphBersama2,
        bphBersama3,
        bphBersama4,
        bphBersama5,
        bphBersama6,
      ];
      sliderImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const bersamaSlides = [
    { url: bphBersama1, title: "Bersama 1" },
    { url: bphBersama2, title: "Bersama 2" },
    { url: bphBersama3, title: "Bersama 3" },
    { url: bphBersama4, title: "Bersama 4" },
    { url: bphBersama5, title: "Bersama 5" },
    { url: bphBersama6, title: "Bersama 6" },
  ];

  return (
    <div className={styles['divisi-bph-wrapper-2']}>
      <Header />
      <main className={styles['divisi-bph-main-2']}>
        <section ref={section1Ref} className={styles['divisi-bph-intro']}>
          <div className={styles['section-content']}>
            <div className={styles['divisi-bph-top-2']}>
              <img
                src={divisiBph}
                alt="Divisi BPH"
                className={styles['divisi-bph-image-2']}
              />
              <div className={styles['divisi-bph-titles-2']}>
                <h1 className={styles['bph-title-2']}>BPH</h1>
                <h2 className={styles['bph-subtitle-2']}>Badan Pengurus Harian</h2>
              </div>
            </div>
            <div className={styles['description-box-2']}>
              <p>
                BPH berperan sebagai perencana, pengawas, dan pengembang sistem
                dari manajemen I'M KOM. Selain itu, BPH juga mengkoordinasi
                keperluan sehari-hari bagi I'M KOM, baik dalam lingkup internal
                maupun lingkup eksternal.
              </p>
            </div>
          </div>
        </section>

        <section ref={section2Ref} className={styles['individual-image-section']}>
          <div className={styles['section-content']}>
            <picture>
              <source srcSet={bphIndvWebp} type="image/webp" />
              <img
                src={bphIndvPng}
                alt="BPH Individuals"
                className={styles['individual-image']}
              />
            </picture>
          </div>
        </section>

        <section ref={section3Ref} className={styles['division-page']}>
          <div className={styles['section-content']}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA BPH</h1>
            <div className={styles['image-slider-container']}>
              <ImageSlider
                slides={bersamaSlides}
                autoPlay={true}
                showButtons={true}
                showIndicators={true}
              />
            </div>
            <h2 className={styles['division-subtitle-3']}>BERSAMA</h2>
            <div className={styles['division-content-3']}>
              <p>
                Bersama merupakan bonding BPH program kerja besar di bawah
                naungan I'M KOM yang dilaksanakan untuk menyeleraskan timeline
                serta membangun hubungan yang baik antar BPH program kerja besar
                melalui berbagai games yang menarik.
              </p>
            </div>
          </div>
        </section>

        <section ref={section4Ref} className={styles['program-kerja-cards-section']}>
          <div className={`${styles['section-content']} ${styles['last-section']}`}>
            <h1 className={styles['program-kerja-title']}>PROGRAM KERJA BPH</h1>
            <div className={styles['program-kerja-cards']}>
              <div className={styles['program-card']}>
                <h3 className={styles['card-title']}>Ruang Rasa</h3>
                <div className={styles['card-content']}>
                  <p className={styles['card-description']}>
                    Ruang Rasa merupakan kegiatan one on one sharing session antara 
                    anggota dan PJ divisi yang ditujukan bagi seluruh pengurus I'M KOM 
                    untuk menyampaikan keluhan, ingin menyampaikan apa yang ia rasakan, 
                    dan lain sebagainya. Sebagai BPH, kami memastikan kesejahteraan dari 
                    seluruh pengurus dan siap menjadi pendengar yang baik dari setiap 
                    cerita-cerita mereka.
                  </p>
                </div>
              </div>
              <div className={styles['program-card']}>
                <h3 className={styles['card-title']}>Supervisor</h3>
                <div className={styles['card-content']}>
                  <p className={styles['card-description']}>
                    Masing-masing BPH akan berperan sebagai supervisor dari program 
                    kerja besar I'M KOM untuk memastikan acara tersebut dapat berjalan 
                    dengan lancar dan membantu menjembatani komunikasi BPH program kerja 
                    besar dengan pihak BEM, student development, maupun program studi.
                  </p>
                </div>
              </div>
              <div className={styles['program-card']}>
                <h3 className={styles['card-title']}>Evaluasi Rasa</h3>
                <div className={styles['card-content']}>
                  <p className={styles['card-description']}>
                    Evaluasi Rasa merupakan kegiatan yang serupa dengan Ruang Rasa, 
                    namun sesi sharing dilaksanakan antara satu divisi dengan PJ divisi 
                    yang ditujukan untuk seluruh anggota divisi I'M KOM agar bisa 
                    menyampaikan keluhan yang mereka alami sebagai satu divisi dan 
                    membahas terkait masalah internal yang terjadi agar dapat segera 
                    diselesaikan secara terbuka dan efektif.
                  </p>
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

export default DivisiBph;