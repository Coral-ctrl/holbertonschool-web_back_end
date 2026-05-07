const fs = require('fs');

function countStudents(path) {
  // Return a Promise so the caller can use .then() and .catch()
  return new Promise((resolve, reject) => {
    // Read the file asynchronously - does NOT block the rest of the program
    fs.readFile(path, 'utf8', (err, data) => {
      // If there was an error (e.g. file not found), reject the Promise
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split into lines and filter out any empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Remove the header row, leaving only student rows
      const students = lines.slice(1);

      console.log(`Number of students: ${students.length}`);

      // Group firstnames by field
      const fields = {};
      for (const student of students) {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }

      // Log a summary line for each field
      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      // Resolve the Promise now that all work is done
      resolve();
    });
  });
}

module.exports = countStudents;
