import { DATE } from "sequelize";

const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize: any) {
    return super.init(
      {
        user_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
          comment: "유저 아이디",
        },
        email: {
          type: Sequelize.STRING(40),
          allowNull: false,
          comment: "로그인 계정",
        },
        nickname: {
          type: Sequelize.STRING(15),
          allowNull: false,
          comment: "닉네임",
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: false,
          comment: "비밀번호",
        },
        host: {
          type: Sequelize.STRING(15),
          allowNull: false,
          comment: "로그인 정보",
        },
        uuid: {
          type: Sequelize.STRING(10),
          allowNull: false,
          comment: "유저 uuid",
        },
        created_at: {
          type: DATE,
          createdAt: Date.now(),
          comment: "생성 날짜",
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "user",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db: any) {}
};
export {};
