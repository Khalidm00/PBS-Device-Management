const express = require('express')
const sql = require('mysql2')

const connection= mysql.createConnection({
    user: 'DESKTOP-M6PTNLQ\khali',
    password: '',
    server: 'DESKTOP-M6PTNLQ\SQLEXPRESS',
    database: 'PbsDeviceManagement'
});

connection.query(
    'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))',
    function(err, results, fields) {
      if (err) throw err;
      console.log('Table created successfully!');
    }
  );
  
  connection.end();