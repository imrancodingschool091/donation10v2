import { User } from "../Models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  let { username, email, password } = req.body;

  try {
    let exitsUser = await User.findOne({ email });

    if (exitsUser) {
      return res.status(404).json({ message: "User Alredy Exits", exitsUser });
    }

    let hashedPassword = await bcryptjs.hash(password, 10);

    let newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
      message: "User Signup sucessfully..",
      newUser: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "500 server ERR :", error });

    console.log(`server ERR:${error}`);
  }
};



export const login= async(req,res)=>{
    let {  email, password } = req.body;



    try {
        let user=await User.findOne({email})

        if (!user) {
            return res.status(404).json({message:"User Not Found!",user})
            
        }

        let match=await bcryptjs.compare(password,user.password)
        if (!match) {
            return res.status(404).json({message:"email Or password does not Match!",match})
            
        }

        res.status(201).json({message:"User Login sucessfully",user:{
            id:user._id,
            username:user.username,
            email:user.email
        }})



        
    } catch (error) {
        res.status(500).json({ message: "500 server ERR :", error });

    console.log(`server ERR:${error}`);
        
    }
}
