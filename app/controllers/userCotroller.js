const { Review, User, Course, Label, Group, Teacher} = require('../models');

const formatUserReviews = (reviews) => {
  return reviews.map(r => {
    const allLabels = r.Labels || [];
    const emojiLabel = allLabels.find(l => l.group_id === 1);
    const otherLabels = allLabels.filter(l => l.group_id !== 1);

    return {
      review_id: r.review_id,
      comment: r.comment,
      date: new Date(r.date).toISOString().split('T')[0], 
      courseName: r.Course?.name || '',
      emoji: emojiLabel?.name || '',
      labels: otherLabels.map(l => ({
        label_id: l.label_id,
        name: l.name,
        image_url: l.image_url,
        group_id: l.group_id,
      })),
      username: r.Teacher?.name || 'Profesor desconocido',
      imageUrl: r.Teacher?.image_url || '',
    };
  });
};


/*exports.getProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.user_id, {
            attributes: ['user_id', 'username', 'email', 'image_url', 'college_id'] // excluye password
        });

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const reviews = await Review.findAll({
            where: {
                user_id: user.user_id
            }
        });
        res.status(200).json({ userData: user, reviews });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};*/


exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.user_id, {
      attributes: ['user_id', 'username', 'email', 'image_url', 'college_id'],
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const reviews = await Review.findAll({
      where: { user_id: user.user_id },
      include: [
        {
          model: Teacher,
          attributes: ['teacher_id', 'name', 'image_url', 'ratings'],
        },
        {
          model: Course,
          attributes: ['name'],
        },
        {
          model: Label,
          through: { attributes: [] },
          attributes: ['label_id', 'name', 'image_url', 'group_id'],
        }
      ],
      order: [['date', 'DESC']],
    });

    const formattedReviews = formatUserReviews(reviews);

    res.status(200).json({
      userData: user,
      reviews: formattedReviews,
    });
  } catch (err) {
    console.error('Error en getProfile:', err);
    res.status(500).json({ error: err.message });
  }
};


