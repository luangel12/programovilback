const Course = require('../models/course');

// Crear un nuevo curso
exports.createCourse = async (courseData) => {
  const { name, faculty_id, teachers_amount } = courseData;

  const newCourse = await Course.create({
    name,
    faculty_id,
    teachers_amount,
  });

  return newCourse;
};

// Obtener todos los cursos
exports.getCourses = async () => {
  const courses = await Course.findAll();
  return courses;
};
