const Sequelize = require("sequelize");

module.exports = class Event extends Sequelize.Model {
  static init(sequelize: any) {
    return super.init(
      {
        event_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          comment: "이벤트 아이디",
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: "상품이름",
        },
        product_img: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          comment: "상품이미지",
        },
        stock: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: "상품 수량",
        },
        start: {
          type: Sequelize.DATE(),
          allowNull: false,
          comment: "이벤트 시작",
        },
        end: {
          type: Sequelize.DATE(),
          allowNull: false,
          comment: "이벤트  종료",
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Event",
        tableName: "event",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db: any) {
    db.event.belongsTo(db.Admin, {
      foreignKey: "event",
      targetKey: "id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
};
export {};
