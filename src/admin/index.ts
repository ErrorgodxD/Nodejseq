import express, { Application, Request, Response } from "express";
const router = express.Router();
const c = require("../../config/constants");
const Admin = require("../../models/admin");

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    if (email === undefined) {
      return res.status(200).json({
        code: c.emailUndefinedCode,
        message: c.emailUndefinedMessage,
      });
    }

    if (password === undefined) {
      return res.status(200).json({
        code: 2,
        message: "password가 없습니다.",
      });
    }

    if (name === undefined) {
      return res.status(200).json({
        code: 3,
        message: "name이 없습니다.",
      });
    }

    const object = await Admin.create({
      email: "error10901@gmail.com",
      password: "hostileT90!!",
      name: "JMCHOI",
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
