import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import CryptoJS from 'crypto-js';

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    let user = await User.findOne({ "email": req.body.email });
    if (!user) {
      res.status(400).json({success:false, "error":"User not found"});
      return; // Stop further execution if no user is found
    }
    const bytes = CryptoJS.AES.decrypt(user.password, "secret123");
    let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
    if (req.body.email == user.email && req.body.password == decryptedPass) {
      res.status(200).json({ success: true, email: user.email, name: user.name });
    } else {
      res.status(400).json({success:false, "error":"Invalid Credentials"});
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
