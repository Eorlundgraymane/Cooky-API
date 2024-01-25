import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const PostImage = sequelizeServer.define("postImage", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
});

export default PostImage;