import express, { Request, Response, NextFunction } from "express";

const c = require("../../config/constants");
const router = express.Router();
const Used = require("../../models/used");

router.post("/used", async (req: Request, res: Response, NextFunction) => {
  try {
    const { type, amount, create_at } = req.body;
    if (type === undefined) {
      return res.status(200).json({
        alert: c.usererrorcode,
        message: "타입 분류가 없습니다.",
      });
    }

    if (amount === undefined) {
      return res.status(200).json({
        alert: c.usererrorcode,
        message: "잔여포인트를 조회할 수 없습니다.",
      });
    }

    if (create_at === undefined) {
      return res.status(200).json({
        alert: c.usererrorcode,
        message: "날짜가 없습니다.",
      });
    }

    const uobj = await Used.create({
      type: type,
      amount: amount,
      create_at: create_at,
    });

    return res.status(200).json({
      alert: c.successCode,
      createUser: uobj,
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
