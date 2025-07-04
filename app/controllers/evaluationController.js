const { Group, Label } = require('../models');

exports.getGroupsWithLabels = async (req, res) => {
  try {
    const groups = await Group.findAll({
      include: [{
        model: Label,
        attributes: ['label_id', 'name', 'image_url'],
      }],
      order: [['group_id', 'ASC']], 
    });

    res.status(200).json(groups);
  } catch (error) {
    console.error("Error al obtener grupos con etiquetas:", error);
    res.status(500).json({ error: error.message });
  }
};
