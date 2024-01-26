import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const PostLike = sequelizeServer.define("postlike", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
},
    {
        indexes: [
            {
                unique: true,
                fields: ['postID', 'profileID']
            }
        ]
    });

export default PostLike;