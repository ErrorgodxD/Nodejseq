import express, { Application, Request, Response } from "express";
const router = express.Router();
const c = require("../../config/constants");
const Event = require("../../models/event");

router.post("/join", async (req: Request, res: Response) => {
  try {
    const { name, stock, product_img, start, end } = req.body;

    if (name === undefined) {
      return res.status(200).json({
        code: c.emailUndefinedCode,
        message: c.emailUndefinedMessage,
      });
    }

    if (stock === undefined) {
      return res.status(200).json({
        code: 2,
        message: "수량이 없습니다.",
      });
    }

    if (product_img === undefined) {
      return res.status(200).json({
        code: 3,
        message: "상품이미지가 없습니다.",
      });
    }

    if (start === undefined) {
      return res.status(200).json({
        code: 3,
        message: "이벤트 시작 날짜가 없습니다.",
      });
    }
    if (end === undefined) {
      return res.status(200).json({
        code: 3,
        message: "이벤트 종료 날짜가 없습니다.",
      });
    }

    const object = await Event.create({
      name: name,
      stock: stock,
      product_img: product_img,
      start: start,
    });

    return res.status(200).json({
      code: c.successCode,
      createAdmin: object,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      code: c.errorCode,
      message: c.errorMessgae,
    });
  }
});

module.exports = router;
