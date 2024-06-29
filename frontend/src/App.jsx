
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Donate from "./components/Donate";
import NotFound from "./components/NotFound";

import Signup from "./components/Signup";
import Login from "./components/Login";
import { usePayment } from "./Context/PaymentContext";
import PaymentPage from "./components/PaymentPage";
import Recipt from "./components/Recipt";

const App = () => {

  const [Payment,setPayment]=usePayment()
  console.log(Payment)
  return (
    <>
      <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<PaymentPage/>} />
          <Route path="/recipt" element={<Recipt/>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
 
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
