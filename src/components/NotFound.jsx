import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Header';
import Footer from './Footer';
import backgroundImage from '../assets/background 3.png';
import jejeImage from '../assets/jeje.png';

function NotFound() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth <= 480;

  return (
    <>
      <Navbar />
      <div style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '20px 15px' : '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '20px' : '40px',
          maxWidth: '800px',
          width: '100%',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          {/* 404 text - shows first on mobile */}
          <div style={{ 
            flex: '0 0 auto', 
            textAlign: 'center',
            order: isMobile ? 1 : 2
          }}>
            <h1 style={{ 
              fontSize: isSmallMobile ? '70px' : 
                       isMobile ? '90px' : '120px',
              margin: '0', 
              color: '#eeebe3',
              fontWeight: 'bold',
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              WebkitTextStroke: '2px #771453',
              textStroke: '2px #771453',
              lineHeight: '1'
            }}>
              404
            </h1>
            <h2 style={{ 
              fontSize: isSmallMobile ? '18px' : 
                       isMobile ? '22px' : '32px',
              margin: isMobile ? '10px 0 0 0' : '20px 0 0 0',
              color: '#eeebe3',
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              WebkitTextStroke: '1px #771453',
              textStroke: '1px #771453'
            }}>
              Oops!.. Page not found!
            </h2>
          </div>

          <div style={{ 
            flex: '0 0 auto',
            order: isMobile ? 2 : 1
          }}>
            <img 
              src={jejeImage} 
              alt="Jeje" 
              style={{
                maxWidth: isSmallMobile ? '100px' : 
                         isMobile ? '130px' : '200px',
                width: '100%',
                height: 'auto'
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;