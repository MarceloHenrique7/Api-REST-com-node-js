import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "bdcopa",
});

connection.connect();

export default connection;
