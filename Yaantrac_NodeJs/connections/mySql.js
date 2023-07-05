const dbConfig = require("../Connections/db.config");


const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

 
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.deviceSchema = require("../schema/deviceSchema")(sequelize, Sequelize);

  module.exports=db