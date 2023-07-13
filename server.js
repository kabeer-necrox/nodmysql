const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'resume_db'
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a route for submitting the resume data
app.post('/submit', (req, res) => {
  const { name, dob, cnic, email, phone, address, education } = req.body;

  // Create a SQL query to insert the data into the resumes table
  const query = `INSERT INTO resumes (name, dob, cnic, email, phone, address, educational_experience)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

  // Execute the query with the provided data
  pool.query(query, [name, dob, cnic, email, phone, address, education], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).json({ error: 'An error occurred while submitting the data' });
      return;
    }
    res.json({ message: 'Data submitted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
