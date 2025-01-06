const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    mobileNumber: { type: DataTypes.BIGINT, unique: true, allowNull: false },
    address: { type: DataTypes.TEXT },
    postCount: { type: DataTypes.INTEGER, defaultValue: 0 },
  });
