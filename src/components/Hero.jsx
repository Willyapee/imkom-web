import React from "react";
import "./Hero.css";
import logo from "../assets/logo hero.png";
import background from "../assets/background 1.png";
import trioCheetah from "../assets/trio-cheetah.png";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${background})` }}>
      <img src={logo} alt="Logo" className="hero-logo" loading="eager"/>
      <div className="hero-text">
        <h1 className="gen-xv">GEN XV</h1>
        <h1 className="im-kom">I'M KOM</h1>
        <p className="tagline">BERDEDIKASI SATUKAN HATI</p>
      </div>
      <div className="hero-cheetahs">
        <img src={trioCheetah} alt="Trio Cheetah Mascots" loading="eager"/>
      </div>
    </section>
  );
};

export default Hero;