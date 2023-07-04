export default function getStudentIdsSum(studentList) {
  const value = studentList.reduce((sum, student) => sum + student.id, 0);
  // return sum of all student ids
  return value;
}
