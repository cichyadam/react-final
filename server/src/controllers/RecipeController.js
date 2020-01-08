const jwt = require('jsonwebtoken');

const { Recipe } = require('../models');

module.exports = {
    async saveRecipe (req, res) {
        try {
            // TODO - save rcipe as Auth user
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSavedRecipes (req, res) {
        try {
            // TODO - get all saved recipes of Authed user
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
