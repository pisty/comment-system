import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    name: {
        type: String,
        required: ''
    },
    comment: {
        type: String,
        required: ''
    }
});

export default mongoose.model('Comments', CommentSchema);