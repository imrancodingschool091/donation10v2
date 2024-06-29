import express from "express"
import { signup,login } from "../Controllers/user.controller.js"
import { paymentStatus } from "../Controllers/payment.controller.js"

const router=express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/payment",paymentStatus)




export default router