import Footer from "./Footer";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


const Donate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let userInfo = {
      name: data.name,
      email: data.email,
      amount: 10, // Fixed amount
      city: data.city,
     
    };
    console.log(data)

    try {
      let response = await axios.post(
        "http://localhost:4000/user/payment",
        userInfo
      );

      if (response.status === 201) {
        toast.success(response.data.message, { position: "top-center" });
        localStorage.setItem(
          "Payment",
          JSON.stringify(response.data.newPayment)
        );
       

        setTimeout(() => {
          navigate("/payment");
        }, 500);

      } else if (response.status === 404) {
        toast.error(response.data.message, { position: "top-center" });
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          toast.error("User Not Found", { position: "top-center" });
        } else if (error.response.status === 500) {
          toast.error("500 server ERR: " + error.response.data.message, {
            position: "top-center",
          });
        } else {
          toast.error(
            error.response.data.message || "An error occurred during signup",
            { position: "top-center" }
          );
        }
      } else if (error.request) {
        toast.error("No response received from server", {
          position: "top-center",
        });
      } else {
        toast.error("An error occurred while setting up the request", {
          position: "top-center",
        });
      }
    }
  };
  

  return (
    
    <>
    <Navbar/>

    <section className="donate">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div>
          <img src="/public/websitelogo.png" alt="logo" />
        </div>
        <div>
          <label>Show your love for Poors</label>
          <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        
        </div>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        
        <input
          type="tel"
          value="10" // Fixed amount
          readOnly // Prevent typing
          {...register("amount")}
        />
         <input
          type="text"
          placeholder="City"
          {...register("city", { required: true })}
        />
        {errors.city && <span>This field is required</span>}
       
        <button type="submit" className="btn" >
          Donate Now
        
        </button>
      </form>
    </section>

    <Footer/>
    
    
    </>
  );
};

export default Donate;
