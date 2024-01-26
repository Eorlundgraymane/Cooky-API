import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const CommentLike = sequelizeServer.define("commentlike", {
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
                fields: ['commentID', 'profileID']
            }
        ]
    });


export default CommentLike;