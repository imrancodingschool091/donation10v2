import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import router from "./Routes/user.route.js"


const app=express()
dotenv.config()


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const PORT=process.env.PORT ||8080


const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

// Call the database connection function
connectDB();




app.use("/user",router)


app.listen(PORT,()=>{
    console.log(`the app is listning on port ${PORT}`)
})

