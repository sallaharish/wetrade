import React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Box,
  useTheme,
  Backdrop
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function PopupModal({ open, setOpen }: any) {
  const theme = useTheme();
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    handleClose();
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ fontWeight: 600 }}
      >
        Open Modal
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(6px)'
          }
        }}
        PaperProps={{
          elevation: 6,
          sx: {
            p: 2,
            borderRadius: 3,
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            minWidth: { xs: '90%', sm: 420 },
            bgcolor: '#1a1c2c',
            color: '#fff',
            backdropFilter: 'blur(10px)',
          }
        }}
      >
        <DialogTitle
          sx={{
            fontSize: '1.5rem',
            fontWeight: 600,
            pb: 1.5,
            pr: 6,
            color: '#fff',
            position: 'relative',
          }}
        >
          Get started with us
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#aaa',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ pt: 1 }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
              mt: 1,
            }}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              required
              fullWidth
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{border:"1px solid white"}}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              required
              fullWidth
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{border:"1px solid white"}}
            />
            <TextField
              label="Phone Number"
              type="tel"
              variant="outlined"
              required
              fullWidth
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{border:"1px solid white"}}
            />
            <TextField
              label="City"
              variant="outlined"
              required
              fullWidth
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{border:"1px solid white"}}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 1,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                bgcolor: '#1976d2',
              }}
            >
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PopupModal;
