const Sell = require('../models/sell'),
    User = require('../models/user'),
    data = require('../data/index.js')

exports.createSell = function(req, res) {
    const owner = req.user,
        title = req.body.title,
        state = req.body.state,
        description = req.body.description,
        imageUrl = req.body.imageUrl,
        startPrice = req.body.startPrice;

    // if invalid data, respond with meaningful status code and message
    if (!title) {
        res.status(400).json({
            success: false,
            message: 'Sell must have title!'
        });
        return;
    }
    if (!state) {
        res.status(400).json({
            success: false,
            message: 'Sell must have state!'
        });
        return;
    }


    data.createSell({ title, state, description, imageUrl, startPrice }, owner)
        .then(dbSell => res.status(201).json({
            success: true,
            message: "The Sell is created",
            sell: dbSell
        }))
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
}

exports.getSells = function(req, res) {
    data.getAllBooks()
        .then(sells => res.status(200).json(sells))
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
}