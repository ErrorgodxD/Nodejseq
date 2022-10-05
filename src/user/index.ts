import express, { Request, Response, NextFunction } from "express";

const c = require("../../config/constants");
const router = express.Router();
const User = require("../../models/user");

router.post("/signup", async (req: Request, res: Response, NextFunction) => {
  try {
    const { email, nickname, uuid } = req.body;
    if (email === undefined) {
      return res.status(200).json({
        alert: c.usererrorcode,
        message: "email이 없습니다.",
      });
    }

    if (nickname === undefined) {
      return res.status(200).json({
        alert: c.usererrorcode,
        message: "닉네임이 없습니다.",
      });
    }

    if (uuid === undefined) {
      return res.status(200).json({
        alert: c.usererrorcode,
        message: "uuid 없음",
      });
    }

    const uobj = await User.create({
      email: email,
      nickname: nickname,
      uuid: uuid,
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
