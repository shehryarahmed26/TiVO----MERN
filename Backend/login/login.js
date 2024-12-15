import express  from "express";
import { usermodel } from "../DB/usersmodel.js";
export const loginrouter = express.Router()

loginrouter.post('/', async (req, res) => {
   const {email, password} = req.body
   const auth = await usermodel.findOne({email, password})
   if (auth) {
   return  res.json({ user: auth, message: 'user login successfully'})
}
else {
   return  res.json({status: 500, auth: false, message: 'Invalid email or password'})
   }
//    res.json({status: 200, useradd: newuser, message: 'User Added Successfully'})
})
