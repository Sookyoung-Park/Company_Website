import { faCircleArrowDown, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Button from '../Components/Button';
import Footer from '../Components/Footer';
import Design from '../images/design.jpg';
import Coding from '../images/coding.jpg';
import Branding from '../images/branding.jpg'
import '../styles/home.css';

function Home() {
   // Initialize navigate function
   const navigate = useNavigate();

   // Handler for explore button click to navigate to services page
   const handleExploreClick = () => {
      navigate('/services'); // Navigate to the services page
   };

   const handleContactClick=()=>{
      navigate('/contact')
   }

   return (
      <>
         <div className="home-Container">
            <div className="home-sectionOne">
               <motion.section
                  className="homesection-One"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  {/* Crafting digital experiences that inspire today and shape tomorrow. */}
                  <h3 className="home-h3">Crafting</h3>
                  <motion.h1
                     className="home-h1"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay:0.3, duration: 0.9 }}
                  >
                     Digial
                     <br/>
                     Experiences
                  </motion.h1>
                  <p className="home-p">
                     <br/>
                     <br/>
                     that inspire today and shape tomorrow.
                  </p>
               </motion.section>
               <motion.section
                  className="homesection-Two"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
               >
                  <a href="#home-section-two">
                     <FontAwesomeIcon icon={faCircleArrowDown} className="home-arrow-down" />
                  </a>
               </motion.section>
            </div>

            {/* Section Two - with slide-in animation */}
            <motion.section className="home-sectionTwo" id="home-section-two">
               <motion.p
                  initial={{ opacity: 0, x: -100 }} // Start off-screen with 0 opacity
                  whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position when in view
                  transition={{ duration: 0.5 }} // Duration of 0.5 seconds
               >
                  We collaborate with you to create designs 
                  <br/>that solve immediate needs while building for the future.
               </motion.p>
               <motion.article
                  className="homesectionTwo-One"
                  initial={{ opacity: 0, x: -100 }} // Start off-screen with 0 opacity
                  whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position when in view
                  transition={{ duration: 0.5 }} // Duration of 0.5 seconds
               >
                  <motion.div className="homesectionTwo-Paragraph">
                     <h1 className="home-h1">Design</h1>
                     <motion.p
                        className="home-p"
                        initial={{ opacity: 0, x: 100 }} // Start off-screen with 0 opacity
                        whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position when in view
                        transition={{ duration: 0.5 }} // Duration of 0.5 seconds
                     >
                        Exceptional design starts with understanding. 
                        We dive deep into user insights to create interfaces that are not only visually 
                        stunning but also intuitive and user-centered. 
                        <br/>
                        Our service is tailored to meet your users’ needs while pushing the boundaries of creativity.
                     </motion.p>
                     <Button classEx="home-button" onClick={handleExploreClick}>
                        VIEW MORE
                     </Button>
                  </motion.div>
                  <img src={Design} alt="Design" style={{width:'36%'}}/>
               </motion.article>

               <motion.article
                  className="homesectionTwo-One"
                  initial={{ opacity: 0, x: -100 }} // Start off-screen with 0 opacity
                  whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position when in view
                  transition={{ duration: 0.5 }} // Duration of 0.5 seconds
               >
                  <motion.div className="homesectionTwo-Paragraph">
                     <h1 className="home-h1">Development</h1>
                     <p className="home-p">
                     Our development team builds responsive, fast, and scalable digital experiences. 
                     We ensure that your site or app performs flawlessly across all devices, 
                     with a focus on robust functionality and seamless user experience.
                     </p>
                     <Button classEx="home-button" onClick={handleExploreClick}>
                        VIEW MORE
                     </Button>
                  </motion.div>
                  <img src={Coding} alt="Coding" style={{width:'36%'}}/>
               </motion.article>
               <motion.article
                  className="homesectionTwo-One"
                  initial={{ opacity: 0, x: -100 }} // Start off-screen with 0 opacity
                  whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position when in view
                  transition={{ duration: 0.5 }} // Duration of 0.5 seconds
               >
                  <motion.div className="homesectionTwo-Paragraph">
                     <h1 className="home-h1">Branding</h1>
                     <motion.p
                        className="home-p"
                        initial={{ opacity: 0, x: 100 }} // Start off-screen with 0 opacity
                        whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position when in view
                        transition={{ duration: 0.5 }} // Duration of 0.5 seconds
                     >
                        Your brand is more than a logo—it’s an experience. We craft cohesive and memorable brand identities that speak to your audience and set you apart. From visuals to voice, we ensure your brand tells a compelling story at every touchpoint.
                     </motion.p>
                     <Button classEx="home-button" onClick={handleExploreClick}>
                        VIEW MORE
                     </Button>
                  </motion.div>
                  <img src={Branding} alt="Branding" style={{width:'36%'}}/>
               </motion.article>
            </motion.section>
            <motion.section
               initial={{ opacity: 0, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
            >
            <div className="home-sectionThree">
               <h1 className="home-h1">Let’s Build Something Remarkable</h1>
               <section className="homesectionThree-One">
                  <p className="home-p">
                     Ready to elevate your brand? 
                     <br/>
                     Our passion for design and development drives us to create exceptional solutions 
                     <br/>
                     that leave a lasting impression. Let’s start building together</p>
               </section>
               <Button classEx="home-button" onClick={handleContactClick}>
                        CONCTACT US
                     </Button>
            </div>
            </motion.section>
            <motion.section>
               <Footer />
            </motion.section>
         </div>
      </>
   );
}

export default Home;
