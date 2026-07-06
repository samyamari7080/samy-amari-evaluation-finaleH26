const express = require("express");
const router = express.Router();

const {
    getLivres,
    getLivresEmpruntesByEmail
} = require("../controllers/livresController");

/**
 * @swagger
 * /api/livres:
 *   get:
 *     summary: Récupère la liste des livres disponibles
 *     tags: [Livres]
 *     responses:
 *       200:
 *         description: Liste des livres disponibles
 */
router.get("/", getLivres);

/**
 * @swagger
 * /api/livres/emprunts:
 *   get:
 *     summary: Récupère les emprunts d'un utilisateur à partir de son email
 *     tags: [Emprunts]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: Adresse email de l'utilisateur
 *     responses:
 *       200:
 *         description: Liste des emprunts de l'utilisateur
 */
router.get("/emprunts", getLivresEmpruntesByEmail);

module.exports = router;