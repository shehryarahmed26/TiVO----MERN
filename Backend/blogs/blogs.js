import express  from "express";
import { Blogmodel } from "../DB/blogmodel.js";
export const router = express.Router()

router.get('/', async (req, res) => {
    const getblogs = await Blogmodel.find()
    console.log(getblogs);
    res.json({status: 200, Blogs: getblogs})
})
router.post('/', async (req, res) => {
   const blog = req.body
   const blogs = await Blogmodel(blog)
   blogs.save()
   res.json({status: 200, blog: blog, message: 'blog Added Successfully'})
})
router.put('/:id', async (req, res) => {
    const {id} = req.params
    const updatedblog = req.body
    const blogs = await Blogmodel.findByIdAndUpdate(id, updatedblog)
    res.json({staus: 200, message: 'blog updated'})
})
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    const Deleteblog = await Blogmodel.findByIdAndDelete(id)
    res.json({status: 200, Deleteblog, message: 'Blog Deleted Successfully'})
})