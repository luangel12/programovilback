const Course = require('../models/course');

// Crear un nuevo curso
exports.createCourse = async (req, res) => {
  const { name, faculty_id, teachers_amount } = req.body;

  try {
    const course = await Course.create({
      name,
      faculty_id,
      teachers_amount,
    });
    
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todos los cursos
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un curso por ID
exports.getCourseById = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
