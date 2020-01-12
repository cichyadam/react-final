const fetch = require('node-fetch');
const api = require('../api/api');

module.exports = {
    async fetchByIngredient(req, res) {
        try {
            const { ingredient } = req.params;
            const url = `${api.api.search}i=${ingredient}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => res.send(data));
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async fetchByCategory(req, res) {
        try {
            const { category } = req.params;
            const url = `${api.api.search}c=${category}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => res.send(data));
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async fetchByCuisine(req, res) {
        try {
            const { cuisine } = req.params;
            const url = `${api.api.search}a=${cuisine}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => res.send(data));
        } catch (err) {
            res.status(500).json(err);
        }
    }
}