// ****** importing the 'mysql' module **********
const mysql = require('mysql');

// ********** MySQL database connection parameter values ***********
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'phani',
});

// ********** END MySQL database connection parameter values ***********


// ******* Connect to the MySQL database ************
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database!');
});

// ******* Create the database  ***********//
function createDatabase(databaseName) {
  const sqlQuery = `CREATE DATABASE IF NOT EXISTS ${databaseName}`;
  connection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log(`Database '${databaseName}' created successfully.`);
  });
}

// ********* Create the table ****//

function createTable() {
  const sqlQuery = `
    CREATE TABLE IF NOT EXISTS employees (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255),
      department VARCHAR(100),
      salary DECIMAL(10, 2)
    )
  `;

  connection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log('Table "employees" created successfully.');
  });
}

// ********* Call the createDatabase function to create the database
createDatabase('phanidb');

// ******** Call the createTable function to create the table
createTable();

// ******** Close the MySQL connection after creating the table
connection.end((err) => {
  if (err) throw err;
  console.log('MySQL connection closed.');
});

module.exports = {
    createDatabase:createDatabase,
    createTable:createTable
}