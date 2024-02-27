const fs = require('fs');

async function countStudents(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    const lines = data.trim().split('\n');
    const fieldCounts = {};

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const [firstName, lastName, age, field] = line.split(',');

      if (firstName && lastName && age && field) {
        if (fieldCounts[field]) {
          fieldCounts[field] += 1;
        } else {
          fieldCounts[field] = 1;
        }
      }
    }
    const totalStudents = Object.values(fieldCounts).reduce((acc, count) => acc + count, 0);
    console.log(`Number of students: ${totalStudents}`);
/* eslint-disable */
    for (const field in fieldCounts) {
      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${lines.filter((line) => line.endsWith(field)).map((line) => line.split(',')[0]).join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
