import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const Comment = sequelizeServer.define("comment", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

export default Comment;