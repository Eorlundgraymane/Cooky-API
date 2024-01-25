import modelController from '../controllers/sequelizeController.js';
import Post from '../models/basic/post.js';

export default {
    // GET /api/users -> get all users
    get: {
        postByID: async (postID) => {
            let post = await modelController.findByPk(Post, postID, true, true);
            if (!post) throw new Error('No such post exists');
            return post;            
        }
    },
    post: {
        likePost: async (postID, profileID) => {
            let post = await modelController.findByPk(Post, postID);
            if (!post) throw new Error('No such post exists');
            post.createLike({ profileID: profileID });
            return post;
        },
        createPost: async (profileID, text) => {
            let params = {
                profileID: profileID,
                text: text               
            }
            let newPost = await modelController.create(Post, params);                   
            return newPost;
        },
        deletePost: async (postID) => {
            let deletedPost = await modelController.delete(Post, postID);
            if (!deletedPost) throw Error('Failed to delete the post');
            else return deletedPost;            
        }
    }
}