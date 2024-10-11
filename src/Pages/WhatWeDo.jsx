import { faCircleArrowDown, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import PoolSideBar from '../images/poolSideBar.png';
import Restaurant from '../images/restaurant.png';
import SwimmingPool from '../images/swimmingPool.png';
import TheGYM from '../images/theGym.png';
import TheSPA from '../images/theSPA.png';

import Footer from '../Components/Footer';
import '../styles/whatwedo.css';

function WhatWeDo() {
   const [lightboxImage, setLightboxImage] = useState(null);
   const navigate = useNavigate(); // Initialize navigate

   const images = [
      { src: TheGYM, alt: 'The Gym' },
      { src: TheSPA, alt: 'The SPA' },
      { src: PoolSideBar, alt: 'Pool Side Bar' },
      { src: SwimmingPool, alt: 'Swimming Pool' },
      { src: Restaurant, alt: 'Restaurant' },
   ];

   const openLightbox = (imageSrc) => {
      setLightboxImage(imageSrc);
   };

   const closeLightbox = () => {
      setLightboxImage(null);
   };

   // Function to handle button click for navigating to the services page
   const handleButtonClick = () => {
      navigate('/services'); // Replace with your actual services page path
   };

   return (
      <>
         <div className="whatwedo-Container">
            {/* Animate the welcome section */}
            <motion.div className="whatwedo-sectionOne">
               <motion.section
                  className="homesection-One"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <motion.h2
                     className="home-h2"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1 }}
                  >
                     Building digital experiences that connect, engage, and last.
                  </motion.h2>
                  <p className="home-p" style={{marginTop:'40px'}}>
                     We partner with you to design 
                     <br/>and develop solutions that stand out today and adapt for tomorrow.
                  </p>
               </motion.section>
               <section className="homesection-Two">
                  <a href="#home-section-two">
                     <FontAwesomeIcon icon={faCircleArrowDown} className="home-arrow-down" />
                  </a>
               </section>
            </motion.div>

            {/* Lazy-load images in the whatwedo section */}
            <div className="home-section-two" id="home-section-two">
               <section className="whatwedo-sectionTwo">
                  <motion.p
                     initial={{ opacity: 0, x: -100 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     lorem ipsum here lorem ipsum here lorem ipsum here lorem 
                     <br/>ipsum here lorem ipsum here lorem ipsum here lorem ipsum here
                  </motion.p>
               </section>

               <motion.section
                  className="whatwedo-sectionThree"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
               >
                  {images.map((image, index) => (
                     <motion.img
                        className="whatwedo-img"
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        onClick={() => openLightbox(image.src)}
                        whileHover={{ scale: 1.05 }} // Hover effect
                        whileTap={{ scale: 0.95 }} // Tap effect
                     />
                  ))}
               </motion.section>

               <motion.section
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
               >
               </motion.section>
               <motion.section
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <Footer />
               </motion.section>
            </div>
            {/* Lightbox for viewing large images */}
            {lightboxImage && (
               <div className="lightbox" onClick={closeLightbox}>
                  <img src={lightboxImage} alt="Facility" className="lightbox-img" />
                  <button className="lightbox-close" onClick={closeLightbox}>
                     Close
                  </button>
               </div>
            )}
         </div>
      </>
   );
}

export default WhatWeDo;
