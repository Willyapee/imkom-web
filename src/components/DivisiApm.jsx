import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import divisiApm from "../assets/IMKOM/divisi-apm-2.png";
import apmIndvWebp from "../assets/IMKOM/apm-indv-2.webp";
import apmIndvPng from "../assets/IMKOM/apm-indv.png";
import background3 from "../assets/background 3.png";
import p3kmImg from "../assets/ELEMEN/P3KM.jpg";
import litImg from "../assets/IMKOM/LIT.jpg";
import styles from "./DivisiApm.module.css";

const DivisiApm = () => {
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

  return (
    <div className={styles['divisi-apm-wrapper-2']}>
      <Header />
      <main className={styles['divisi-apm-main-2']}>
        <section className={styles['divisi-apm-intro']}>
          <div className={styles['section-content']}>
            <div className={styles['divisi-apm-top-2']}>
              <img src={divisiApm} alt="Divisi Apm" className={styles['divisi-apm-image-2']} />
              <div className={styles['divisi-apm-titles-2']}>
                <h1 className={styles['apm-title-2']}>APM</h1>
                <h2 className={styles['apm-subtitle-2']}>Advokasi Pelayanan Mahasiswa</h2>
              </div>
            </div>
            <div className={styles['description-box-2']}>
              <p>
                Divisi APM berperan untuk menjembatani hubungan mahasiswa dengan prodi, meliputi informasi seputar perkuliahan, permasalahan akademik, serta memenuhi kebutuhan mahasiswa terkait dengan ilmu komunikasi.
              </p>
            </div>
          </div>
        </section>
        <section className={styles['individual-image-section']}>
          <div className={styles['section-content']}>
            <picture>
              <source srcSet={apmIndvWebp} type="image/webp" />
              <img src={apmIndvPng} alt="APM Individuals" className={styles['individual-image']} loading="lazy" />
            </picture>
          </div>
        </section>
        <section className={`${styles['division-page-3']} ${styles['p3km-section']}`}>
          <div className={styles['section-content']}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA APM</h1>
            <div className={styles['program-section']}>
              <div className={styles['program-image-container']}>
                <img src={p3kmImg} alt="P3KM" className={styles['program-image-1']} loading="lazy" />
                <a href="https://p3km.carrd.co/" target="_blank" rel="noopener noreferrer" className={styles['p3km-link']}>Visit P3KM</a>
              </div>
              <div className={styles['program-text']}>
                <h2 className={styles['program-subtitle-3']}>P3KM</h2>
                <div className={styles['program-box']}>
                  <p><strong>P3KM atau Pertolongan Pertama Pada Kebingungan Mahasiswa adalah situs carrd yang disusun oleh APM untuk mempermudah mahasiswa dalam mengakses berbagai informasi penting seputar perkuliahan. Situs ini memiliki berbagai aspek seperti rangkuman informasi terkait magang, tugas akhir, MBKM Track 2, tautan ke berbagai forms penunjang akademik, dan lain sebagainya. Untuk menjaga relevansi, situs ini diperbarui secara berkala oleh divisi APM. P3KM juga hadir dalam format lain seperti konten media sosial; dengan cakupan yang lebih luas—seperti pembahasan mengetahui mata kuliah dan pemaparan handbook.</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles['division-page-3']} ${styles['lit-section']}`}>
          <div className={styles['section-content']}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA APM</h1>
            <div className={styles['program-section']}>
              <div className={styles['program-text']}>
                <h2 className={styles['program-subtitle-3']}>LIT WITH KOM</h2>
                <div className={styles['program-box']}>
                  <p><strong>Divisi APM membantu proses berjalannya tutor wajib bagi para mahasiswa penerima beasiswa prestasi. Tutor wajib ini bertujuan untuk membantu pemahaman mahasiswa (terutama yang mengulang) perihal mata kuliah di program studi Komunikasi Strategis dan Jurnalistik baik melalui pengajaran teoretis, maupun lewat berbagai tips yang relevan.</strong></p>
                </div>
              </div>
              <div className={styles['program-image-container']}>
                <img src={litImg} alt="LIT WITH KOM" className={styles['program-image-2']} loading="lazy" />
              </div>
            </div>
          </div>
        </section>
        <section className={styles['division-page-3']}>
          <div className={`${styles['section-content']} ${styles['last-section']}`}>
            <h1 className={styles['division-title-3']}>PROGRAM KERJA APM</h1>
            <div className={styles['multi-subtitle-section']}>
              <div className={styles['subtitle-group']}>
                <h2 className={styles['program-subtitle-3']}>Academic Guide</h2>
                <div className={`${styles['program-box']} ${styles['box-left']}`}>
                  <p><strong>Divisi APM berperan sebagai pemandu akademik bagi mahasiswa FIKOM UMN. Salah satu tugas utama kami adalah menjawab berbagai pertanyaan mahasiswa seputar kebingungan akademik melalui berbagai kanal media sosial; mulai dari tahapan magang, KRS, dan aspek lainnya yang mungkin masih belum dipahami oleh mahasiswa. APM juga rutin memberikan daily reminder melalui Instagram I'M KOM (@imkom_umn) agar mahasiswa tidak ketinggalan informasi penting yang berhubungan dengan perkuliahan.</strong></p>
                </div>
              </div>
              <div className={styles['subtitle-group']}>
                <h2 className={styles['program-subtitle-3']}>Briefing & Sosialisasi</h2>
                <div className={`${styles['program-box']} ${styles['box-center']}`}>
                  <p><strong>Divisi APM membantu berbagai penyelenggaraan briefing dan sosialisasi akademik oleh program studi Komunikasi Strategis dan Jurnalistik terkait proses magang, MBKM track 2, dan juga humanity project. Berbagai program ini diselenggarakan sebagai upaya untuk penyebarluasan informasi yang lebih jelas dan terarah.</strong></p>
                </div>
              </div>
              <div className={styles['subtitle-group']}>
                <h2 className={styles['program-subtitle-3']}>Kom's Prep</h2>
                <div className={`${styles['program-box']} ${styles['box-right']}`}>
                  <p><strong>Untuk memperdalam pemahaman mahasiswa terkait kurikulum terbaru, proses pra-KRS serta KRS, dan berbagai mata kuliah elektif di program studi masing-masing—maka divisi APM menyelenggarakan program Kom's Prep yang diwajibkan untuk tiap mahasiswa semester 3. Selain hal yang telah disebutkan, program ini juga akan menjadi wadah sosialisasi akan berbagai informasi umum yang masih banyak tidak diketahui peserta.</strong></p>
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

export default DivisiApm;