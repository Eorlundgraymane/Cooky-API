import modelController from '../controllers/sequelizeController.js';
import Image from '../models/basic/image.js';
import ProfileImage from '../models/xref/profileImage.js';
import PostImage from '../models/xref/postImage.js';
import RecipeImage from '../models/xref/recipeImage.js';
import ItemImage from '../models/xref/itemImage.js';
import CommentImage from '../models/xref/commentImage.js';

export default {
    get: {
        imageByID: async (imageID) => {
            return await modelController.findByPk(Image, imageID);
        },
        imageByProfileID: async (profileID) => {
            let params = {
                profileID: profileID
            }
            return await modelController.findAll(Image, params);
        }
    },
    post: {
        createImage: async (profileID, imageURL, category) => {
            let params = {
                profileID: profileID,
                imageURL: imageURL,
                category: category
            }
            let newImage = await modelController.create(Image, params);
            return newImage;
        },
        addProfileImage: async (profileID, imageID) => {
            let params = {
                profileID: profileID,
                imageID: imageID
            }
            let profileImage = await modelController.create(ProfileImage, params);
            return profileImage;
        },
        addPostImage: async (postID, imageID) => {
            let params = {
                postID: postID,
                imageID: imageID
            }
            let postImage = await modelController.create(PostImage, params);
            return postImage;
        },
        addRecipeImage: async (recipeID, imageID) => {
            let params = {
                recipeID: recipeID,
                imageID: imageID
            }
            let recipeImage = await modelController.create(RecipeImage, params);
            return recipeImage;
        },
        addItemImage: async (itemID, imageID) => {
            let params = {
                itemID: itemID,
                imageID: imageID
            }
            let itemImage = await modelController.create(ItemImage, params);
            return itemImage;
        },
        addCommentImage: async (commentID, imageID) => {
            let params = {
                commentID: commentID,
                imageID: imageID
            }
            let commentImage = await modelController.create(CommentImage, params);
            return commentImage;
        },
    }
}