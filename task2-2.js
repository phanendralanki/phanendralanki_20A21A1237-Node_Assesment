// Task2-2.js
const { createDatabase, createTable } = require('./Task2-1');

function db() {
  try {
    // Call the createDatabase function
     createDatabase();
    console.log('Database created successfully.');

    // Call the createTable function
    createTable();
    console.log('Table created successfully.');
  } catch (error) {
    console.error('Error creating database or table:', error);
  }
}

// Call the main function to start the process
db();
