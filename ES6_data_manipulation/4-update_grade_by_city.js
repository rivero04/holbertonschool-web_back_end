export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      let grade = 'N/A';
      const gradeExist = newGrades.find(
        (gradeobj) => gradeobj.studentid === student.id,
      );
      if (gradeExist) {
        grade = gradeExist.grade;
      }
      return { ...student, grade };
    });
}
