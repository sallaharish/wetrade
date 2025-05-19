import React, { useState } from 'react';
import './RefundPolicy.css'; // External CSS for styling
import Navbar from '../../../components/Navbar/Navbar';
import PopupModal from '../../../components/PopupModal/PopupModal';
import { Alert, Snackbar } from '@mui/material';

const RefundPolicy: React.FC = () => {
     const [showForm, setShowForm] = useState(false);
      const [snackbarOpen, setSnackbarOpen] = useState(false);
            const [snackbarMessage, setSnackbarMessage] = useState('');
            const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
          const handleFormSubmitSuccess = () => {
            setSnackbarMessage('Form submitted successfully!');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
          };
        
          const handleFormSubmitError = () => {
            setSnackbarMessage('There was an issue submitting the form.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
          };
          const handleSnackbarClose = () => {
            setSnackbarOpen(false);
          };
  return (
    <>
      <Navbar onGetStartedClick={() => setShowForm(true)}  />
  
    <div className="refund-policy-container">
      <div className="refund-policy-content">
        <h1>Refund Policy</h1>
        <p>
          At <strong>WTS Technologies</strong>, we are committed to providing a high-quality experience for our users. This Refund Policy outlines the terms and conditions under which we offer refunds for the purchase of our Auto Trading Software. By purchasing and using the Software, you agree to the following terms.
        </p>

        <h2>1. General Refund Policy</h2>
        <p>
          Due to the nature of financial markets and the services provided by the Software, we do not offer refunds for software purchases or subscription fees once access to the Software has been granted. All sales are final, except as specified below under Exceptions.
        </p>

        <h2>2. Exceptions to the No-Refund Policy</h2>
        <p>We understand that certain circumstances may warrant a refund. Therefore, we may offer a refund under the following conditions:</p>

        <h3>a. Technical Issues or Software Malfunction</h3>
        <p>
          If the Software experiences a significant technical issue or malfunction that prevents you from using the Software for a substantial period of time (e.g., 14 days or more) and we are unable to resolve the issue after reasonable efforts, you may be eligible for a refund. To be eligible for a refund, you must provide us with proof that the issue has persisted and that you have contacted our support team for assistance.
        </p>

        <h3>b. Accidental Subscription or Billing</h3>
        <p>
          If you have been charged for a subscription or software license by mistake (e.g., you were billed after cancelling your subscription or signed up by accident), you may be eligible for a refund. You must contact our support team within 7 days of the charge and provide evidence of the accidental billing.
        </p>

        <h3>c. Subscription Cancellations</h3>
        <p>
          If you are subscribed to a recurring payment plan, you may cancel your subscription at any time before the next billing cycle. Cancellations will take effect for the next billing period, and no further payments will be charged. However, we do not provide refunds for any payments already made.
        </p>

        <h2>3. Requesting a Refund</h2>
        <p>
          To request a refund under the conditions outlined above, you must contact our customer support team at <a href="mailto:info@technosoft-lab.com">support@wtstechnologies.ae</a>.
        </p>
        <p>Please provide the following information in your refund request:</p>
        <ul>
          <li>Your full name</li>
          <li>The email address used to purchase the Software</li>
          <li>A description of the issue or reason for the refund request</li>
          <li>Any relevant screenshots, receipts, or supporting documentation</li>
        </ul>
        <p>Refund requests will be processed within <strong>5 business days</strong>, and you will be notified of the outcome.</p>

        <h2>4. Refund Processing</h2>
        <p>
          If your refund request is approved, we will process the refund to the original payment method used for the purchase. Refunds may take <strong>10 to 15 business days</strong> to appear on your account, depending on the processing times of your payment provider.
        </p>

        <h2>5. Limitations</h2>
        <ul>
          <li>No Refunds for User Error or Misuse</li>
          <li>No Refunds for Profits or Losses</li>
          <li>No Refunds for already paid Subscription Plans unless mentioned under Exceptions</li>
        </ul>

        <h2>6. Changes to the Refund Policy</h2>
        <p>
          We reserve the right to modify this Refund Policy at any time. Any changes will be posted on this page, and the effective date will be updated accordingly. We recommend that you review this policy periodically to stay informed about any updates.
        </p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about this Refund Policy or would like to request a refund, please contact us at:</p>
        <address>
          <strong>WTS Technologies</strong><br />
          <strong>Email:</strong> <a href="mailto:Support@wtstechnologies.ae">Support@wtstechnologies.ae</a><br />
          <strong>Phone:</strong> +971 526981356<br />
          <strong>Address:</strong> M02, Titanium Building, Dubai UAE
        </address>
      </div>
    </div>
    {showForm && <PopupModal open={showForm} setOpen={setShowForm} onSubmitSuccess={handleFormSubmitSuccess} onSubmitError={handleFormSubmitError} />}
         <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{
                      vertical: 'top',   
                      horizontal: 'right',
                    }}
                  >
                    <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                      {snackbarMessage}
                    </Alert>
                  </Snackbar>
    </>
  );
};

export default RefundPolicy;
