import './Footer.css';
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';    
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from "../../Assets/images/logo.png";
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import TermsAndConditions from '../../pages/TermsAndConditions/TermsAndConditions';

const Footer = () => {
  const navigate=useNavigate();
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col company">
          <img src={logo}   alt="AI Trading Software" className="footer-logo" />
          <p>
            At AI Trading Software, we specialize in AI-driven trading software designed to optimize trading performance with cutting-edge technology.
          </p>
          <h3>Join a Newsletter</h3>
          <div className="newsletter">
            <input type="email" placeholder="Enter Your Email Here" />
            <button><ArrowForwardIcon/></button>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={()=>navigate("/")}>Home</li>
            <li onClick={()=>navigate("/faq")}>FAQ</li>
            <li onClick={()=>navigate("/terms-and-conditions")}>TermsAndConditions  </li>
            
            <li onClick={()=>navigate("/refund-policy")}>RefundPolicy </li>
            <li onClick={()=>navigate("/privacy-policy")}>Privacy Policy</li>
            <li>Coaching</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Affiliate Program</li>
            <li>Pricing</li>
            <li onClick={()=>navigate("/contact")}>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p className='footer-contact'><LocationOnIcon sx={{color:" #8e7cf7"}}/>M02,Titanium Building,Dubai UAE..</p>
          <p  className='footer-contact'><EmailIcon sx={{color:" #8e7cf7"}} />Support@wtstechnologies.ae</p>
          <p  className='footer-contact'><PhoneIcon sx={{color:" #8e7cf7"}}/>+971 526981356</p>
        </div>
      </div>

      <div className="footer-disclaimer">
        <strong>Disclaimer:</strong> <br />
        WTS Technologies and its employees are not officially qualified to provide financial advice and are not registered as financial advisors. The only purpose of everything offered on this server, on the WTS Technologies website, or by WTS Technologies and its staff is education. Any losses or damages are not the responsibility or liability of WTS Technologies or its employees. Every risk you take is your responsibility. This website's content should not be interpreted as financial advice.
      </div>

      <div className="footer-risk">
        <strong>Risk Warning:</strong> <br />
        Trading carries a high level of risk and may not be suitable for all investors. Profit and loss all depend upon the market movement, As this is automated software, so there is no need for human interruption. If in case happen there is the possibility to lose your capital, Trading is subjected to market risk, as you buy this software with your own interest, Company won’t be liable for any kind of Profit & Loss of the client.
      </div>
    
      {/* <a href="https://wa.me/971508200684" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon/>
        <span>Need Assistance?<br />WhatsApp</span>
      </a>

      <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        up
      </button> */}
      <div className="footer-bottom">
  <hr />
  <div className="footer-bottom-content">
    <p className="footer-left">© 2025 WTS Technoligies Software</p>
    <p className="footer-right">Designed and developed by WTS Technologies </p>
  </div>
</div>
<div className="footer-social">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands"><FaFacebookF /></i></a>
  <a href="https://www.instagram.com/wetradesolutions/" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands"><FaInstagram /></i>
</a>

  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands"><FaTwitter /></i></a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands"><FaLinkedinIn /></i></a>
</div>



    </footer>
  );
};

export default Footer;
