import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const Post = sequelizeServer.define("post", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

export default Post;