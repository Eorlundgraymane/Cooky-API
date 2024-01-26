import modelController from '../controllers/sequelizeController.js';
import Profile from '../models/basic/profile.js';
import ProfileImage from '../models/xref/profileImage.js';

export default {
    // GET /api/users -> get all users
    get: {
        profileByID: async (profileID) => {
            return await modelController.findByPk(Profile, profileID, true);
        },
        imageByProfileID: async (profileID) => {
            let params = {
                profileID: profileID
            }
            return await modelController.findOne(ProfileImage, params);
        }
    },
    post: {
        createProfile: async (dob, userID) => {
            let params = {
                dob: dob,
                userID: userID,
            }
            return await modelController.create(Profile, params);
        },
        addProfileImage: async (profileID, imageID) => {
            let params = {
                profileID: profileID,
                imageID: imageID
            }
            let profileImage = await modelController.create(ProfileImage, params);
            return profileImage;
        },
    },

}