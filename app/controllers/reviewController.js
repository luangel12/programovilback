const Review = require('../models/review');

// Crear una nueva valoración
exports.createReview = async (req, res) => {
  const { user_id, teacher_id, course_id, comment, date } = req.body;

  try {
    const review = await Review.create({
      user_id,
      teacher_id,
      course_id,
      comment,
      date,
    });

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todas las valoraciones
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
