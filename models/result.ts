const Sequelize = require("sequelize");

module.exports = class Result extends Sequelize.Model {
  static init(sequelize: any) {
    return super.init(
      {
        result_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          comment: "당첨/미당첨",
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        notice: {
          type: Sequelize.STRING(255),
          comment: "당첨 알림 메시지 ",
          allowNull: false,
        },
        //user_id 가져와서 당첨자 공지
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Result",
        tableName: "result",
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
