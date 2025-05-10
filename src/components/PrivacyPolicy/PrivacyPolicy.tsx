import React, { useState } from "react";
import { Container, Typography, Box, Divider, Snackbar, Alert } from "@mui/material";
import "./PrivacyPolicy.css";
import PopupModal from "../PopupModal/PopupModal";
import Navbar from "../Navbar/Navbar";
const Section = ({ title, children }: any) => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
      {children}
    </Typography>
    <Divider sx={{ my: 2 }} />
  </Box>
);

const PrivacyPolicy = () => {
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
    <Container maxWidth="md" sx={{ py: 5,marginTop:"4rem",marginLeft:0 }}>
      <Typography variant="h3" gutterBottom>
        Privacy Policy
      </Typography>

      <Section title="Introduction">
        {`WTS Technologies respects your right to privacy. This Privacy Policy explains who we are, how we collect, share and use personal information about you, and how you can exercise your privacy rights.`}
      </Section>

      <Section title="What does WTS Technologies do?">
        {`WTS Technologies develops, delivers and hosts software for enterprise-level financial traders. We are headquartered in India but have group companies in UAE.`}
      </Section>

      <Section title="What Personal Information Do We Collect and Why?">
        {`We may collect personal data you provide voluntarily, such as:
- Your name, email, phone number, etc.
- Transaction and trade data
- Responses to surveys
- User contributions

We also collect data automatically through technologies like cookies and log files.`}
      </Section>

      <Section title="Information You Provide Voluntarily to Us.">
        {`- The information we collect on or through our Sites may include:
- Information that is submitted via the Sites or otherwise supplied to us. This includes information provided at the time of registering to use our Sites, subscribing to our Sites, posting material, or requesting further information about our Sites. This will include your name, postal address, e-mail address, telephone number and other contact information.
- We may also ask you for information which could identify you when you report a problem with our Sites or open a service ticket with WTS Technologies Support.
- Personal information contained in your correspondence with us regarding the Sites (such as e-mail, log files and screenshots).
- Your responses to surveys that we might ask you to complete for research / Sites improvement purposes.
- Information relating to transactions or trades you carry out through the Sites.
- You also may provide information to be published or displayed (hereinafter, “posted”) on public areas of the Sites (including community forums), or transmitted to other users of the Sites (including electronic messages within an organization) or third parties (including trades sent to exchanges and trade history sent to broker/FCM) (collectively, “User Contributions”). Your User Contributions are posted on and transmitted to others at your own risk. We cannot control the actions of those with whom you may choose to share your User Contributions.
- The information above may be provided directly by you or by somebody designated by your company to set up and administer your account (which may be the WTS Technologies customer or technical support contact) (an “Administrator”).
- As you would expect, if you are unable to or choose not to provide us (or your Administrator) with the personal information required for the performance of the Sites, we may be unable to provide you with the Sites you have requested.
`}
      </Section>

      <Section title="Information We Collect Automatically.">
        {`- The information we collect on or through our Sites may include:
-As you navigate through and interact with the Sites, we may use automatic data collection WTS Technologies to collect certain information about your equipment, browsing actions, and patterns. In some countries, including countries in the European Economic Area, this information may be considered personal information under applicable data protection laws. Collecting this information enables us to better understand the users of our Sites, where they come from, and what content / functionality on our Sites is of interest to them. We use this information for our internal analytics purposes and to improve the quality and relevance of our Sites to our users. Examples of this information include:.
-Details of your use of the Sites, including website related traffic data, location data, logs, age, gender, market segment (e.g., proprietary trader or bank trader), interests (e.g., what exchanges and products you trade), and other communication data and the resources that you access and use on the Sites.
-We will also collect data related to your use of the Sites when you are conducting trading activities such as billing information, trader IDs, and statistical and other aggregated data derived from your use of Sites.
-Information about your device, computer and network connection, including your IP address, operating system, hardware version, device settings, battery and signal strength, and browser type.
-Device locations, including specific geographic locations (e.g., country), such as through GPS, Bluetooth, or WiFi signals.
-Connection information such as the name of your mobile operator or ISP, language and time zone, and mobile phone number.
-Data about your network connection, the equipment and software you use to access our Site, and usage details.
-The WTS WTS Technologies we use for this automatic data collection may include:
- Cookies (or similar WTS Technologies). A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. If you continue without changing your settings, we will assume that you are happy to receive all cookies on the Site. You can change your cookie settings at any time. However, if you select this setting you may be unable to access certain parts of our Sites. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Sites.
`}
      </Section>

      <Section title="Information We Obtain from Third Parties">
        {`- From time to time, we may receive personal information about you from third party sources (including your broker or futures commission merchant or an exchange), but only where we have checked that these third parties either have your consent or are otherwise legally permitted or required to disclose your personal information to us.
- The types of information we collect from third parties include your name and trading identification and we use the information we receive from these third parties to allow you to use our services and maintain and improve the accuracy of the records we hold about you.
`}
      </Section>

      <Section title="Advertising, Use of Cookies, and Other Tracking WTS Technologies">
        {`-We advertise in a number of ways, including online through managed social media presences, and on other unaffiliated sites and mobile applications. To understand how our advertising campaigns are performing, we may collect certain information via our Sites through our advertising service providers. We or our vendors use several common online tracking tools to collect information about our users, such as browser cookies, web beacons, and other similar WTS Technologies. The information we collect includes IP addresses, the number of page visits, pages viewed via our Sites, search engine referrals, browsing activities over time and across other websites following your visit to one of our Sites or applications, and responses to advertisements and promotions on the websites and applications where we advertise. We do not permit third parties to advertise on our Site.
-	We also use certain information to:
-	Identify new visitors to our Sites;
-	Recognise returning visitors;
-	Advertise on other websites and mobile applications not affiliated with us;
-	Analyse the effectiveness of our advertisements;
-	Better understand our audience, customers, or other Site visitors;
-	Determine whether you might be interested in new products or services.
`}
      </Section>

      <Section title="Controlling Our Tracking Tools.">
        {`Your browser may give you the ability to control cookies. How you do so, however, depends on your browser and the type of cookie. Certain browsers can be set to reject all browser cookies. If you configure your computer to block all cookies, you may disrupt certain web page features, and limit the functionality we can provide when you visit or use our Sites. If you block or delete cookies, not all of the tracking that we have described in this policy will stop. Some browsers have a “Do Not Track” feature that lets you tell websites that you do not want to have your online activities tracked. These browser features are still not uniform, so we are not currently set up to respond to those signals.
`}
      </Section>

      <Section title="Controlling Online Interest-Based Ads.">
        {`We sometimes work with online advertising vendors to provide you with relevant and useful ads. This may include ads served on other companies’ websites. These ads may be based on information collected by us or third parties. For example, your postal code may be used to target an ad for people in your area. These ads may also be based on your activities on our Sites or on third party websites.
`}
      </Section>

      <Section title="How Do We Use Your Personal Information?">
        {`- We use information that we collect about you or that you provide to us, including any personal information:
-	To present our Sites and its contents to you.
-	To provide you with WTS Technologies information, products, or services that you request from us.
-	To provide you with notices about your account/subscription, including expiration and renewal notices (some of these notices may also go to your Administrator).
-	To carry out our obligations and enforce our rights arising from any contracts entered into between you (or your company) and us, including for billing and collection.
-	To notify you about changes to our Sites we offer or provide through it.
-	To allow you to participate in interactive features on our Sites.
-	To provide you with support services.
-	To estimate our audience size and usage patterns.
-	To store information about your preferences, allowing us to customise our Site according to your individual interests (e.g., to customise your personal trading workspace or specific trading functionality).
-	To improve your use of the Sites.
-	To recognise you when you return to our Sites.
-	In any other way we may describe when you provide the information.
-	For any other purpose with your consent.
-	We may also use your information to contact you about TT goods and services that may be of interest to you.
`}
      </Section>

      <Section title="With Whom Do We Share Your Personal Information?">
        {`- We do not share your Personal Information with unaffiliated third parties for their own direct marketing activities. We may share your personal information in the following circumstances:
- To our subsidiaries and affiliates, which are located in multiple countries around the world.
- To contractors, service providers, and other third parties we use to support our business and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them.
- With brokers, futures commissions merchants, or other clearing firms with whom you grant permission to share information.
- To fulfil the purpose for which you provide it. For example, if you give us an e-mail address to use the “share via e-mail” feature of our Sites, we will transmit the contents of that e-mail and your e-mail address to the recipients; and information related to trades entered by you will be shared with the relevant exchanges.
- To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganisation, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by us is among the assets transferred.
- For any other purpose disclosed by us when you provide the information.
`}
      </Section>

      <Section title="We may also disclose your personal information in the following circumstances:">
        {`- To comply with any court order, law or legal process, including to respond to any government or regulatory request.
- To enforce or apply our agreements with you, including for billing and collection purposes.
- If we believe disclosure is necessary or appropriate to protect our rights, property, or safety, our customers or others. This includes exchanging information with other companies and organisation’s for the purposes of fraud protection and credit risk reduction.
- To any other person with your consent to the disclosure.
- Legal Basis for Processing Personal Information (EEA Users Only)
- However, we will normally collect personal information from you only:
    (i) where we need the personal information to perform a contract with you,
    (ii) where the processing is in our legitimate interests and not overridden by your rights, or
    (iii) where we have your consent to do so. In some cases, we may also have a legal obligation to collect personal information from you.
- If we ask you to provide personal information to comply with a legal requirement or to perform a contact with you, we will make this clear at the relevant time and advise you whether the provision of your personal information is mandatory or not (as well as of the possible consequences if you do not provide your personal information).
- If we collect and use your personal information in reliance on our legitimate interests (or those of any third party), this interest will normally be to operate our platform and communicating with you as necessary to provide our services to you and for our legitimate commercial interest, for instance, when responding to your queries, improving our platform, undertaking marketing, or for the purposes of detecting or preventing illegal activities. We may have other legitimate interests and if appropriate we will make clear to you at the relevant time what those legitimate interests are.
- If you have questions about or need further information concerning the legal basis on which we collect and use your personal information, please contact us using the contact details provided under the “How to Contact Us” heading below.
`}
      </Section>

      <Section title="Data Security">
        {`The security and confidentiality of your personal information matters to us. We have implemented appropriate technical and organisational measures like encryption, access controls, intrusion detection systems, and security event and incident management platform designed to secure such information from loss or unauthorised access, use, alteration, and disclosure. We also review our security procedures periodically to consider appropriate new technology and updated methods. Even so, despite our reasonable efforts, no security measure is ever perfect or impenetrable.`}
      </Section>
      <Section title="International Data Transfers">
        {`- Your personal information may be transferred to, and processed in, countries other than the country in which you are resident. These countries may have data protection laws that are different to the laws of your country.
- Specifically, our Sites servers are located in the U.S. and our group companies and third party service providers and partners operate around the world. This means that when we collect your personal information we may process it in any of these countries.
- However, we have taken appropriate safeguards to require that your personal information will remain protected in accordance with this Privacy Policy.
`}
      </Section>

      <Section title="Data Retention">
        {`- We retain personal information we collect from you where we have an ongoing legitimate business need to do so (for example, to provide you with the Site you have requested or to comply with applicable legal, tax or accounting requirements).
- When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise it or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
`}
      </Section>

      <Section title="Your Data Protection Rights">
        {`- If you wish to access, correct, update or request deletion of your personal information, you can do so at any time by contacting us using the contact details provided under the “How to Contact Us” heading below.
- In addition, you can object to processing of your personal information, ask us to restrict processing of your personal information or request portability of your personal information. Again, you can exercise these rights by contacting us using the contact details provided under the “How to Contact Us” heading below.
- You have the right to opt-out of marketing communications we send you at any time. You can exercise this right by clicking on the “unsubscribe” or “opt-out” link in the marketing e-mails we send you. To opt-out of other forms of marketing (such as postal marketing or telemarketing), then please contact us using the contact details provided under the “How to contact us” heading below. Even after you opt-out or update your marketing preferences, please allow us sufficient time to process your marketing preferences. It may take up to 10 days to process your e-mail related requests, and up to 30 days for all other marketing-related requests. And even after you’ve opt-out of receiving marketing communications from us, we may still contact you for transactional or informational purposes. These include, for example, customer service issues, returns or product-related inquiries, surveys or recalls, or any questions regarding a specific order.
- You have the right to complain to a data protection authority about our collection and use of your personal information. For more information, please contact your local data protection authority.
- We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws.
`}
      </Section>

      <Section title="Minors">
        {`Our Sites are not intended for minors. We do not knowingly collect any Personal Information from children under the age of 13 or knowingly track the use of our Sites by minors.`}
      </Section>

      <Section title="Changes to This Policy">
        {`We may amend this Privacy Policy at any time. If we make a material change to how we collect, use, or disclose Personal Information, we will prominently post an updated Privacy Policy on our Sites. Where required to do so by law, we may seek your prior consent to any material changes we make to this Privacy Policy. If you disagree with our Privacy Policy changes, you may de-activate your account.`}
      </Section>

      <Section title="Contact Us">
        {`If you have any questions, have a complaint, a request or wish to send us comments about this Privacy Policy, e-mail us at: Wtstechnologies.ae. We will investigate your complaint, and use reasonable efforts to respond to you as soon as possible.`}
      </Section>

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
    </Container>
    </>
  );
};

export default PrivacyPolicy;
