import modelController from '../controllers/sequelizeController.js';
import Image from '../models/basic/image.js';

export default {
    // GET /api/users -> get all users
    get: {
        imageByID: async (imageID) => {
            return await modelController.findByPk(Image, imageID, true, true);
        }
    },
    post: {
        createImage: async (email, username, password) => {
            let params = {
                email: email,
                username: username,
                password: password
            }
            return await modelController.create(Image, params);
        }
    }
}