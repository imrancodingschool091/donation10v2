import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Login() {
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
              fontSize:"1.2rem"
            }}
          >
            Login
          </h1>
        
          <input type="email" placeholder="Your Email.." />
          <input type="password" placeholder="Your Password.." />

          <button type="submit" className="btn">
            Login Now
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
              Create an Acoount{" "}
              <Link to={'/signup'}
                style={{
                  color: "blue",
                  fontWeight: "bolder",
                  fontSize: ".7rem",
                  textDecoration:"underline"
                }}
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Login;
