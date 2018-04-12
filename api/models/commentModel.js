import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    name: {
        type: String
    },
    comment: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    location: {
        type: String
    },
    date: {
        type: String
    }
});

export default mongoose.model('Comments', CommentSchema);