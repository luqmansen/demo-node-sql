const dbConfig = require("../config/db.js");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(
  dbConfig.database, dbConfig.username, dbConfig.password, 
  {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require("./book.js")(sequelize, Sequelize);
db.authors = require("./authors.js")(sequelize, Sequelize);

db.authors.hasMany(db.books, {as: "books"});
db.books.belongsTo(db.authors, {
  foreignKey: 'author_id',
  as: 'author',
});

module.exports = db;