import { Payment } from "../Models/payment.model.js";

export const paymentStatus = async (req, res) => {
  let { name, email, amount, city } = req.body;

  try {
    let newPayment = new Payment({
      name: name,
      email: email,
      amount: amount,
      city: city,
    });

    newPayment.save();

    res.status(201).json({
      message: "now you are redy to donate!",
      newPayment: {
        id: newPayment._id,
        name: newPayment.name,
        email: newPayment.email,
        city:newPayment.city,
        amount:newPayment.amount,
        date:newPayment.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "500 server ERR :", error });

    console.log(`server ERR:${error}`);
  }
};
