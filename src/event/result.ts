import express, { Application, Request, Response } from "express";
const router = express.Router();
const c = require("../../config/constants");
const Result = require("../../models");

router.post("/result", async (req: Request, res: Response) => {
  try {
    const { notice } = req.body;

    if (notice === undefined) {
      return res.status(200).json({
        message: "공지가 없습니다.",
      });
    }

    const object = await Result.create({
      notice: notice,
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
