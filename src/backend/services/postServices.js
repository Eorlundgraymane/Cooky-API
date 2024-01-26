import modelController from '../controllers/sequelizeController.js';
import Post from '../models/basic/post.js';
import PostLike from '../models/xref/postlike.js';
import PostImage from '../models/xref/postImage.js';

export default {
    // GET /api/users -> get all users
    get: {
        postByID: async (postID) => {
            let post = await modelController.findByPk(Post, postID, true);
            if (!post) throw new Error('No such post exists');
            return post;
        }
    },
    post: {
        createPost: async (profileID, text) => {
            let params = {
                profileID: profileID,
                text: text
            }
            let newPost = await modelController.create(Post, params);
            return newPost;
        },
        addPostImage: async (postID, imageID) => {
            let params = {
                postID: postID,
                imageID: imageID
            }
            let postImage = await modelController.create(PostImage, params);
            return postImage;
        },
        likePost: async (postID, profileID) => {
            let post = await modelController.findByPk(Post, postID);
            if (!post) throw new Error("Invalid post ID");
            let like = await post.createLike({ profileID: profileID });
            return like;

        },
        createComment: async (profileID, postID, text) => {
            let params = {
                profileID: profileID,
                postID: postID,
                text: text
            }
            let newPost = await modelController.create(Post, params);
            return newPost;
        },
    },
    delete: {
        deletePost: async (postID) => {
            let deletedPost = await modelController.delete(Post, postID);
            if (!deletedPost) throw Error('Failed to delete the post');
            else return deletedPost;
        },
        unlikePost: async (postID, profileID) => {
            let params = {
                profileID: profileID,
                postID: postID
            }
            let unlikePost = await PostLike.findAll(params);
            await unlikePost.forEach(unlike => unlike.destroy())
            return unlikePost;
        },
    }
}