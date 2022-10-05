const Sequelize = require("sequelize");

module.exports = class Point extends Sequelize.Model {
  static init(sequelize: any) {
    return super.init(
      {
        point_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          comment: "당첨/미당첨",
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        amount: {
          type: Sequelize.INTEGER.UNSIGNED,
          comment: "보유 포인트 ",
          allowNull: false,
        },
        //user_id 가져와서 당첨자 공지
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Point",
        tableName: "point",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db: any) {
    // fk 추가하기
  }
};
export {};
