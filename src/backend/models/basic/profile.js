import Sequelize from "sequelize";
import sequelizeServer from '../../database/sequelizeServer.js';

const Profile = sequelizeServer.define("profile", {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dob: {
    type: Sequelize.DATE,
    allowNull: true
  }
});

export default Profile;