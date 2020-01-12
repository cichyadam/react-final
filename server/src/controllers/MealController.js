const fetch = require('node-fetch');
const api = require('../api/api');

module.exports = {
    async getItem(req, res) {
        try {
            const itemId = req.params.id;
            const url = `${api.api.item}${itemId}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => res.send(data));
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
