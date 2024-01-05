'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    paranoid: true,
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content_overview: DataTypes.TEXT,
    prerequisites: DataTypes.TEXT,
    experience: DataTypes.TEXT,
    course_duration: DataTypes.STRING,
    field_of_interest: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    language: DataTypes.JSON,
    add_detail: DataTypes.TEXT,
    is_feature: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    view: DataTypes.INTEGER,
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status:  {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};