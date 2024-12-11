import express from "express";
import cors from 'cors'
import { router } from "./blogs/blogs.js";
import { DB_CONNECT } from "./DB/DBconnect.js";
import 'dotenv/config'
const app = express()
// import blogshandler from './blogs/blogs.js/router'
// port created 
// server listen 
app.listen(process.env.PORT || 4000, () => console.log('Server Start'))
// add middleware 
app.use(cors())
app.use(express.json())
// DB configure
DB_CONNECT()
// middleware 
app.use(express.json())
// add routing
app.use('/api/blogs', router  )