import modelController from '../controllers/sequelizeController.js';
import Profile from '../models/basic/profile.js';

export default {
    // GET /api/users -> get all users
    get: {
        profileByID: async (profileID) => {
            return await modelController.findByPk(Profile, profileID, true, true);
        }
    },
    post: {
        createProfile: async (dob, userID) => {
            let params = {
                dob: dob,
                userID: userID,
            }
            return await modelController.create(Profile, params);
        }
    }
}