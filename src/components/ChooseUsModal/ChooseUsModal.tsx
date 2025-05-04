import React from "react";
import {
  Modal,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Backdrop,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ChooseUsModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  reason: string;
}

const ChooseUsModal: React.FC<ChooseUsModalProps> = ({ open, setOpen, reason }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
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
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8, color: theme.palette.grey[600] }}
        >
          <CloseIcon />
        </IconButton>

        <Typography id="modal-title" variant="h5" fontWeight={600} gutterBottom color="white">
          Why Choose Our System?
        </Typography>

        <Typography id="modal-description" variant="body1" sx={{ mt: 2, lineHeight: 1.7 }} color="white">
          {reason}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ChooseUsModal;
