const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'krishna',
  database: 'ticket',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Create the table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS ticketsofusersss (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
  );
`;


db.query(createTableQuery, (err, result) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created or already exists');
  }
});



app.get('/tickets', (req, res) => {
    const sql = 'SELECT * FROM ticketsofuser';
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).send('Error fetching data: ' + err);
      }
      else{
          console.log(rows);
          res.status(200).json(results); // Send data as JSON response
      }
    });
  });
  

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
