const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "JWT Express Auth API",
      version: "1.0.0",
      description: "Simple authentication API with register, login, and profile routes"
    },
    servers: [
      {
        url: "http://localhost:8000"
      }
    ]
  },
  apis: ["./routes/*.js"]
};

module.exports = swaggerJsdoc(options);
