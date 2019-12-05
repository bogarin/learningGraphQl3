import dotenv from "dotenv";
dotenv.config();
module.exports = {
  type:process.env.NODE_TYPE || "dev",
  urlMongo: process.env.MONGO_URL || "mongodb://localhost:",
  portMongo: process.env.MONGO_PORT || "1717",
  dbMongo: process.env.MONGO_DB || "/clientes",
  portNode:process.env.PORT|| 3088
};
