const User = require('./user');
const Teacher = require('./teacher');
const College = require('./college');
const Faculty = require('./faculty');
const Course = require('./course');
const Review = require('./review');
const Label = require('./label');
const Group = require('./group')
const ReviewLabel = require('./review_label');
const TeachersCourses = require('./teacher_course');
const TeachersColleges = require('./teachers_colleges');

// Definir relaciones
User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });

Teacher.hasMany(Review, { foreignKey: 'teacher_id' });
Review.belongsTo(Teacher, { foreignKey: 'teacher_id' });

Course.hasMany(Review, { foreignKey: 'course_id' });
Review.belongsTo(Course, { foreignKey: 'course_id' });

College.hasMany(Faculty, { foreignKey: 'college_id' });
Faculty.belongsTo(College, { foreignKey: 'college_id' });

Faculty.hasMany(Course, { foreignKey: 'faculty_id' });
Course.belongsTo(Faculty, { foreignKey: 'faculty_id' });

Review.belongsToMany(Label, { through: ReviewLabel, foreignKey: 'review_id', otherKey: 'label_id'});
Label.belongsToMany(Review, { through: ReviewLabel, foreignKey: 'label_id', otherKey: 'review_id'});

Label.belongsTo(Group, { foreignKey: 'group_id' });
Group.hasMany(Label, { foreignKey: 'group_id' });

Teacher.belongsToMany(Course, {
  through: TeachersCourses,
  foreignKey: 'teacher_id',
  otherKey: 'course_id',
  as: 'courses_t'
});
Course.belongsToMany(Teacher, {
  through: TeachersCourses,
  foreignKey: 'course_id',
  otherKey: 'teacher_id',
  as: 'teachers'
});

Teacher.belongsToMany(College, {
  through: TeachersColleges,
  foreignKey: 'teacher_id',
  otherKey: 'college_id',
  as: 'colleges'
});

College.belongsToMany(Teacher, {
  through: TeachersColleges,
  foreignKey: 'college_id',
  otherKey: 'teacher_id',
  as: 'teachers'
});

User.belongsTo(College, { foreignKey: 'college_id', as: 'college' });
College.hasMany(User, { foreignKey: 'college_id' });

module.exports = {
  User,
  Teacher,
  College,
  Faculty,
  Course,
  Review,
  Label,
  Group,
  ReviewLabel,
  TeachersCourses,
  TeachersColleges,
};