import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "IaA170998y146df",
  database: "blog",
});
