

import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {


  return (
    <>
    <Navbar/>

    <section className="contact">
      <div className="container">
        <div className="banner">
          <form >
            <h2>CONTACT US</h2>
            <div>
              <input
                type="text"
             
                placeholder="Your Name"
                
              />
              <input
                type="email"
              
                placeholder="Your Email"
          
              />
              <input
                type="number"
              
                placeholder="Phone Number"
                
              />
            </div>
            <textarea
              rows="10"
          
              placeholder="Message"
            
            />
            <button className="btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

    <Footer/>
    
    
    
    
    
    </>
  );
};

export default Contact;
