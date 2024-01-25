import modelController from '../controllers/sequelizeController.js';
import Post from '../models/basic/post.js';

export default {
    // GET /api/users -> get all users
    get: {
        postByID: async (postID) => {
            return await modelController.findByPk(Post, postID, true, true);
        }
    },
    post: {
        likePost: async (postID, profileID) => {
            let post = await modelController.findByPk(Post, postID);
            post.createLike({ profileID: profileID });
            return post;
        },
    }
}