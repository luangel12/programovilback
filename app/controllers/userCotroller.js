const { Review, User, Course, Label, Group, Teacher, College } = require('../models');

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

exports.editProfile = async (req, res) => {
  try {
    const userId = req.user.user_id; // asumimos que se extrae del token
    const { username, email, image_url, college_id } = req.body;

    // Buscar al usuario
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Actualizar campos si fueron proporcionados
    if (username !== undefined) user.username = username;
    if (email !== undefined) user.email = email;
    if (image_url !== undefined) user.image_url = image_url;
    if (college_id !== undefined) user.college_id = college_id;

    await user.save();

    // Traer datos actualizados con la relación
    const updatedUser = await User.findByPk(userId, {
      attributes: ['user_id', 'username', 'email', 'image_url', 'college_id'],
      include: {
        model: College,
        as: 'college',
        attributes: ['name'],
      },
    });

    res.status(200).json({
      message: 'Perfil actualizado correctamente',
      userData: {
        user_id: updatedUser.user_id,
        username: updatedUser.username,
        email: updatedUser.email,
        image_url: updatedUser.image_url,
        college_id: updatedUser.college_id,
        collegeName: updatedUser.college?.name || null,
      },
    });
  } catch (err) {
    console.error('Error en editProfile:', err);
    res.status(500).json({ error: 'Error al actualizar el perfil' });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.user_id, {
      attributes: ['user_id', 'username', 'email', 'image_url', 'college_id'],
      include: {
        model: College,
        as: 'college',
        attributes: ['name']
      }
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
      userData: {
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        image_url: user.image_url,
        college_id: user.college_id,
        collegeName: user.college?.name || null,
      },
      reviews: formattedReviews,
    });
  } catch (err) {
    console.error('Error en getProfile:', err);
    res.status(500).json({ error: err.message });
  }
};


