const Teacher = require('../models/teacher')
const Review = require('../models/review');

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
        const reviews = await Review.findAll({
            where:{
                teacher_id:id
            }
        });
        res.status(200).json({teacher,reviews});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}