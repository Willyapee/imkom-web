import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import divisiHumas from "../assets/IMKOM/divisi-humas-2.png";
import humasIndvWebp from "../assets/IMKOM/humas-indv-2.webp";
import humasIndvPng from "../assets/IMKOM/humas-indv.png";
import ImageSlider from "./ImageSlider";
import stuban1 from "../assets/PROKER/HUMAS/StudiBanding/Stuban-1.jpg";
import stuban2 from "../assets/PROKER/HUMAS/StudiBanding/Stuban-2.jpg";
import stuban3 from "../assets/PROKER/HUMAS/StudiBanding/Stuban-3.jpg";
import stuban4 from "../assets/PROKER/HUMAS/StudiBanding/Stuban-4.jpg";
import stuban5 from "../assets/PROKER/HUMAS/StudiBanding/Stuban-5.jpg";
import stuban6 from "../assets/PROKER/HUMAS/StudiBanding/Stuban-6.jpg";
import stuban7 from "../assets/PROKER/HUMAS/StudiBanding/Stuban-7.jpg";
import stuban8 from "../assets/PROKER/HUMAS/StudiBanding/Stuban-8.jpg";
import stuban9 from "../assets/PROKER/HUMAS/StudiBanding/Stuban-9.jpg";
import stuban10 from "../assets/PROKER/HUMAS/StudiBanding/Stuban-10.jpg";
import stuban11 from "../assets/PROKER/HUMAS/StudiBanding/Stuban-11.jpg";
import studiVisit1 from "../assets/PROKER/HUMAS/StudiVisit/studi-visit-1.jpeg";
import studiVisit2 from "../assets/PROKER/HUMAS/StudiVisit/studi-visit-2.jpg";
import studiVisit3 from "../assets/PROKER/HUMAS/StudiVisit/studi-visit-3.jpeg";
import studiVisit4 from "../assets/PROKER/HUMAS/StudiVisit/studi-visit-4.jpg";
import studiVisit5 from "../assets/PROKER/HUMAS/StudiVisit/studi-visit-5.jpeg";
import studiVisit6 from "../assets/PROKER/HUMAS/StudiVisit/studi-visit-6.jpeg";
import studiVisit7 from "../assets/PROKER/HUMAS/StudiVisit/studi-visit-7.jpeg";
import studiVisit8 from "../assets/PROKER/HUMAS/StudiVisit/studi-visit-8.jpeg";
import studiVisit9 from "../assets/PROKER/HUMAS/StudiVisit/studi-visit-9.jpeg";
import studiVisit10 from "../assets/PROKER/HUMAS/StudiVisit/studi-visit-10.jpg";
import makrab1 from "../assets/PROKER/HUMAS/Makrab/Makrab-1.jpg";
import makrab2 from "../assets/PROKER/HUMAS/Makrab/Makrab-2.jpg";
import makrab3 from "../assets/PROKER/HUMAS/Makrab/Makrab-3.jpg";
import makrab4 from "../assets/PROKER/HUMAS/Makrab/Makrab-4.jpg";
import makrab5 from "../assets/PROKER/HUMAS/Makrab/Makrab-5.jpg";
import birthday1 from "../assets/PROKER/HUMAS/BirthdayBash/Birthday-1.jpg";
import birthday2 from "../assets/PROKER/HUMAS/BirthdayBash/Birthday-2.jpg";
import birthday3 from "../assets/PROKER/HUMAS/BirthdayBash/Birthday-3.jpg";
import birthday4 from "../assets/PROKER/HUMAS/BirthdayBash/Birthday-4.jpg";
import birthday5 from "../assets/PROKER/HUMAS/BirthdayBash/Birthday-5.jpg";
import birthday6 from "../assets/PROKER/HUMAS/BirthdayBash/Birthday-6.jpg";
import birthday7 from "../assets/PROKER/HUMAS/BirthdayBash/Birthday-7.jpg";
import styles from "./DivisiHumas.module.css";

const DivisiHumas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

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

  const studiBandingSlides = [
    { url: stuban1, title: "Studi Banding 1" },
    { url: stuban2, title: "Studi Banding 2" },
    { url: stuban3, title: "Studi Banding 3" },
    { url: stuban4, title: "Studi Banding 4" },
    { url: stuban5, title: "Studi Banding 5" },
    { url: stuban6, title: "Studi Banding 6" },
    { url: stuban7, title: "Studi Banding 7" },
    { url: stuban8, title: "Studi Banding 8" },
    { url: stuban9, title: "Studi Banding 9" },
    { url: stuban10, title: "Studi Banding 10" },
    { url: stuban11, title: "Studi Banding 11" },
  ];

  const studiVisitSlides = [
    { url: studiVisit1, title: "Studi Visit 1" },
    { url: studiVisit2, title: "Studi Visit 2" },
    { url: studiVisit3, title: "Studi Visit 3" },
    { url: studiVisit4, title: "Studi Visit 4" },
    { url: studiVisit5, title: "Studi Visit 5" },
    { url: studiVisit6, title: "Studi Visit 6" },
    { url: studiVisit7, title: "Studi Visit 7" },
    { url: studiVisit8, title: "Studi Visit 8" },
    { url: studiVisit9, title: "Studi Visit 9" },
    { url: studiVisit10, title: "Studi Visit 10" },
  ];

  const makrabSlides = [
    { url: makrab1, title: "Makrab 1" },
    { url: makrab2, title: "Makrab 2" },
    { url: makrab3, title: "Makrab 3" },
    { url: makrab4, title: "Makrab 4" },
    { url: makrab5, title: "Makrab 5" },
  ];

  const birthdayBashSlides = [
    { url: birthday1, title: "Birthday Bash 1" },
    { url: birthday2, title: "Birthday Bash 2" },
    { url: birthday3, title: "Birthday Bash 3" },
    { url: birthday4, title: "Birthday Bash 4" },
    { url: birthday5, title: "Birthday Bash 5" },
    { url: birthday6, title: "Birthday Bash 6" },
    { url: birthday7, title: "Birthday Bash 7" },
  ];

  const sliderStyles = {
    width: isMobile ? "100%" : "90%",
    margin: "0 auto",
  };

  return (
    <div className={styles['divisi-humas-wrapper-2']}>
      <Header />
      <main className={styles['divisi-humas-main-2']}>
        <section ref={section1Ref} className={styles['divisi-humas-intro']}>
          <div className={styles['section-content']}>
            <div className={styles['divisi-humas-top-2']}>
              <img src={divisiHumas} alt="Divisi Humas" className={styles['divisi-humas-image-2']} />
              <div className={styles['divisi-humas-titles-2']}>
                <h1 className={styles['humas-title-2']}>HUMAS</h1>
                <h2 className={styles['humas-subtitle-2']}>Hubungan Masyarakat</h2>
              </div>
            </div>
            <div className={styles['description-box-2']}>
              <p>
                Divisi HUMAS adalah divisi yang berperan dalam membangun citra dan menjaga relasi yang baik antara I'M KOM dengan berbagai pihak di internal, eksternal maupun alumni FIKOM UMN.
              </p>
            </div>
          </div>
        </section>
        <section ref={section2Ref} className={styles['individual-image-section']}>
          <div className={styles['section-content']}>
            <picture>
              <source srcSet={humasIndvWebp} type="image/webp" />
              <img src={humasIndvPng} alt="Humas Individuals" className={styles['individual-image']} loading="lazy" />
            </picture>
          </div>
        </section>
        <section ref={section3Ref} className={styles['division-page-3']}>
          <div className={styles['section-content']}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA HUMAS</h1>
            <div className={styles['image-slider-container']} style={sliderStyles}>
              <ImageSlider slides={studiBandingSlides} autoPlay={true} showButtons={true} showIndicators={true} />
            </div>
            <h2 className={styles['division-subtitle-3']}>Studi Banding</h2>
            <div className={styles['division-content-3']}>
              <p>
                Studi Banding adalah salah satu proker HUMAS untuk mempererat hubungan I'M KOM dengan himpunan dari Internal UMN maupun Eksternal. Studi banding ini adalah satu kegiatan sharing, kunjungan (dari Komunitas Eksternal UMN ke UMN), dan focus group discussion antar himpunan internal maupun eksternal dari sistem kerja, kendala, atau kebijakan yang ada di setiap himpunan. Dalam I'M KOM GEN XV ini kita sudah menjalankan Studi Banding bersama Universitas Tarumanagara (BEM FIKOM UNTAR).
              </p>
            </div>
          </div>
        </section>
        <section ref={section4Ref} className={styles['division-page-3']}>
          <div className={styles['section-content']}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA HUMAS</h1>
            <div className={styles['image-slider-container']} style={sliderStyles}>
              <ImageSlider slides={studiVisitSlides} autoPlay={true} showButtons={true} showIndicators={true} />
            </div>
            <h2 className={styles['division-subtitle-3']}>Studi Visit</h2>
            <div className={styles['division-content-3']}>
              <p>
                Kegiatan studi visit ini merupakan program kolaboratif antar I'M KOM dengan Himpunan komunikasi dari Universitas lain yang bertujuan untuk membangun relasi, memperluas wawasan, dan saling berbagi pengetahuan seputar dunia komunikasi, organisasi, dan pengembangan kreativitas mahasiswa. Dalam I'M KOM GEN XV ini sudah menjalankan Studi Visit bersama Owl Club dari Universitas Prasetiya Mulya.
              </p>
            </div>
          </div>
        </section>
        <section ref={section5Ref} className={styles['division-page-3']}>
          <div className={styles['section-content']}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA HUMAS</h1>
            <div className={styles['image-slider-container']} style={sliderStyles}>
              <ImageSlider slides={makrabSlides} autoPlay={true} showButtons={true} showIndicators={true} />
            </div>
            <h2 className={styles['division-subtitle-3']}>MAKRAB I'M KOM</h2>
            <div className={styles['division-content-3']}>
              <p>
                Makrab I'M KOM (Malam Keakraban Ikatan Mahasiswa Komunikasi) adalah program kerja dari divisi Humas yang merupakan kegiatan rutin yang diselenggarakan setiap tahunnya untuk mempererat hubungan antar mahasiswa Ilmu Komunikasi, baik antar angkatan maupun antar anggota dan pengurus organisasi. Kegiatan ini biasanya diisi dengan berbagai aktivitas seperti games, sesi sharing, penampilan seni, dan refleksi malam yang bertujuan membangun rasa kekeluargaan, solidaritas, serta semangat berorganisasi. Bertempat di lokasi yang bernuansa alam seperti villa atau area terbuka, Makrab menjadi momen yang hangat dan menyenangkan untuk saling mengenal lebih dekat di luar konteks akademik, sekaligus memperkuat identitas dan nilai-nilai dalam komunitas IMKOM.
              </p>
            </div>
          </div>
        </section>
        <section ref={section6Ref} className={styles['division-page-3']}>
          <div className={styles['section-content']}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA HUMAS</h1>
            <div className={styles['image-slider-container']} style={sliderStyles}>
              <ImageSlider slides={birthdayBashSlides} autoPlay={true} showButtons={true} showIndicators={true} />
            </div>
            <h2 className={styles['division-subtitle-3']}>Birthday Bash</h2>
            <div className={styles['division-content-3']}>
              <p>
                Birthday Bash I'M KOM adalah program dari divisi Humas yang diselenggarakan untuk merayakan ulang tahun organisasi I'M KOM yang jatuh pada tanggal 25 November. Acara ini bertujuan untuk memperingati hari jadi I'M KOM sekaligus mempererat tali silaturahmi antar anggota, pengurus aktif, dan juga alumni. Dalam perayaannya, Birthday Bash dikemas secara hangat dan meriah melalui berbagai kegiatan seperti games, potong kue ulang tahun, serta sesi refleksi perjalanan organisasi. Kehadiran alumni pengurus menjadi bagian penting dalam acara ini, sebagai bentuk penghargaan atas kontribusi mereka sekaligus membuka ruang berbagi cerita dan inspirasi lintas generasi dalam keluarga besar Ilmu Komunikasi.
              </p>
            </div>
          </div>
        </section>
        <section ref={section6Ref} className={styles['media-partnership-section']}>
          <div className={styles['section-content']}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA HUMAS</h1>
            <div className={styles['media-partnership-container']}>
              <div>
                <h2 className={styles['media-partnership-title']}>Media Partnership</h2>
                <div className={styles['media-partnership-box']}>
                  <p className={styles['media-partnership-content']}>
                    Media partnership oleh Divisi Humas I'M KOM adalah bentuk kerja sama dengan organisasi, komunitas, atau pihak eksternal maupun internal untuk membantu publikasi acara mereka melalui media milik I'M KOM. Kerja sama ini mencakup penyebaran informasi lewat Instagram, poster, atau platform lainnya, sebagai bentuk dukungan promosi sekaligus memperluas jaringan dan eksistensi I'M KOM di ranah komunikasi kampus.
                  </p>
                </div>
              </div>
              <div>
                <h2 className={styles['media-partnership-title']}>Citra I'M KOM</h2>
                <div className={styles['media-partnership-box']}>
                  <p className={styles['media-partnership-content']}>
                    I'M KOM dikenal sebagai himpunan yang aktif dan komunikatif, dengan citra yang ramah serta profesional. Citra ini dijaga salah satunya melalui peran Divisi Humas yang rutin mengirimkan ucapan hari raya kepada himpunan lain di UMN. Melalui email resmi dan desain ucapan yang representatif, Humas I'M KOM membangun hubungan baik antar himpunan dan menunjukkan sikap menghargai keberagaman, sekaligus memperkuat identitas I'M KOM sebagai organisasi yang peduli dan terbuka terhadap kolaborasi lintas komunitas.
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

export default DivisiHumas;