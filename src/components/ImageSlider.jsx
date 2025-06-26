import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ slides, autoPlay, showButtons, showIndicators }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload the next image when the index changes (e.g., on navigation or auto-play)
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    if (slides[nextIndex]) {
      const preloadLink = document.createElement("link");
      preloadLink.rel = "preload";
      preloadLink.as = "image";
      preloadLink.href = slides[nextIndex].url;
      document.head.appendChild(preloadLink);

      // Cleanup: remove the preload link when the index changes again
      return () => {
        document.head.removeChild(preloadLink);
      };
    }
  }, [currentIndex, slides]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000); // 3-second interval
      return () => clearInterval(interval);
    }
  }, [autoPlay, slides.length]);

  // Handle previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Handle next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Handle indicator click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-main">
        {/* Render only the current slide */}
        <div className="slider-image-wrapper">
          <img
            src={slides[currentIndex].url}
            alt={slides[currentIndex].title}
            className="slider-image"
            loading="lazy" // Lazy-load the current image
          />
        </div>
      </div>
      {showButtons && (
        <>
          <button onClick={goToPrevious} className="slider-button prev">
            ❮ {/* Left arrow */}
          </button>
          <button onClick={goToNext} className="slider-button next">
            ❯ {/* Right arrow */}
          </button>
        </>
      )}
      {showIndicators && (
        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;