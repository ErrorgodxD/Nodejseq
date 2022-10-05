import { Response, Request, NextFunction } from "express";

const { sequelize } = require("./models");
const express = require("express");
const app = express();
const authRoute = require("./src/auth/index");
const adminRoute = require("./src/admin/index");
const userRoute = require("./src/user/index");
const productRoute = require("./src/product/index");
const eventRoute = require("./src/event/event");
const resultRoute = require("./src/event/result");
const pointRoute = require("./src/user/point");
const usedRoute = require("./src/user/used");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.set("port", 3001);

sequelize
  .sync({
    force: false,
  })
  .then(() => {
    console.log("데이터베이스 연결");
  })
  .catch((error: Error) => {
    console.log(error);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("추첨");
});

app.use("/auth", authRoute);
app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/event", eventRoute);
app.use("/event", resultRoute);
app.use("/point", pointRoute);
app.use("/point", usedRoute);

app.listen(app.get("port"), function () {
  console.log(`App is listening on port 3001 !`);
});

module.exports = app;
