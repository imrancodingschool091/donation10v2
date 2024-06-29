import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Signup() {
  return (
    <div>
      <Navbar />

      <section className="donate">
        <form>
          <div>
            <img src="/public/websitelogo.png" alt="logo" />
          </div>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              fontWeight: "bolder",
              color: "darkgray",
            }}
          >
            Create an Account
          </h1>
          <div>
            <input type="text" placeholder="Your Name.." />
       
          </div>
          <input type="email" placeholder="Your Email.." />
          <input type="password" placeholder="Your Password.." />

          <button type="submit" className="btn">
            Create Now
          </button>

          <div className="message">
            <p
              style={{
                fontWeight: "bolder",
                fontFamily: "sans-serif",
                 fontSize:".8rem"
              }}
            >
                <br />
              Alredy have an Account{" "}
              <Link to={'/login'}
                style={{
                  color: "blue",
                  fontWeight: "bolder",
                  fontSize: ".7rem",
                  textDecoration:"underline"
                }}
              >
                login
              </Link>
            </p>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Signup;
