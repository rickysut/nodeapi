'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content_overview: {
        type: Sequelize.TEXT
      },
      prerequisites: {
        type: Sequelize.TEXT
      },
      experience: {
        type: Sequelize.TEXT
      },
      course_duration: {
        type: Sequelize.STRING
      },
      field_of_interest: {
        type: Sequelize.JSON,
        allowNull: false
      },
      language: {
        type: Sequelize.JSON
      },
      add_detail: {
        type: Sequelize.TEXT
      },
      is_feature: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      view: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses');
  }
};