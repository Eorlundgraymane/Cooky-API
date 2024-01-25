import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const PostLike = sequelizeServer.define("postlike", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
});

export default PostLike;