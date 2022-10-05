"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addCloumm("Product", "admin_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("Product", {
      type: "foreign Key",
      name: "admin_product_id_fk",
      references: {
        table: "admin_id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("product", "admin_id");
  },
};
