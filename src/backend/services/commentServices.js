import modelController from '../controllers/sequelizeController.js';
import Comment from '../models/xref/comment.js';

export default {
    // GET /api/users -> get all users
    get: {
        commentByID: async (commentID) => {
            let comment = await modelController.findByPk(Comment, commentID, true, true);
            if (!comment) throw new Error('No such Comment exists');
            return comment;
        }
    },
    post: {
        createComment: async (profileID, postID, text) => {
            let params = {                
                profileID: profileID,
                postID: postID,
                text: text
            }
            let newComment = await modelController.create(Comment, params);
            return newComment;
        },
        likeComment: async (commentID, profileID) => {
            let likeComment = await modelController.findByPk(Comment, commentID);
            if (!likeComment) throw new Error('No such Comment exists');
            Comment.createLike({ profileID: profileID });
            return likeComment;
        },
        deleteComment: async (commentID) => {
            let deletedComment = await modelController.delete(Comment, commentID);
            if (!deletedComment) throw Error('Failed to delete the Comment');
            else return deletedComment;
        },
    }
}