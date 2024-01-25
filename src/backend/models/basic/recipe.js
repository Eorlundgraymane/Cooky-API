import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const Recipe = sequelizeServer.define("recipe", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,        
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ingredients: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default Recipe;