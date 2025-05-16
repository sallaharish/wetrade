import React, { useState, useEffect } from 'react';
import { Box, Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const WhatsAppAndScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detect iOS device
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);


  // Handle WhatsApp button click
  const handleWhatsAppClick = () => {
    const phoneNumber = '971526981356'; // Remove '+' sign
    const message = encodeURIComponent('Hello, I would like to contact you.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    if (isIOS) {
      window.location.href = whatsappUrl;
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  // Show scroll-to-top button when the page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Box>
      {/* WhatsApp Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
      >
        <Fab
          color="success"
          aria-label="whatsapp"
          onClick={handleWhatsAppClick}
          sx={{
            backgroundColor: '#25D366',
            color: '#fff',
            width: '60px',
            height: '60px',
            '&:hover': {
              backgroundColor: '#128C7E',
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: '2rem' }} />
        </Fab>
      </Box>

      {/* Scroll to Top Button */}
      {isVisible && (
        <Box
          sx={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            zIndex: 1000,
          }}
        >
          <Fab
            color="primary"
            aria-label="scroll-to-top"
            onClick={scrollToTop}
            sx={{
              backgroundColor: 'rgb(225, 36, 84)',
              color: '#fff',
              width: '60px',
              height: '60px',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
          >
            <ArrowUpwardIcon sx={{ fontSize: '2rem' }} />
          </Fab>
        </Box>
      )}
    </Box>
  );
};

export default WhatsAppAndScrollToTop;
