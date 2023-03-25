'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      addressId: {
        type: Sequelize.INTEGER,
        references: {
          model:'addresses',
          key:"id",
        },
        onDeleted:"CASCADE",
        onUpdate:"CASCADE",
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model:"users",
          key:"id",
        },
        onDeleted:"CASCADE",
        onUpdated:"CASCADE",

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('places');
  }
};