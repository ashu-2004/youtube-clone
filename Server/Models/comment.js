import mongoose from "mongoose";

const commentschema = mongoose.Schema({
    videoid: String,
    userid: String,
    commentbody: String,
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    usercommented: String,
    commentedon: { type: Date, default: Date.now }
})
export default mongoose.model("Comments", commentschema)