import express  from "express";
import { usermodel } from "../DB/usersmodel.js";
export const userrouter = express.Router()
userrouter.get('/', async (req, res) => {
    const getusers = await usermodel.find()
    res.json({status: 200, users: getusers})
})
userrouter.post('/', async (req, res) => {
   const user = req.body
   const newuser = await usermodel(user)
   newuser.save()
   res.json({status: 200, useradd: newuser, message: 'User Added Successfully'})
})
userrouter.put('/:id', async (req, res) => {
    const {id} = req.params
    const updateduser = req.body
    const users = await usermodel.findByIdAndUpdate(id, updateduser)
    res.json({staus: 200, message: 'User updated'})
})
userrouter.delete('/:id', async (req, res) => {
    const {id} = req.params
    const Deleteuser = await usermodel.findByIdAndDelete(id)
    res.json({status: 200, Deleteuser, message: 'User Deleted Successfully'})
})