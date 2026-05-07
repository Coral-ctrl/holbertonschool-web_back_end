import readDatabase from '../utils';

class StudentsController {
  // Handles GET /students - lists all students grouped by field
  static getAllStudents(req, res) {
    // process.argv[2] is the database path passed as CLI argument
    // Retrieved at call time (not at startup) for testing purposes
    const database = process.argv[2];

    readDatabase(database)
      .then((fields) => {
        let output = 'This is the list of our students';

        // Sort fields alphabetically, case insensitive
        const sortedFields = Object.keys(fields).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase()));

        for (const field of sortedFields) {
          const names = fields[field];
          output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        }

        res.status(200).send(output);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  // Handles GET /students/:major - lists students for a specific field (CS or SWE)
  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    // Validate the major parameter
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const database = process.argv[2];

    readDatabase(database)
      .then((fields) => {
        const names = fields[major] || [];
        res.status(200).send(`List: ${names.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
