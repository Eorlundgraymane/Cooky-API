import modelController from '../controllers/sequelizeController.js';
import Item from '../models/basic/item.js';
import ItemImage from '../models/xref/itemImage.js';

export default {
    // GET /api/users -> get all users
    get: {
        itemByID: async (recipeID) => {
            return await modelController.findByPk(Item, recipeID, true);
        }
    },
    post: {
        createItem: async (profileID, name, description) => {
            let params = {
                profileID: profileID,
                name: name,
                description: description                
            }
            return await modelController.create(Item, params);
        },
        addItemImage: async (itemID, imageID) => {
            let params = {
                itemID: itemID,
                imageID: imageID
            }
            let itemImage = await modelController.create(ItemImage, params);
            return itemImage;
        },
    }
}