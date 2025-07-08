const { Group, Label } = require('../models');

exports.getGroupsWithLabels = async (req, res) => {
  try {
    const groupsWithLabels = await Group.findAll({
      include: [{
        model: Label,
        attributes: ['label_id', 'name', 'image_url', 'group_id'],
      }],
      order: [['group_id', 'ASC']],
    });

    // Separar en dos listas
    const groups = groupsWithLabels.map(group => {
      return {
        group_id: group.group_id,
        name: group.name,
        text: group.text,
        image_url: group.image_url,
      };
    });

    const labels = groupsWithLabels.flatMap(group =>
      group.Labels.map(label => ({
        label_id: label.label_id,
        name: label.name,
        image_url: label.image_url,
        group_id: label.group_id,
      }))
    );

    res.status(200).json({
      groups,
      labels
    });

  } catch (error) {
    console.error("Error al obtener grupos con etiquetas:", error);
    res.status(500).json({ error: error.message });
  }
};
