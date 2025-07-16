const Teacher = require('../models/teacher')
const Review = require('../models/review');
const College = require('../models/college')
const TeachersColleges = require('../models/teachers_colleges');
const ReviewLabel = require('../models/review_label')
const Label = require('../models/label')
const Course = require('../models/course');
const TeacherCourse = require('../models/teacher_course')


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

        console.log('Obtebniendo profe info')
        
        const fetchColleges = await TeachersColleges.findAll({where:{
          teacher_id:id
        }})

        const collegesIds = fetchColleges.map((x) => x.college_id)

        console.log('Obtebniendo unis ids')

        const fetchColleges2 = await College.findAll({
            where: {
                college_id: collegesIds
            },
            attributes: ['college_id', 'name']
        });

        const colleges = fetchColleges2.map((x) =>x.dataValues);

        console.log('Obtebniendo unis info')

        const reviews = await Review.findAll({
            where:{
                teacher_id:id
            }
        });

        console.log('Obtebniendo reviews info')

        const reviewIds = reviews.map((x) => x.review_id)

        const fetchLabels = await ReviewLabel.findAll({
            where: {
                review_id: reviewIds
            }
        });

        const labelsIds = [...new Set(fetchLabels.map((item) => item.dataValues.label_id))].filter(x => x>4);

        const labelsFetch = await Label.findAll({
          where:{
            label_id:labelsIds
          }
        })

        console.log('Obtebniendo labels')

        const labels = labelsFetch.map(x => x.dataValues)
        
        res.status(200).json({teacher,colleges,labels,reviews});
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

exports.getTeachersByCourse = async (req, res) => {
  const { course_id } = req.params;

  try {

    const fetchTeachers = await TeacherCourse.findAll({
      where:{
        course_id
      }
    })

    const teachersIds = fetchTeachers.map(x => x.teacher_id)

    const teachers = await Teacher.findAll({
      where: {
        college_id: teachersIds
      }
    });

    /*if (!teachers || teachers.length === 0) {
      return res.status(404).json({ error: 'No se encontraron profesores para esta universidad' });
    }*/

    res.status(200).json(teachers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};