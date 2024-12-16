import express from "express";
import cors from 'cors'
import { router } from "./blogs/blogs.js";
import { DB_CONNECT } from "./DB/DBconnect.js";
import 'dotenv/config'
import { userrouter } from "./users/users.js";
import { loginrouter } from "./login/login.js";
import { pending_blogs_router } from "./pendingblogs/Pen-blogs.js";
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
// add routing
app.use('/api/blogs', router  )
app.use('/api/auth/register', userrouter  )
app.use('/api/auth/login', loginrouter  )
app.use('/api/pendingblogs', pending_blogs_router  )