const College = require('../models/college')

exports.createCollege = async (req,res) => {
    const {name, image_url} = req.body;
    try {
        const college = await College.create({
            name,
            image_url,
            teachers_amount:120
        })

        res.status(201).json(college)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getColleges =  async (req,res) => {
    try {
    const colleges = await College.findAll();
    res.status(200).json(colleges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Obtener una universidad por ID
exports.getCollegeById = async (req, res) => {
  const { id } = req.params;
  try {
    const college = await College.findByPk(id);
    if (!college) {
      return res.status(404).json({ error: 'Universidad no encontrada' });
    }
    res.status(200).json(college);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};