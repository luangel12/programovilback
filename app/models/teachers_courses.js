const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const TeachersCourses = sequelize.define('TeachersCourses', {
  teacher_course_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  teacher_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Teachers',
      key: 'teacher_id',
    },
    allowNull: false,
  },
  course_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Courses',
      key: 'course_id',
    },
    allowNull: false,
  },
}, {
  tableName: 'teacher_course',
  timestamps: false,
});

module.exports = TeachersCourses;
