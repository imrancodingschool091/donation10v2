import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Navbar/>


    <section className="about">
      <div className="hero">
        <div className="banner">
          <h1>About Us</h1>
          <p>
          At Donation 10 Foundation, our mission is to provide financial support and empowerment to Islamic scholars (mufti, hafiz, alim) facing financial challenges, to facilitate the marriage of underprivileged Muslim girls, and to educate youth about Islamic ethics. We strive to create a positive impact in the lives of individuals and communities by upholding the values of compassion, equality, and integrity.
          </p>
        </div>
        <div className="banner">
          <img src="\about_1 (1).png" alt="aboutImg" />
        </div>
      </div>
    </section>

    <Footer/>
    
    
    
    </>
   
  );
};

export default About;
