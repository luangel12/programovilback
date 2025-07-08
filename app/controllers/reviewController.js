const { Review, User, Course, Label, Group} = require('../models');
const sequelize = require('../../config/database');
const { Op, fn, col, literal } = require('sequelize');


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
    const reviews = await Review.findAll({
      include: [
        { model: User, attributes: ['username'] },
        { model: Course, attributes: ['name'] },
      ],
    });

    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Obtener reviews por profesor
exports.getReviewsByTeacher1 = async (req, res) => {
  const { teacher_id } = req.params;

  try {
    const reviews = await Review.findAll({
      where: { teacher_id },
      include: [
        { model: require('../models/user'), attributes: ['username'] },
        { model: require('../models/course'), attributes: ['name'] },
        {
          model: require('../models/label'),
          through: { attributes: [] },
        }
      ]
    });

    res.status(200).json(reviews);
  } catch (err) {
    console.error('Error al obtener reviews por profesor:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.getReviewsByTeacher = async (req, res) => {
  const { teacher_id } = req.params;

  try {
    const reviews = await Review.findAll({
      where: { teacher_id },
      include: [
        { model: require('../models/user'), attributes: ['username', 'image_url'] },
        { model: require('../models/course'), attributes: ['name'] },
        {
          model: require('../models/label'),
          attributes: ['name', 'group_id'],
          through: { attributes: [] },
        }
      ]
    });

    const reviewDisplay = reviews.map(r => {
      const emojiLabel = r.Labels?.find(l => l.group_id === 1);

      return {
        username: r.User.username,
        imageUrl: r.User.image_url || '',
        comment: r.comment,
        date: new Date(r.date).toISOString().split('T')[0], 
        courseName: r.Course.name,
        emoji: emojiLabel ? emojiLabel.name : '', 
      };
    });

    res.status(200).json(reviewDisplay);
  } catch (err) {
    console.error('Error al obtener reviews display por profesor:', err);
    res.status(500).json({ error: err.message });
  }
};

//Obtener labels por profesor
exports.getLabelsByTeacher = async (req, res) => {
  const { teacher_id } = req.params;

  try {
    const labels = await Label.findAll({
      attributes: [
        'label_id',
        'name',
        [fn('COUNT', col('Reviews.review_id')), 'usage_count'],
        [col('Group.group_id'), 'group_id'], // <- Esto expone group_id directamente
      ],
      include: [
        {
          model: Review,
          attributes: [],
          where: { teacher_id: teacher_id }
        },
        {
          model: Group,
          attributes: [], // <- No queremos anidar Group, solo usar su columna
          where: {
            group_id: {
              [Op.ne]: 1
            }
          }
        }
      ],
      group: ['Label.label_id', 'Group.group_id'],
      order: [[literal('usage_count'), 'DESC']]
    });

    res.status(200).json(labels);
  } catch (error) {
    console.error('Error al obtener etiquetas por profesor:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.createReview = async (req, res) => {
  try {
    const { teacher_id, course_id, comment, label_ids } = req.body;
    const user_id = req.user.user_id; 

    if (!teacher_id || !course_id || !Array.isArray(label_ids)) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    // Crear el review
    const review = await Review.create({
      user_id,
      teacher_id,
      course_id,
      comment,
      date: new Date()
    });

    // Asociar etiquetas
    await review.addLabels(label_ids);

    res.status(201).json({ message: 'Review creado con éxito' });
  } catch (err) {
    console.error('Error al crear review:', err);
    res.status(500).json({ error: err.message });
  }
};
