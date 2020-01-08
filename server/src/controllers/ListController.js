const api = require('../api/api');
const fetch = require('node-fetch');

module.exports = {
    async listCategories(req, res) {
        try {
            const url = `${api.api.list}c=list`;
            fetch(url)
                .then(response => response.json())
                .then(data => res.send(data))
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async listCuisines(req, res) {
        try {
            const url = `${api.api.list}a=list`;
            fetch(url)
                .then(response => response.json())
                .then(data => res.send(data))
        } catch (err) {
            res.status(500).json(err)
        }
    }

}