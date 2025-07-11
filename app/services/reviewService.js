const Review = require('../models/review');

// Crear una nueva valoración
exports.createReview = async (reviewData) => {
  try {
    const { user_id, teacher_id, course_id, comment, date } = reviewData;

    const newReview = await Review.create({
      user_id,
      teacher_id,
      course_id,
      comment,
      date,
    });

    return newReview;
  } catch (error) {
    console.error('Error al crear review:', error.message);
    throw new Error('No se pudo crear la valoración');
  }
};

// Obtener todas las valoraciones
exports.getReviews = async () => {
  try {
    const reviews = await Review.findAll();
    return reviews;
  } catch (error) {
    console.error('Error al obtener valoraciones:', error.message);
    throw new Error('No se pudieron obtener las valoraciones');
  }
};