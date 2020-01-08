const api = require('../api/api');
const fetch = require('node-fetch');

module.exports = {
    async getItem(req, res) {
        try {
            const itemId = req.params.id;
            const url = `${api.api.item}${itemId}`;
            fetch(url)
                .then(response => response.json())
                .then(data => res.send(data))
        } catch (err) {
            res.status(500).json(err)
        }
    }
}