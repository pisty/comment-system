import mongoose from "mongoose";
const Comment = mongoose.model('Comments');

const listComments = (req, res) => {
    Comment.find({}, (err, comment) => {
        if(err){
            res.send(err);
        }
        res.json(comment.reverse());
    })
};

const addComment = (req, res) => {
    const location = req.headers.origin;
    let newComment = new Comment(Object.assign({location: location}, req.body));
    newComment.save((err, comment) => {
        if(err){
            res.send(err);
        }
        res.json(comment);
    });
};

const addCommentShopRenter = (req, res) => {
    const location = req.headers.origin;
    let commentObj = req.body.location !== undefined ? req.body : Object.assign({location: location}, req.body);
    let newComment = new Comment(commentObj);
    newComment.save((err) => {
        if(err){
            res.send(err);
        }
        res.redirect(`${location}/thankyou`);
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

export default {listComments, addComment, addCommentShopRenter, getComment, updateComment, deleteComment};
