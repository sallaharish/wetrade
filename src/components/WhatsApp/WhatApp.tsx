import React, { useState, useEffect } from 'react';
import { Box, Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Icon for the scroll to top button

const WhatsAppAndScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle WhatsApp button click
  const handleWhatsAppClick = () => {
    const phoneNumber = '+971 526981356'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hello, I would like to contact you.');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, '_blank');
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
            width: '60px',  // Adjusted size
            height: '60px', // Adjusted size
            '&:hover': {
              backgroundColor: '#128C7E',
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: '2rem' }} /> {/* Smaller icon size */}
        </Fab>
      </Box>

      {/* Scroll to Top Button */}
      {isVisible && (
        <Box
          sx={{
            position: 'fixed',
            bottom: '90px', // Adjusted gap between the two buttons
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
              width: '60px',  // Adjusted size
              height: '60px', // Adjusted size
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
          >
            <ArrowUpwardIcon sx={{ fontSize: '2rem' }} /> {/* Smaller icon size */}
          </Fab>
        </Box>
      )}
    </Box>
  );
};

export default WhatsAppAndScrollToTop;
