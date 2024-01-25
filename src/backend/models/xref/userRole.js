import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const UserRole = sequelizeServer.define("userRole", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
});

export default UserRole;