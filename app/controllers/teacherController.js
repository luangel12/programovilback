const Teacher = require('../models/teacher')
const Review = require('../models/review');
const College = require('../models/college')
const TeachersColleges = require('../models/teachers_colleges');

exports.createTeacher = async (req,res) => {
    const {name,image_url,college_id,ratings} = req.body;
    try {
        const teacher = await Teacher.create({
            name,
            image_url,
            college_id,
            ratings
        })

        res.status(201).json(teacher)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getTeachers = async (req,res) => {
    try {
    const teachers = await Teacher.findAll();
    res.status(200).json(teachers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.teacherProfile = async (req,res) => {
    const {id} = req.params
    try {
        const teacher = await Teacher.findOne({
            where:{
               teacher_id: id 
            }
        })
        if(!teacher){
            res.status(400).json({error: 'Profesor no encontrado'})
        }

        const fetchColleges = await TeachersColleges.findAll({where:{
          teacher_id:id
        }})

        const collegesIds = fetchColleges.map((x) => x.college_id)

        const fetchColleges2 = await College.findAll({
            where: {
                college_id: collegesIds
            },
            attributes: ['college_id', 'name']
        });

        const colleges = fetchColleges2.map((x) =>x.dataValues);

        const reviews = await Review.findAll({
            where:{
                teacher_id:id
            }
        });
        res.status(200).json({teacher,colleges,reviews});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getTeachersByCollege = async (req, res) => {
  const { college_id } = req.params;

  try {
    const teachers = await Teacher.findAll({
      where: {
        college_id: college_id
      }
    });

    if (!teachers || teachers.length === 0) {
      return res.status(404).json({ error: 'No se encontraron profesores para esta universidad' });
    }

    res.status(200).json(teachers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
