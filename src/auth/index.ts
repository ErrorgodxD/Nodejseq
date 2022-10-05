import express, { Application, Request, Response } from "express";

const router = express.Router();

router.post("/a", (req, res) => {
  return res.status(200).json({
    data: "연결",
  });
});

router.post("/a1", (req, res) => {
  return res.status(200).json({
    data: "연결",
  });
});

module.exports = router;
