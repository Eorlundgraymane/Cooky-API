import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const ProfileImage = sequelizeServer.define("profileImage", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
});

export default ProfileImage;