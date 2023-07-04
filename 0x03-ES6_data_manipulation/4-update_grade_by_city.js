export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const studentsGrade = newGrades.find((grade) => grade.studentId === student.id);
      const grade = studentsGrade === undefined ? 'N/A' : studentsGrade.grade;

      return { ...student, grade };
    });
  // returns an array of students for a specific city with their new grade
}
