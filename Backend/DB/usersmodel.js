import mongoose, { mongo } from 'mongoose'
import Joi from 'joi'
const usershcema = new mongoose.Schema(
    {
        username: Joi.string().min(3).max(20).required(),
        email: Joi.string().required(),
        password: Joi.string().min(8).max(20).required(),
        userimg: Joi.string()
    }
)
export const usermodel = mongoose.model('users', usershcema)