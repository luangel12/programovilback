const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController')

router.post('/', teacherController.createTeacher)
router.get('/', teacherController.getTeachers)
router.get('/:id', teacherController.teacherProfile)

module.exports = router;