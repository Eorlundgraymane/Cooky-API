import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const commentImage = sequelizeServer.define("commentImage", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
});

export default commentImage;