import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const ItemImage = sequelizeServer.define("itemImage", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
});

export default ItemImage;