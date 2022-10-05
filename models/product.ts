const Sequelize = require("sequelize");

module.exports = class Product extends Sequelize.Model {
  static init(sequelize: any) {
    return super.init(
      {
        product_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          comment: "구매 가능한 상품 ",
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING(10),
          allowNull: false,
          comment: "상품이름",
        },
        price: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          comment: "상품 가격",
        },
        stock: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: "상품 수량",
        },
        status: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: "상품 상태",
        },
        img: {
          type: Sequelize.STRING(100),
          allowNull: false,
          comment: "상품 이미지",
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Product",
        tableName: "product",
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
