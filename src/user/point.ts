import express, { Request, Response, NextFunction } from "express";

const c = require("../../config/constants");
const router = express.Router();
const Point = require("../../models/point");

router.post("/point", async (req: Request, res: Response, NextFunction) => {
  try {
    const { amount } = req.body;
    if (amount === undefined) {
      return res.status(200).json({
        alert: c.usererrorcode,
        message: "email이 없습니다.",
      });
    }

    const uobj = await Point.create({
      amount: amount,
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
