const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Label = sequelize.define('Label', {
    label_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    group_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'labels',
    timestamps: false
});

module.exports = Label;