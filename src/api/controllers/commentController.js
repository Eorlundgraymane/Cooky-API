import commentServices from '../../backend/services/commentServices.js';

const errorHandler = (err, req, res) => {
    console.log(err);
    res.status(500).json(err);
}

export default {
    get: {
        commentByID: async (req, res) => {
            try {
                let postID = req.query.id;
                let post = await commentServices.get.commentByID(postID);
                res.send(post);
            }
            catch (err) {
                errorHandler(err, req, res);
            }
        }
    },
    post: {
        createComment: async (req, res) => {
            try {
                console.log(req.body);
                let profileID = req.body.profileID;
                let postID = req.body.postID;
                let text = req.body.text;
                res.send(await commentServices.post.createComment(profileID, postID, text));
            }
            catch (err) {
                errorHandler(err, req, res);
            }

        },
        likeComment: async (req, res) => {
            try {
                let commentID = req.body.commentID;
                let profileID = req.body.profileID;
                let comment = await commentServices.post.likeComment(commentID, profileID);
                res.send(comment);
            }
            catch (err) {
                errorHandler(err, req, res);
            }
        },
        addCommentImage: async (req, res) => {
            let commentID = req.body.commentID;
            let imageID = req.body.imageID;
            let imageXrefID = await commentServices.post.addCommentImage(commentID, imageID);
            res.send(imageXrefID);
        }
    },
    delete: {
        unlikeComment: async (req, res) => {
            try {
                let commentID = req.body.commentID;
                let profileID = req.body.profileID;
                let comment = await commentServices.delete.unlikeComment(commentID, profileID);
                res.send(comment);
            }
            catch (err) {
                errorHandler(err, req, res);
            }
        }
    }
}