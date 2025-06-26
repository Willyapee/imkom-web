import React, { useState, useEffect, useRef, useCallback } from "react";
import "./ImageSliderMultiPane.css";

const ImageSliderMultiPane = ({
  slides,
  autoPlay = true,
  showButtons = true,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const slideInterval = useRef(null);
  const isClicking = useRef(false); // Track if a click is being processed

  const updateMedia = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [updateMedia]);

  // Preload the next set of images only when navigating
  const preloadNextImages = useCallback(() => {
    const numSlidesToShow = isMobile ? 1 : 3;
    const nextIndex = (currentIndex + numSlidesToShow) % slides.length;
    const existingLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
    existingLinks.forEach(link => link.remove());

    if (slides[nextIndex]) {
      for (let i = 0; i < numSlidesToShow && nextIndex + i < slides.length; i++) {
        const preloadLink = document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "image";
        preloadLink.href = slides[(nextIndex + i) % slides.length].url;
        document.head.appendChild(preloadLink);
      }
    }
  }, [currentIndex, isMobile, slides]);

  const nextSlide = useCallback(() => {
    if (isClicking.current) return;
    isClicking.current = true;

    stopAutoPlay();
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + (isMobile ? 1 : 3) >= slides.length ? 0 : prevIndex + (isMobile ? 1 : 1);
      return newIndex;
    });
    preloadNextImages();

    setTimeout(() => {
      isClicking.current = false;
      if (autoPlay) startAutoPlay();
    }, 100);
  }, [slides.length, autoPlay, isMobile, preloadNextImages]);

  const prevSlide = useCallback(() => {
    if (isClicking.current) return;
    isClicking.current = true;

    stopAutoPlay();
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex <= 0 ? Math.max(0, slides.length - (isMobile ? 1 : 3)) : prevIndex - (isMobile ? 1 : 1);
      return newIndex;
    });
    preloadNextImages();

    setTimeout(() => {
      isClicking.current = false;
      if (autoPlay) startAutoPlay();
    }, 100);
  }, [slides.length, autoPlay, isMobile, preloadNextImages]);

  useEffect(() => {
    if (autoPlay) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [autoPlay]);

  useEffect(() => {
    if (autoPlay) {
      stopAutoPlay();
      startAutoPlay();
    }
  }, [currentIndex, autoPlay, isMobile]);

  const startAutoPlay = () => {
    stopAutoPlay();
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + (isMobile ? 1 : 3) >= slides.length ? 0 : prevIndex + (isMobile ? 1 : 1);
        return newIndex;
      });
      // Delay preloading until just before the next slide is shown
      setTimeout(preloadNextImages, 3500); // 3500ms = 4s interval - 500ms buffer
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  const renderSlides = () => {
    const visibleSlides = slides.slice(currentIndex, currentIndex + (isMobile ? 1 : 3));
    while (visibleSlides.length < (isMobile ? 1 : 3)) {
      visibleSlides.push({ url: "", title: `empty-${visibleSlides.length}` });
    }
    return (
      <div className="multi-pane-slider-wrapper">
        {visibleSlides.map((slide, index) => (
          <img
            key={`${currentIndex}-${index}`}
            src={slide.url}
            alt={slide.title || `slide-${currentIndex + index}`}
            className="multi-pane-slider-image"
            style={{ visibility: slide.url ? "visible" : "hidden" }}
            loading="lazy"
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`multi-pane-slider-container ${className}`}>
      <div className="multi-pane-slider-main">
        {showButtons && (
          <button className="multi-pane-slider-button prev" onClick={prevSlide}>
            ‹
          </button>
        )}

        {renderSlides()}

        {showButtons && (
          <button className="multi-pane-slider-button next" onClick={nextSlide}>
            ›
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageSliderMultiPane;