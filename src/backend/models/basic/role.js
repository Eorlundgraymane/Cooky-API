import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const Role = sequelizeServer.define("role", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    grade: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    level: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

export default Role;