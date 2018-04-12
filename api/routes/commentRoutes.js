import commentController from "../controllers/commentController";

export default (app) => {
    app.route('/comments')
      .get(commentController.listComments)
      .post(commentController.addComment)

    app.route('/commentsShopRenter')
      .post(commentController.addCommentShopRenter)
    
    app.route('/comments/:commentId')
      .get(commentController.getComment)
      .put(commentController.updateComment)
      .delete(commentController.deleteComment);
}