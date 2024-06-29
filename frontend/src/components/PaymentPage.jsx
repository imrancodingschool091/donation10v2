import Footer from "./Footer"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"

import "./PaymentPage.css"
function PaymentPage() {
  return (
    <div>
        <Navbar/>

       <section className="payment-section">

        <div className="logo">
            <img src="\websitelogo.png" alt="" />

        </div>

        <div className="scanner">
            <img src="\Google_Payment_QR_Code_Template_-_Made_with_PosterMyWall-removebg-preview.png" alt="" />

        </div>
        <h1>Are you done ?</h1>
        <div className="buttons">
        
           <Link className="btn" to={'/recipt'}>Your Recipt</Link>
        </div>

       </section>
       <Footer/>



    </div>
  )
}

export default PaymentPage