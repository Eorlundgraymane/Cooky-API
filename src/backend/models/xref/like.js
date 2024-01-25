import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const Like = sequelizeServer.define("like", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
});

export default Like;