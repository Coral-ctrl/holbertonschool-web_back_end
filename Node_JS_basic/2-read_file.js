const fs = require('fs');

function countStudents(path) {
    try {
        // Read the file synchronously - blocks execution until file is fully read
        const data = fs.readFileSync(path, 'utf8');

        // Split file content into individual lines, then remove any empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Remove the header row (firstname,lastname,age,field) leaving only student rows
        const students = lines.slice(1);

        console.log(`Number of students: ${students.length}`);

        // Object to group student firstnames by their field e.g. { CS: ['Johann', ...], SWE: [...] }
        const fields = {};

        for (const student of students) {
            // Destructure each CSV row - we only need firstname (index 0) and field (index 3)
            // The two empty slots skip over lastname and age
            const [fistname, , , field] = student.split(',');

            // If this field hasn't been seen before, initialise it with an empty array
            if (!fields[field]) fields[field] = [];

            // Add the student's firstname to their field group
            fields[field].push(firstname);
        }

        // Log a summary line for each field
        for (const [field, names] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (e) {
        // If the file doesn't exist or can't be read, throw a human-readable error
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
