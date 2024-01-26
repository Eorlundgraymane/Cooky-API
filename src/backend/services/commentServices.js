import modelController from '../controllers/sequelizeController.js';
import Comment from '../models/xref/comment.js';
import CommentLike from '../models/xref/commentlike.js';
import CommentImage from '../models/xref/commentImage.js';

export default {
    // GET /api/users -> get all users
    get: {
        commentByID: async (commentID) => {
            let comment = await modelController.findByPk(Comment, commentID, true);
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
        addCommentImage: async (commentID, imageID) => {
            let params = {
                commentID: commentID,
                imageID: imageID
            }
            let commentImage = await modelController.create(CommentImage, params);
            return commentImage;
        },
        likeComment: async (commentID, profileID) => {
            let comment = await modelController.findByPk(Comment, commentID);
            if (!comment) throw new Error('No such Comment exists');
            let commentLike = await comment.createLike({ profileID: profileID });
            return commentLike;
        },
    },
    delete: {
        unlikeComment: async (commentID, profileID) => {
            let params = {
                profileID: profileID,
                commentID: commentID
            }
            let unlikeComment = await CommentLike.findAll(params);
            await unlikeComment.forEach(unlike => unlike.destroy())
            return unlikeComment;
        },
        deleteComment: async (commentID) => {
            let deletedComment = await modelController.delete(Comment, commentID);
            if (!deletedComment) throw Error('Failed to delete the Comment');
            else return deletedComment;
        },
    }
}