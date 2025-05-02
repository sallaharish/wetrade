import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Box,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function PopupModal({ open, setOpen }: any) {
  const theme = useTheme();
  const handleClose = () => setOpen(false);

  // Step 1: State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  // Step 2: Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step 3: Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Convert data to CSV
    const headers = ['Name', 'Email', 'Phone', 'City'];
    const values = [formData.name, formData.email, formData.phone, formData.city];
    const csvContent = `${headers.join(',')}\n${values.join(',')}`;

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'form-data.csv';
    a.click();

    URL.revokeObjectURL(url);

    // Optional: Clear form & close modal
    setFormData({ name: '', email: '', phone: '', city: '' });
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
        PaperProps={{
          elevation: 6,
          sx: {
            p: 2,
            borderRadius: 3,
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            minWidth: { xs: '90%', sm: 420 },
          }
        }}
      >
        <DialogTitle
          sx={{
            fontSize: '1.5rem',
            fontWeight: 600,
            pb: 1.5,
            pr: 6,
            color: theme.palette.grey[800],
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
              color: theme.palette.grey[500],
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              fullWidth
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
