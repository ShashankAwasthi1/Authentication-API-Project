require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const authRoutes = require("./routes/auth.routes");
const authLimiter = require("./middlewares/rateLimiter.middleware");
const errorMiddleware = require("./middlewares/error.middleware");
const swaggerSpec = require("./docs/swagger");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Auth API is running" });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/auth", authLimiter, authRoutes);

app.use(errorMiddleware);

module.exports = app;
