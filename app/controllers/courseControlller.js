
const { Teacher, Course, Faculty} = require('../models');

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


// Obtener cursos por universidad
exports.getCoursesByCollege = async (req, res) => {
  const { college_id } = req.params;

  try {
    const courses = await Course.findAll({
      include: {
        model: Faculty,
        as: 'faculty',
        where: { college_id },
        attributes: [] 
      }
    });

    if (courses.length === 0) {
      return res.status(404).json({ message: 'No se encontraron cursos para esta universidad' });
    }

    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getCoursesByTeacher = async (req, res) => {
  const { teacher_id } = req.params;

  try {
    const teacher = await Teacher.findByPk(teacher_id, {
      include: {
        model: Course,
        as: 'courses_t',
        through: { attributes: [] }, 
      },
    });

    if (!teacher) {
      return res.status(404).json({ message: 'Profesor no encontrado' });
    }

    res.status(200).json(teacher.courses_t);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};