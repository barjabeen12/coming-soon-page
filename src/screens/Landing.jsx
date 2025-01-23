// import React from "react";
// Sections
// import TopNavbar from "../components/Nav/TopNavbar";
// import Header from "../components/Sections/Header";
// import Services from "../components/Sections/Services";
// import Projects from "../components/Sections/Projects";
// import Blog from "../components/Sections/Blog";
// import Pricing from "../components/Sections/Pricing";
// import Contact from "../components/Sections/Contact";
// import Footer from "../components/Sections/Footer"

// export default function Landing() {
//   return (
//     <>
//       {/* <TopNavbar />
//       <Header />
//       <Services />
//       <Projects /> */}
//       {/* <Blog /> */}
//       {/* <Pricing /> */}
//       {/* <Contact />
//       <Footer /> */}
//     </>
//   );
// }
// import { Link } from "react-scroll";

import React from "react";
import "./landing.css"; // Import the custom CSS file
// import { Highlight } from "./Highlight"; // Assuming the Highlight component is in the same folder
// import Section from './Section'; 
 import Footer from './Footer';
import { Highlight } from "./Highlight";
import LogoIcon from "../assets/svg/Logo";

export default function Landing() {
  return (
    <div className="landing-container">
      <header>
      <div className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              FluxFrames
            </h1>
          </div>
      </header>
      <div className="background-circles">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
      <main className="main-content">
        <div className="content-wrapper">
          <h1 className="main-heading">
            Get curated streams on the <br />
            <Highlight className="highlight-text">
              <i>fly</i>
            </Highlight>
          </h1>
          <p className="description">
          Discover personalized live streams on FluxFrames—tailored to your interests and audience, anytime, anywhere.
        </p>


          <form className="waitlist-form">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSea7OEmuI43LjrhRilt1--7c-IyLXA1ZM_8FLc9exaZJ5mCbw/viewform?usp=sharing" 
              className="waitlist-btn"
             target={"_blank"}
             rel="noreferrer"
            >  
              Join Waitlist
            </a>
          </form>
        </div>
      </main>
      {/* <Section /> */}
       <Footer />
    </div>
  );
}
