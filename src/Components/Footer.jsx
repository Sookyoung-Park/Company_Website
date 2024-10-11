import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import DesignOnLogo from '../images/DesignOnLogo.png';
import './style/footer.css';
import { motion } from 'framer-motion';

function EmailPage({ email }) {
   const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
      // Set a timeout to remove the container after 5 seconds
      const timer = setTimeout(() => {
         setIsVisible(false);
      }, 3000); // 3000 milliseconds = 3 seconds

      // Cleanup the timeout on component unmount
      return () => clearTimeout(timer);
   }, []);

   if (!isVisible) {
      return null; // Render nothing if not visible
   }

   return (
      <div className="email-overlay">
         <div className="email-container">
            <h2>Subscribed Email</h2>
            {email ? (
               <p>
                  Thank you for subscribing! Your email: <strong>{email}</strong>
               </p>
            ) : (
               <p>No email subscribed yet.</p>
            )}
         </div>
      </div>
   );
}

function Footer() {
   const [email, setEmail] = useState('');
   const [isSubscribed, setIsSubscribed] = useState(false);

   const handleEmailChange = (e) => {
      setEmail(e.target.value);
   };

   const handleEmailSubmit = () => {
      if (email) {
         localStorage.setItem('subscribedEmail', email); // Store email in local storage
         alert('Thank you for subscribing!'); // Optional: confirmation alert
         setIsSubscribed(true); // Set subscribed state to true
         setEmail(''); // Clear input field
      } else {
         alert('Please enter a valid email address.'); // Validation message
      }
   };

   return (
      <>
         {isSubscribed && <EmailPage email={email} />}
         <motion.footer
            className="footer"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
         >
            <section className="footer-logo"/>
            <section className="footer-navigation"/>
            <section className="footer-social">
            <img src={DesignOnLogo} alt="Design On Studio Logo" />
               <p className="home-p">design.on.studio.uiux@gmail.com</p>
                  <a
                     href="https://www.instagram.com/design.on.uiux/"
                     target="_blank"
                     rel="noopener noreferrer"
                     >
                     Instagram
                  </a>
               </section>
         </motion.footer>
      </>
   );
}

export default Footer;
