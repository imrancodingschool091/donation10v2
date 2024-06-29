import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Recipt.css";
import { toast } from "react-toastify";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Recipt() {
  const [payment, setPayment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch payment data from local storage when the component mounts
    const storedPayment = localStorage.getItem("Payment");
    if (storedPayment) {
      setPayment(JSON.parse(storedPayment));
    }
  }, []);

  const navigateHandler = () => {
    setPayment(null);
    localStorage.removeItem('Payment');
    toast.success("Successfully Saved", { position: "top-center" });

    // Generate PDF before navigating away
    const receiptElement = document.querySelector(".receipt-container");
    html2canvas(receiptElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save(`receipt_${payment.id}.pdf`);
      toast.success("Receipt saved as PDF", { position: "top-center" });

      // Navigate after saving the PDF
      setTimeout(() => {
        navigate('/');
      }, 500);
    });
  };

  if (!payment) {
    return <div>Loading...</div>;
  }

  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <div className="receipt-container">
        <img src="/websitelogo.png" alt="Website Logo" className="logo" />
        <h1 className="title">Donation Receipt</h1>
        <p style={{textAlign:"center",fontFamily:"cursive",fontWeight:"bold",fontSize:".6rem"}}>Thank you for your generous donation!</p>
        <div className="info-section">
          <label className="label">Donor Name:</label>
          <p className="info">{payment.name}</p>
        </div>
        <div className="info-section">
          <label className="label">Donation Amount:</label>
          <p className="info">${payment.amount.toFixed(2)}</p>
        </div>
        <div className="info-section">
          <label className="label">Donation Date:</label>
          <p className="info">{currentDate}</p>
        </div>
        <div className="info-section">
          <label className="label">Receipt Number:</label>
          <p className="info">{payment.id}</p>
        </div>
       
      </div>



    

    <div>
    <div className="btn" onClick={navigateHandler}>Save</div>
    </div>
    </>
  );
}

export default Recipt;
