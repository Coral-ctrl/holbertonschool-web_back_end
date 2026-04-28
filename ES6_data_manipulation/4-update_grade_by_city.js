export default function updateStudentGradeByCity(students, city, newGrades) {
    return students.filter((student) => student.location === city)
    .map((student) => {
        const gradeObj = newGrades.find((g) => g.studentId === student.id);
        // JavaScript lets you skip the quotes on keys when the name is 
        // a valid identifier (no spaces, doesn't start with a number, etc)
        // so grade (no quotes) → the key being added to the new object
        return { ...student, grade: gradeObj ? gradeObj.grade : 'N/A'};
    });
}
