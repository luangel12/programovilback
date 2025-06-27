const User = require('./user');
const Teacher = require('./teacher');
const College = require('./college');
const Faculty = require('./faculty');
const Course = require('./course');
const Review = require('./review');
const Label = require('./label');
const ReviewLabel = require('./review_label');
const TeachersCourses = require('./teachers_courses');
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

Teacher.belongsToMany(Course, { through: TeachersCourses });
Course.belongsToMany(Teacher, { through: TeachersCourses });

Teacher.belongsToMany(College, { through: TeachersColleges });
College.belongsToMany(Teacher, { through: TeachersColleges });

Review.belongsToMany(Label, { through: ReviewLabel });
Label.belongsToMany(Review, { through: ReviewLabel });
