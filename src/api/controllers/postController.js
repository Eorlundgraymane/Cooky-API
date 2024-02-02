import postServices from "../../backend/services/postServices.js";

const errorHandler = (err, req, res) => {
    console.log(err);
    res.status(500).json(err);
}

export default {
    get: {
        postByID: async (req, res) => {
            try {
                let postID = req.query.id;
                let post = await postServices.get.postByID(postID);
                res.send(post);
            }
            catch (err) {
                errorHandler(err, req, res);
            }
        }
    },
    post: {
        likePost: async (req, res) => {
            try {
                let postID = req.body.postID;
                let profileID = req.body.profileID;
                let post = await postServices.post.likePost(postID, profileID);
                res.send(post);
            }
            catch (err) {
                errorHandler(err, req, res);
            }
        },
        addPostImage: async (req, res) => {
            let postID = req.body.postID;
            let imageID = req.body.imageID;
            let imageXrefID = await postServices.post.addPostImage(postID, imageID);
            res.send(imageXrefID);
        },
        createPost: async (req, res) => {
            try {
                console.log(req.body);
                let profileID = req.body.profileID;
                let text = req.body.text;
                res.send(await postServices.post.createPost(profileID, text));
            }
            catch (err) {
                errorHandler(err, req, res);
            }
        }
    },
    delete: {
        unlikePost: async (req, res) => {
            try {
                let postID = req.body.postID;
                let profileID = req.body.profileID;
                let post = await postServices.delete.unlikePost(postID, profileID);
                res.send(post);
            }
            catch (err) {
                errorHandler(err, req, res);
            }
        }
    }
}