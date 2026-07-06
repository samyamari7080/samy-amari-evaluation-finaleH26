const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Bibliothèque",
      version: "1.0.0",
      description: "Documentation de l'API de l'application de bibliothèque numérique (React + Express + MySQL)"
    },
    servers: [
      { url: "http://localhost:5000", description: "Serveur local" },
      { url: "https://samy-amari-evaluation-finaleh26.onrender.com", description: "Serveur déployé (Render)" }
    ]
  },
  apis: [__dirname + "/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;