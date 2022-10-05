const Sequelize = require("sequelize");

module.exports = class Used extends Sequelize.Model {
  static init(sequelize: any) {
    return super.init(
      {
        used_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          comment: "사용한 포인트 아이디",
          primaryKey: true,
          autoIncrement: true,
        },
        type: {
          type: Sequelize.TINYINT.UNSIGNED,
          allowNull: false,
          comment: "0: 상품구매, 1:이벤트 참여",
        },
        amount: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          comment: "잔여포인트",
        },
        create_at: {
          type: Sequelize.DATE,
          allowNull: false,
          comment: "사용 날짜 ",
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Used",
        tableName: "used",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db: any) {
    // db.Product.belongsTo(db.Admin, {
    //   foreignKey: "product_id",
    //   tagetKey: "id",
    // });
  }
};
export {};
