import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import divisiKominfo from "../assets/IMKOM/divisi-kominfo-2.png";
import kominfoIndvWebp from "../assets/IMKOM/kominfo-indv-2.webp";
import kominfoIndvPng from "../assets/IMKOM/kominfo-indv.png";
import background3 from "../assets/background 3.png";
import threeCheetah from "../assets/three-cheetah.png";
import ImageSlider from "./ImageSlider";
import bts1 from "../assets/PROKER/BTS/bts1.jpg";
import bts2 from "../assets/PROKER/BTS/bts2.jpg";
import bts3 from "../assets/PROKER/BTS/bts3.jpg";
import bts4 from "../assets/PROKER/BTS/bts4.jpg";
import bts5 from "../assets/PROKER/BTS/bts5.jpg";
import bts6 from "../assets/PROKER/BTS/bts6.jpg";
import bts7 from "../assets/PROKER/BTS/bts7.jpg";
import bts8 from "../assets/PROKER/BTS/bts8.jpg";
import bts9 from "../assets/PROKER/BTS/bts9.jpg";
import bts10 from "../assets/PROKER/BTS/bts10.jpg";
import bts11 from "../assets/PROKER/BTS/bts11.jpg";
import styles from "./DivisiKominfo.module.css";

const DivisiKominfo = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  const btsSlides = [
    { url: bts1, title: "BTS 1" },
    { url: bts2, title: "BTS 2" },
    { url: bts3, title: "BTS 3" },
    { url: bts4, title: "BTS 4" },
    { url: bts5, title: "BTS 5" },
    { url: bts6, title: "BTS 6" },
    { url: bts7, title: "BTS 7" },
    { url: bts8, title: "BTS 8" },
    { url: bts9, title: "BTS 9" },
    { url: bts10, title: "BTS 10" },
    { url: bts11, title: "BTS 11" },
  ];

  return (
    <div className={styles['divisi-kominfo-wrapper-2']}>
      <Header />
      <main className={styles['divisi-kominfo-main-2']}>
        <section className={styles['divisi-kominfo-intro']}>
          <div className={styles['section-content']}>
            <div className={styles['divisi-kominfo-top-2']}>
              <img src={divisiKominfo} alt="Divisi Kominfo" className={styles['divisi-kominfo-image-2']} />
              <div className={styles['divisi-kominfo-titles-2']}>
                <h1 className={styles['kominfo-title-2']}>KOMINFO</h1>
                <h2 className={styles['kominfo-subtitle-2']}>Komunikasi Informasi</h2>
              </div>
            </div>
            <div className={styles['description-box-2']}>
              <p>
                Divisi KOMINFO bertugas untuk memproduksi konten-konten menarik serta interaktif untuk para mahasiswa/i FIKOM UMN. Dokumentasi dari setiap kegiatan I'M KOM juga merupakan tugas dari divisi ini.
              </p>
            </div>
          </div>
        </section>
        <section className={styles['individual-image-section']}>
          <div className={styles['section-content']}>
            <picture>
              <source srcSet={kominfoIndvWebp} type="image/webp" />
              <img src={kominfoIndvPng} alt="Kominfo Individuals" className={styles['individual-image']} loading="lazy" />
            </picture>
          </div>
        </section>
        <section className={styles['video-profile-section']}>
          <div className={styles['section-content']}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA KOMINFO</h1>
            <div className={styles['video-profile-layout']}>
              <div className={styles['slider-container']}>
                <ImageSlider
                  slides={btsSlides}
                  autoPlay={true}
                  showButtons={true}
                  showIndicators={true}
                />
              </div>
              <div className={styles['video-profile-text']}>
                <h2 className={styles['program-subtitle-3']}>Video Profile</h2>
                <div className={styles['program-box']}>
                  <p>
                    Video profile himpunan merupakan sebuah video perkenalan singkat yang bertujuan untuk memeperkenalkan identitas, struktur organisasi, program kerja unggulan, serta nilai-nilai yang dijunjung oleh I'M KOM. Selain berfungsi sebagai elemen simbolik, mascot juga digunakan sebagai media komunikasi yang mampu memperkuat branding organisasi, memupuk rasa kepemilikan anggota, serta menarik perhatian pihak eksternal melalui pendekatan yang lebih personal dan kreatif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles['division-page-3']}>
          <div className={styles['section-content']}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA KOMINFO</h1>
            <div className={styles['mascot-section']}>
              <img src={threeCheetah} alt="Three Cheetahs" className={styles['mascot-image']} loading="lazy" />
              <div className={styles['mascot-text']}>
                <h2 className={styles['program-subtitle-3']}>Mascot</h2>
                <div className={styles['program-box']}>
                  <p>
                    Mascot merupakan representasi visual yang di rancang untuk mencerminkan identitas, karakteristik, serta nilai-nilai yang dijunjung oleh I'M KOM. Selain berfungsi sebagai elemen simbolik, mascot juga digunakan sebagai media komunikasi yang mampu memperkuat branding organisasi, memupuk rasa kepemilikan anggota, serta menarik perhation pihak eksternal melalui pendekatan yang lebih personal dan kreatif. KOKOM (Strategic Communication), JUNA (Digital Journalism), dan JEJE (UMN Digital Learning atau PJJ) adalah nama dari ketiga mascot I'M KOM yang sering kali diintegrasikan dalam berbagai kegiatan, media promosi, maupun merchandise, sehingga menjadi ikon yang mudah dikenali dan melekat untuk mahasiswa FIKOM UMN.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles['division-page-3']}>
          <div className={`${styles['section-content']} ${styles['last-section']}`}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA KOMINFO</h1>
            <h2 className={styles['program-subtitle-3']} style={{ textAlign: 'center' }}>Handling Media Sosial</h2>
            <div className={styles['program-box']} style={{ marginTop: '20px' }}>
              <p>
                Divisi Komunikasi dan Informasi (Kominfo) memiliki peran strategis dalam mengelola media sosial sebagai sarana komunikasi, publikasi, dan pencitraan organisasi. Hal ini mencakup perancangan dan pengelolaan konten visual serta teks untuk berbagai platform digital, menjadwalkan dan mempublikasikan informasi terkait program kerja dan kegiatan himpunan, serta membangun interaksi yang responsif dengan audiens. Selain itu, Kominfo juga bertanggung jawab untuk menjaga citra I'M KOM yang interaktif dan menarik guna meningkatkan engagement mahasiswa untuk mendukung efektivitas penyampaian informasi.
              </p>
            </div>
            <div className={styles['split-section']}>
              <div className={styles['split-item']}>
                <h2 className={styles['program-subtitle-3']}>Foto Kabinet</h2>
                <div className={styles['program-box']}>
                  <p>
                    Dokumentasi resmi yang menampilkan seluruh anggota kepengurusan I'M KOM secara individu, per divisi, dan keseluruhan dalam satu periode. Foto ini tidak hanya berfungsi sebagai bentuk pengarsipan visual, tetapi juga sebagai media pengenalan struktur organisasi kepada publik, termasuk mahasiswa, dosen, maupun pihak eksternal lainnya.
                  </p>
                </div>
              </div>
              <div className={styles['split-item']}>
                <h2 className={styles['program-subtitle-3']}>Website</h2>
                <div className={styles['program-box']}>
                  <p>
                    Divisi KOMINFO bertanggung jawab untuk merancang, memperbarui, dan memelihara konten yang ada di dalam website, termasuk profil organisasi, program kerja, publikasi kegiatan, artikel, serta pengumuman penting. Selain itu, Kominfo juga memastikan tampilan dan navigasi website tetap menarik, informatif, dan mudah diakses oleh pengguna.
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

export default DivisiKominfo;