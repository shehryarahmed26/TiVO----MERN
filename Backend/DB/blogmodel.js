import mongoose, { Schema } from "mongoose";
const blogshcema = new Schema(
    {
        title: mongoose.Schema.Types.String,
        des: mongoose.Schema.Types.String,
        author: mongoose.Schema.Types.String,
    },
    {
        timestamps: true
    }
)
export const Blogmodel = mongoose.model('AllBlogs', blogshcema)