import { Sequelize } from 'sequelize'

const dbConnectionString = process.env.JAWSDB_URL;
let config = {};
if (dbConnectionString == null) {
  config = {
    username: "root",
    password: "password",
    hostname: "localhost",
    port: 3306,
    database: "cooky-api",
    dialect: "mysql",
  }
}
else {
  config = {
    connectionString: dbConnectionString.replace('mysql://', ''),
    username: connectionString.split(":")[0],
    password: connectionString.split(":")[1].split("@")[0],
    hostname: connectionString.split(":")[1].split("@")[1].split(":")[0],
    port: connectionString.split(":")[1].split("@")[1].split(":")[1].split("/")[0],
    database: connectionString.split(":")[1].split("@")[1].split(":")[1].split("/")[1]
  }
}
const database = new Sequelize(config);
database
  .authenticate()
  .then((result) => {
    console.log("LocalDB Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

export default database;

