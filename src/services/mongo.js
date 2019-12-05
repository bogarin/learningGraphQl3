import chalk from "chalk";
//indicar el estado de la conexion de la base de datos
const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

module.exports = ({ urlMongo, portMongo, dbMongo })=>({mongoose}) => ({
  connection: () => {
    const dbURL = `${urlMongo}${portMongo}${dbMongo}`;
    mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    mongoose.connection.on("connected", function () {
      console.log(connected("Conectando a la base de datos de MongoDB", dbURL));
    });
    mongoose.connection.on("error", function (err) {
      console.log(error("Error de conexion con la base de datos " + err + " error"));
    });
    mongoose.connection.on("disconnected", function () {
      console.log(disconnected("desconexion a la base de datos"));
    });
    process.on("SIGINT", function () {
      mongoose.connection.close(function () {
        console.log(termination("Desconectada la aplicacion de la base de datos"));
        process.exit(0);
      });
    });
  }
});
