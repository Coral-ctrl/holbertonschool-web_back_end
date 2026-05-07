const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
   
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
   
      // Build the output as a string instead of console.log
      let output = `Number of students: ${students.length}`;
   
      const fields = {};
      for (const student of students) {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }
   
      for (const [field, names] of Object.entries(fields)) {
        output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }
  
      resolve(output);
    });
  });
}

// The database file is passed as a command line argument
const database = process.argv[2];

const app = http.createServer((req, res) => {
  // Set response header to plain text for any endpoint
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School1');
  } else if (req.url === '/students') {
    // Start the response with the header line
    countStudents(database)
      .then((output) => {
        res.end(`This is the list of our students\n${output}`);
      })
      .catch((err) => {
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    es.end(`Hello Holberton School!`);
  }
});

// Start listening on port 1245
app.listen(1245);

module.exports = app;
