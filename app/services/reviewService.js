const Review = require('../models/review');

// Crear una nueva valoración
exports.createReview = async (reviewData) => {
  const { user_id, teacher_id, course_id, comment, date } = reviewData;

  const newReview = await Review.create({
    user_id,
    teacher_id,
    course_id,
    comment,
    date,
  });

  return newReview;
};

// Obtener todas las valoraciones
exports.getReviews = async () => {
  const reviews = await Review.findAll();
  return reviews;
};
