const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const TeachersCourses = require('./Teachers_courses');
const Course = require('./course');

const Teacher = sequelize.define('Teacher', {
  teacher_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  college_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Colleges',
      key: 'college_id',
    },
    allowNull: false,
  },
  ratings: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'teachers',
  timestamps: false,
});

Teacher.belongsToMany(Course, {
  through: TeachersCourses,
  foreignKey: 'teacher_id',
  otherKey: 'course_id',
  as: 'courses'
});

module.exports = Teacher;
