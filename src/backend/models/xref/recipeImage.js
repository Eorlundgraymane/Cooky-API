import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const RecipeImage = sequelizeServer.define("recipeImage", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
});

export default RecipeImage;