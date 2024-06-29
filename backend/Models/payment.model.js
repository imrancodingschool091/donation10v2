import mongoose from "mongoose";

const paymentSchema=new mongoose.Schema({
    name:String,
    email:String,
    amount:Number,
    city:String,
},{timestamps:true})


export const Payment = mongoose.model("Payment",paymentSchema)