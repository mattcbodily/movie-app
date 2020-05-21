module.exports = {
    getFandoms: (req, res) => {
        const db = req.app.get('db');

        db.fandom.get_fandoms()
        .then(fandoms => res.status(200).send(fandoms))
        .catch(err => res.status(500).send(err));
    }
};