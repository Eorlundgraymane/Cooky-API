import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const Item = sequelizeServer.define("item", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

export default Item;