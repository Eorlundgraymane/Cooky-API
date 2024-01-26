import modelController from '../controllers/sequelizeController.js';
import Image from '../models/basic/image.js';

export default {
    get: {
        imageByID: async (imageID) => {
            return await modelController.findByPk(Image, imageID,true);
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
    }
}