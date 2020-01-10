const jwt = require('jsonwebtoken');
const { Recipe } = require('../models');
module.exports = {
    async saveRecipe (req, res) {
        const { token } = req.query;
        const tokenDecoded = jwt.decode(token, { complete: true });
        const userId = tokenDecoded.payload.id;
        if (!userId) {
            res.status(500).json({
                error: 'Invalid user'
            });
        } else {
            const { recipe_id, name } = req.body;
            const recipe = {
                recipe_id,
                name,
                user_id: userId,
            };
            try {
                const response = await Recipe.findOrCreate({
                    where: {
                        recipe_id: recipe.recipe_id
                    },
                    defaults: recipe
                });
                res.status(200).send(response);
            } catch (err) {
                res.status(500).json(err);
            }
        }
    },
    async getSavedRecipes (req, res) {
        const { token } = req.query;
        const tokenDecoded = jwt.decode(token, { complete: true });
        const userId = tokenDecoded.payload.id;
        try {
            const savedRecipes = await Recipe.findAll({
                where: {
                    user_id: userId,
                },
                limit: 20,
            });
            res.send(savedRecipes);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async removeSavedRecipe (req, res) {
        const { id } = req.body;
        try {
            await Recipe.destroy({
                where: {
                    recipe_id: id
                }
            });
            res.status(200).json({
                message: 'Recipe removed'
            })
        } catch (err) {
            res.status(500).json(err);
        }
    }
};