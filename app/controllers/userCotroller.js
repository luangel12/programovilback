const User = require('../models/user')

const Review = require('../models/review');

exports.getProfile = async (req, res) => {
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
};

