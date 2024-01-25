import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const ProfileRecipe = sequelizeServer.define("profileRecipe", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
});

export default ProfileRecipe;