import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Divisi.css";
import ImageSliderMultiPane from "./ImageSliderMultiPane";
import ImagePreloader from "./ImagePreloader";

// Backgrounds
import background from '../assets/background 1.png';
import background2 from '../assets/background 2.png';

// Divisi Images
import divisiImage from '../assets/ELEMEN/divisi-one.png';
import divisiBph from '../assets/IMKOM/divisi-bph.png';
import divisiHumas from '../assets/IMKOM/divisi-humas.png';
import divisiKominfo from '../assets/IMKOM/divisi-kominfo.png';
import divisiMiba from '../assets/IMKOM/divisi-miba.png';
import divisiApm from '../assets/IMKOM/divisi-apm.png';

// PIKOM Logo
import pikomLogo from '../assets/PROKER/LOGO/pikom.png';

// Pikom Images
import pikom1 from '../assets/PROKER/KOLABORASI/PIKOM/pikom1.jpg';
import pikom2 from '../assets/PROKER/KOLABORASI/PIKOM/pikom2.jpg';
import pikom3 from '../assets/PROKER/KOLABORASI/PIKOM/pikom3.jpg';
import pikom4 from '../assets/PROKER/KOLABORASI/PIKOM/pikom4.jpg';
import pikom5 from '../assets/PROKER/KOLABORASI/PIKOM/pikom5.jpg';
import pikom6 from '../assets/PROKER/KOLABORASI/PIKOM/pikom6.jpg';
import pikom7 from '../assets/PROKER/KOLABORASI/PIKOM/pikom7.jpg';
import pikom8 from '../assets/PROKER/KOLABORASI/PIKOM/pikom8.jpg';
import pikom9 from '../assets/PROKER/KOLABORASI/PIKOM/pikom9.jpg';
import pikom10 from '../assets/PROKER/KOLABORASI/PIKOM/pikom10.jpg';
import pikom11 from '../assets/PROKER/KOLABORASI/PIKOM/pikom11.jpg';
import pikom12 from '../assets/PROKER/KOLABORASI/PIKOM/pikom12.jpg';
import pikom13 from '../assets/PROKER/KOLABORASI/PIKOM/pikom13.jpg';
import pikom14 from '../assets/PROKER/KOLABORASI/PIKOM/pikom14.jpg';
import pikom15 from '../assets/PROKER/KOLABORASI/PIKOM/pikom15.jpg';
import pikom16 from '../assets/PROKER/KOLABORASI/PIKOM/pikom16.jpg';
import pikom17 from '../assets/PROKER/KOLABORASI/PIKOM/pikom17.jpg';
import pikom18 from '../assets/PROKER/KOLABORASI/PIKOM/pikom18.jpg';
import pikom19 from '../assets/PROKER/KOLABORASI/PIKOM/pikom19.jpg';
import pikom20 from '../assets/PROKER/KOLABORASI/PIKOM/pikom20.jpg';
import pikom21 from '../assets/PROKER/KOLABORASI/PIKOM/pikom21.jpg';

// OHW Images
import ohw1 from '../assets/PROKER/KOLABORASI/OHW/ohw1.jpg';
import ohw2 from '../assets/PROKER/KOLABORASI/OHW/ohw2.jpg';
import ohw3 from '../assets/PROKER/KOLABORASI/OHW/ohw3.jpg';
import ohw4 from '../assets/PROKER/KOLABORASI/OHW/ohw4.jpg';
import ohw5 from '../assets/PROKER/KOLABORASI/OHW/ohw5.jpg';
import ohw6 from '../assets/PROKER/KOLABORASI/OHW/ohw6.jpg';
import ohw7 from '../assets/PROKER/KOLABORASI/OHW/ohw7.jpg';
import ohw8 from '../assets/PROKER/KOLABORASI/OHW/ohw8.jpg';

const pikomSlides = [
  pikom1, pikom2, pikom3, pikom4, pikom5, pikom6, pikom7,
  pikom8, pikom9, pikom10, pikom11, pikom12, pikom13, pikom14,
  pikom15, pikom16, pikom17, pikom18, pikom19, pikom20, pikom21,
].map((img, index) => ({ url: img, title: `PIKOM ${index + 1}` }));

const ohwSlides = [
  ohw1, ohw2, ohw3, ohw4, ohw5, ohw6, ohw7, ohw8
].map((img, index) => ({ url: img, title: `OHW ${index + 1}` }));

const preloadImages = [
  background, background2,
  divisiImage, divisiBph, divisiHumas, divisiKominfo, divisiMiba, divisiApm,
  pikomLogo,
  ...pikomSlides.map(s => s.url),
  ...ohwSlides.map(s => s.url)
];

function Divisi() {
  return (
    <ImagePreloader images={preloadImages}>
    <div className="divisi-wrapper">
      <Header />
      
      <section className="divisi" style={{ backgroundImage: `url(${background2})` }}>
        <div className="divisi-container">
          <img src={divisiImage} alt="Divisi Image" className="divisi-image" />
        </div>
      </section>

      <section className="divisi-bph" style={{ backgroundImage: `url(${background})` }}>
        <div className="divisi-bph-container">
          <div className="divisi-bph-text-container">
            <h2 className="divisi-bph-title">BPH</h2>
            <p className="divisi-bph-description">
              BPH adalah akronim dari Badan Pengurus Harian yang mengurus kinerja keseluruhan I'M KOM Gen XV.
            </p>
          </div>
          <div className="divisi-bph-image-container">
            <img src={divisiBph} alt="Divisi BPH" className="divisi-bph-image" />
            <Link to="/divisi/bph" className="divisi-bph-link">Click for more information</Link>
          </div>
        </div>
      </section>

      <section className="divisi-humas" style={{ backgroundImage: `url(${background2})` }}>
        <div className="divisi-humas-container">
          <div className="divisi-humas-image-container">
            <img src={divisiHumas} alt="Divisi Humas" className="divisi-humas-image" />
            <Link to="/divisi/humas" className="divisi-humas-link">Click for more information</Link>
          </div>
          <div className="divisi-humas-text-container">
            <h2 className="divisi-humas-title">HUMAS</h2>
            <p className="divisi-humas-description">
              HUMAS adalah divisi yang berperan dalam membangun citra dan menjaga relasi yang baik antara I'M KOM dengan berbagai pihak di internal, eksternal maupun alumni FIKOM UMN.
            </p>
          </div>
        </div>
      </section>

      <section className="divisi-kominfo" style={{ backgroundImage: `url(${background})` }}>
        <div className="divisi-kominfo-container">
          <div className="divisi-kominfo-text-container">
            <h2 className="divisi-kominfo-title">KOMINFO</h2>
            <p className="divisi-kominfo-description">
              KOMINFO bertugas untuk memproduksi konten-konten menarik serta interaktif untuk para mahasiswa/i FIKOM UMN. Dokumentasi dari setiap kegiatan I'M KOM juga merupakan tugas dari divisi ini.
            </p>
          </div>
          <div className="divisi-kominfo-image-container">
            <img src={divisiKominfo} alt="Divisi KOMINFO" className="divisi-kominfo-image" />
            <Link to="/divisi/kominfo" className="divisi-kominfo-link">Click for more information</Link>
          </div>
        </div>
      </section>

      <section className="divisi-miba" style={{ backgroundImage: `url(${background2})` }}>
        <div className="divisi-miba-container">
          <div className="divisi-miba-image-container">
            <img src={divisiMiba} alt="Divisi MIBA" className="divisi-miba-image" />
            <Link to="/divisi/miba" className="divisi-miba-link">Click for more information</Link>
          </div>
          <div className="divisi-miba-text-container">
            <h2 className="divisi-miba-title">MIBA</h2>
            <p className="divisi-miba-description">
              MIBA mengurus segala kegiatan mengenai perlombaan dan kompetisi yang diadakan oleh pihak internal maupun eksternal UMN. Selain itu, menjadi wadah bagi minat dan bakat mahasiswa FIKOM.
            </p>
          </div>
        </div>
      </section>

      <section className="divisi-apm" style={{ backgroundImage: `url(${background})` }}>
        <div className="divisi-apm-container">
          <div className="divisi-apm-text-container">
            <h2 className="divisi-apm-title">APM</h2>
            <p className="divisi-apm-description">
              APM berperan untuk menjembatani hubungan mahasiswa dengan prodi, meliputi informasi seputar perkuliahan, permasalahan akademik, serta memenuhi kebutuhan mahasiswa terkait dengan ilmu komunikasi.
            </p>
          </div>
          <div className="divisi-apm-image-container">
            <img src={divisiApm} alt="Divisi APM" className="divisi-apm-image" />
            <Link to="/divisi/apm" className="divisi-apm-link">Click for more information</Link>
          </div>
        </div>
      </section>

      {/* === PIKOM === */}
      <section className="divisi-kolaborasi-4" style={{ backgroundImage: `url(${background2})` }}>
        <div className="section-content-4">
          <h1 className="divisi-subtitle">PIKOM</h1>
          <div className="image-slider-container-4">
            <ImageSliderMultiPane
              slides={pikomSlides}
              autoPlay={true}
              showButtons={true}
            />
          </div>
          <div className="bottom-content-4">
            <div className="logo-container-4">
              <img src={pikomLogo} alt="PIKOM Logo" className="pikom-logo" />
            </div>
            <div className="description-container-4">
              <div className="description-box">
                <p>
                  PIKOM adalah sebuah workshop tahunan yang diadakan oleh divisi APM dan bertujuan untuk mengasah kemampuan mahasiswa agar mampu meningkatkan daya saing mereka di masa depan. Pada pelaksanaan di tahun-tahun sebelumnya, PIKOM telah mengambil tema seperti penggunaan AI dalam Canva, pembedahan CV, dan sebagainya. Pada tahun 2025, melalui penggabungan dengan seminar Kom Menjadi Konten Kreator (KOMENTATOR) dan kolaborasi dengan divisi Minat Bakat, PIKOM membawa topik yang membahas tentang pemanfaatan algoritma media sosial untuk para mahasiswa FIKOM yang ingin menjadi konten kreator. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === OHW === */}
      <section className="divisi-ohw-5" style={{ backgroundImage: `url(${background})` }}>
        <div className="section-content-5">
          <h1 className="divisi-subtitle">Open House & Workshop</h1>
          <div className="image-slider-container-5">
            <ImageSliderMultiPane
              slides={ohwSlides}
              autoPlay={true}
              showButtons={true}
            />
          </div>
          <div className="description-box">
            <p>
              Divisi APM dan Minat & Bakat bertanggung jawab dalam mengkoordinasi kegiatan perkenalan fakultas Ilmu Komunikasi dalam booth Open House. Selain itu, mereka juga bertugas untuk menggelar workshop dari program studi Komunikasi Strategis dan Jurnalistik sebagai bagian dari rangkaian kegiatan Campus Visit. Dalam workshop ini, peserta akan mendapatkan pemaparan mengenai informasi umum, mata kuliah, fasilitas, dan keunggulan yang ada di dalam kedua jurusan tersebut. Selain itu, akan ada juga praktik langsung yang diharapkan dapat menjadi gambaran pembelajaran mata kuliah yang telah ditentukan.
            </p>
          </div>
        </div>
      </section>

      {/* === Gathering PJJ & KOMZATION === */}
      <section className="divisi-third-6" style={{ backgroundImage: `url(${background2})` }}>
        <div className="section-content-6">
          <h2 className="divisi-subtitle" style={{ marginTop: '1.5rem' }}>Gathering PJJ</h2>
          <div className="description-box">
            <p>
              Kegiatan gathering PJJ UMN merupakan ajang temu tatap muka yang dirancang khusus bagi mahasiswa program Pembelajaran Jarak Jauh (PJJ) Ilmu Komunikasi untuk saling mengenal, mempererat hubungan, serta membangun rasa kebersamaan di luar lingkungan belajar daring. Sebagai program yang mayoritas berlangsung secara online, mahasiswa PJJ Ilmu Komunikasi UMN seringkali belum memiliki kesempatan untuk bertemu langsung dengan teman sekelas, dosen, ataupun pengelola program. Oleh karena itu, gathering ini menjadi momen penting untuk membangun sense of belonging terhadap komunitas PJJ Ilmu Komunikasi UMN.
            </p>
          </div>
          <h2 className="divisi-subtitle" style={{ marginTop: '1rem' }}>Komzation (I'M KOM Socialization)</h2>
          <div className="description-box">
            <p>
              Komzation atau I'M KOM Socialization adalah program kolaborasi antara divisi KOMINFO dengan MIBA. Komzation adalah kegiatan yang bertujuan untuk mensosialisasikan dan memperkenalkan I'M KOM sebagai himpunan mahasiswa fakultas ilmu komunikasi kepada mahasiswa baru.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </ImagePreloader>
  );
}

export default Divisi;