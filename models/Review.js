const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Review = sequelize.define('Review', {
  review_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER },
  teacher_id: { type: DataTypes.INTEGER },
  course_id: { type: DataTypes.INTEGER },
  comment: { type: DataTypes.TEXT },
  date: { type: DataTypes.STRING },
}, {
  tableName: 'reviews', timestamps: false
});

module.exports = Review;