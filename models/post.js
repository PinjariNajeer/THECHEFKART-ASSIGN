const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('Post', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT },
    images: { type: DataTypes.JSON },
  });
