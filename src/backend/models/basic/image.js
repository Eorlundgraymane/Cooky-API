import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const Image = sequelizeServer.define("image", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    imageURL: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    category: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "UNCATEGORIZED"
    }
});

export default Image;