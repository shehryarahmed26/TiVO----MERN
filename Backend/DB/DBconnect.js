import mongoose from "mongoose";
import 'dotenv/config'
import chalk from "chalk";
export async function DB_CONNECT () {
        await mongoose.connect(process.env.DB_URL)
        .then(() => console.log('Database Connectrd'))
        .catch((err) => console.log('Databse not connect', err)) 
}