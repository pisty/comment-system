import mongoose from "mongoose";
const Comment = mongoose.model('Comments');

const listComments = (req, res) => {
    Comment.find({}, (err, comment) => {
        if(err){
            res.send(err);
        }
        res.json(comment);
    })
};

const addComment = (req, res) => {
    let newComment = new Comment(req.body);
    newComment.save((err, comment) => {
        if(err){
            res.send(err);
        }
        res.json(comment);
    });
};

const getComment = (req, res) => {
    Comment.findById(req.params.commentId, (err, comment) => {
        if(err){
            res.send(err);
        }
        res.json(comment);
    });
};

const updateComment = (req, res) => {
    Comment.findOneAndUpdate({_id: req.params.commentId}, req.body, {new: true}, (err, comment) => {
        if(err){
            res.send(err);
        }
        res.json(comment);
    });
};

const deleteComment = (req, res) => {
    Comment.remove({ _id: req.params.commentId}, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Comment succesfully deleted'});
    })
};

export default {listComments, addComment, getComment, updateComment, deleteComment};
