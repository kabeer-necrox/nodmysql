// Add an event listener to the submit button
var submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', function() {
    // Get the values entered in the input fields
    var name = document.getElementById('nameInput').value;
    var dob = document.getElementById('dobInput').value;
    var cnic = document.getElementById('cnicInput').value;
    var email = document.getElementById('emailInput').value;
    var phone = document.getElementById('phoneInput').value;

    // Create the alert message with the entered values
    var alertMessage = 'Name: ' + name + '\n' +
                       'DOB: ' + dob + '\n' +
                       'CNIC: ' + cnic + '\n' +
                       'Email: ' + email + '\n' +
                       'Phone: ' + phone;

    // Display the alert
    alert(alertMessage);
});


const mysql = require('mysql');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'resume_db'
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Handle form submission and insert data into the database
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
  // Get the input values from the form
  const name = document.querySelector('#nameInput').value;
  const dob = document.querySelector('#dobInput').value;
  const cnic = document.querySelector('#cnicInput').value;
  const email = document.querySelector('#emailInput').value;
  const phone = document.querySelector('#phoneInput').value;
  const address = document.querySelector('#textInput').value;
  const education = document.querySelector('#edexp').value;

  // Construct the SQL query
  const query = `INSERT INTO resumes (name, dob, cnic, email, phone, address, educational_experience)
                 VALUES ('${name}', '${dob}', '${cnic}', '${email}', '${phone}', '${address}', '${education}')`;

  // Execute the query
  connection.query(query, (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      return;
    }
    console.log('Data inserted successfully');
  });
});




