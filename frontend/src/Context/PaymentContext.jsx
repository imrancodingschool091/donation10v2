import { createContext, useState, useContext,  } from "react";

export const PaymentContext = createContext();

function PaymentProvider({ children }) {
  const initialPayment = localStorage.getItem("Payment");

  const [Payment, setPayment] = useState(
    initialPayment ? JSON.parse(initialPayment) : null
  );

 
  return (
    <PaymentContext.Provider value={[Payment, setPayment ]}>
      {children}
    </PaymentContext.Provider>
  );
}

export const usePayment = () => useContext(PaymentContext);
export default PaymentProvider;