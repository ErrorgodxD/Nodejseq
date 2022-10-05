import express, { Application, Request, Response } from "express";

const router = express.Router();
const c = require("../../config/constants");
const Admin = require("../../models/admin");
const Product = require("../../models/product");

router.post("/product", async (req: Request, res: Response) => {
  try {
    const { name, price, stock, status, img } = req.body;

    if (price === undefined) {
      return res.status(200).json({
        code: c.emailUndefinedCode,
        message: c.emailUndefinedMessage,
      });
    }

    if (stock === undefined) {
      return res.status(200).json({
        code: 2,
        message: "상태 업데이트가 필요합니다.",
      });
    }

    if (name === undefined) {
      return res.status(200).json({
        code: 3,
        message: "name이 없습니다.",
      });
    }
    if (status === undefined) {
      return res.status(200).json({
        code: 3,
        message: "status가 없습니다.",
      });
    }
    if (img === undefined) {
      return res.status(200).json({
        code: 3,
        message: "이미지가 없습니다.",
      });
    }

    const object = await Product.create({
      name: name,
      price: price,
      stock: stock,
      status: status,
    });

    return res.status(200).json({
      code: c.successCode,
      createAdmin: object,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      code: 500,
      alert: "서버응답오류",
    });
  }
});

module.exports = router;
