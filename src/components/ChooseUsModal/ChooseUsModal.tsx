import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Backdrop ,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const ChooseUsModal = ({open,setOpen}:any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      

      <Modal open={open} onClose={handleClose}
      
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 300,
        sx: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(2px)",
        },
      }}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      >
      <Box
        sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "90%" : "600px",
            bgcolor: "#1a1c2c",
            boxShadow: 24,
            borderRadius: 3,
            p: 4,
            maxHeight: "80vh",
            overflowY: "auto",
            backdropFilter: "blur(1px)",
            outline: "none",
          }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8, color: theme.palette.grey[600] }}
        >
          <CloseIcon />
        </IconButton>

        {/* Modal Content */}
        <Typography id="modal-title" variant="h5" fontWeight={600} gutterBottom>
          Why Choose Our System?
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, mb: 2, lineHeight: 1.7 }}>
          <strong>Because</strong> our system blends <strong>AI-driven precision</strong> with market fundamentals, helping
          both new and experienced traders make confident currency trades.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
          <strong>Because</strong> we offer a <strong>specialized gold-focused engine</strong> with tailored algorithms that
          outperform generic bots.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
          <strong>Because</strong> we deliver high-tech, safe, and performance-tuned <strong>crypto tools</strong> that outperform
          manual trading <strong>90% of the time</strong>.
        </Typography>
      </Box>
      </Modal>
    </>
  );
};

export default ChooseUsModal;
