const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController')

// Obtener profesores por universidad
router.get('/college/:college_id', teacherController.getTeachersByCollege);

// Obtener profesores por universidad
router.get('/course/:course_id', teacherController.getTeachersByCourse);

router.post('/', teacherController.createTeacher)
router.get('/', teacherController.getTeachers)
router.get('/:id', teacherController.teacherProfile)

module.exports = router;