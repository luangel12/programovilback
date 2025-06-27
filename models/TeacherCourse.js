const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const TeacherCourse = sequelize.define('TeacherCourse', {
  teacher_course_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  teacher_id: { type: DataTypes.INTEGER },
  course_id: { type: DataTypes.INTEGER },
}, {
  tableName: 'teacher_course', timestamps: false
});

module.exports = TeacherCourse;
