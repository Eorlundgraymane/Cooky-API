import itemServices from "../../backend/services/itemServices";

export default {
    get: {
        itemByID: async (req, res) => {
            let itemID = req.body.itemID;
            let item = await itemServices.get.recipeByID(itemID);
            res.send(item);
        }
    },
    post: {
        addItemImage: async (req, res) => {
            let itemID = req.body.itemID;
            let imageID = req.body.imageID;
            let itemImage = await itemServices.post.addItemImage(itemID, imageID);
            res.send(itemImage);
        },
        createItem: async (req, res) => {
            let profileID = req.body.profileID;
            let name = req.body.name;
            let description = req.body.description;
            let item = await itemServices.post.createItem(profileID, name, description);
            res.send(item);
        }
    }
}