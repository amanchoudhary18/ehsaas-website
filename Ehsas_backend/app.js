const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const userRouter = require("./route/userRoute");
const eventRouter = require("./route/eventRoute");
const globalErrorHandler = require("./controller/errorController");
const AppError = require("./utils/appError");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' https://*.mapbox.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data: https: ;object-src 'none';script-src https://cdnjs.cloudflare.com https://api.mapbox.com 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
  );
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/events", eventRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);
module.exports = app;
