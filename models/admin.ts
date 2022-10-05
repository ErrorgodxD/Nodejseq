const Sequelize = require("sequelize");

module.exports = class Admin extends Sequelize.Model {
  static init(sequelize: any) {
    return super.init(
      {
        admin_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          comment: "관리자pk",
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        email: {
          type: Sequelize.STRING(20),
          allowNull: false,
          comment: "관리자 이메일",
        },
        name: {
          type: Sequelize.STRING(10),
          allowNull: false,
          comment: "관리자 이름",
        },

        password: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: "관리자 비밀번호",
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Admin",
        tableName: "admin",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db: any) {
    db.Admin.hasMany(db.Event, {
      foreignKey: "admin_id",
      sourceKey: "admin_id",
    });
  }
};

export {};
