
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Get Immediate Help Now</h1>
        <h3> Struggling?</h3>
      
        <p>
        Let us help you. Reach out for assistance now.
        </p>
        <Link to={"/signup"} className="btn">
        Apply for Aid
        </Link>
      </div>
      <div className="banner">
        <img src="donation_-removebg-preview.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
