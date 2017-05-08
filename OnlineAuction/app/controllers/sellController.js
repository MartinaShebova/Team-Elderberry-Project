const Sell = require('../models/sell'),
    User = require('../models/user'),
    data = require('../data/index.js');

exports.createSell = function(req, res) {
    console.log(req);
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
    data.getAllSells()
        .then(sells => res.status(200).json(sells))
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
}
exports.sellById = function(req, res) {
    data.sellById(req.params.sellId)
        .then(sell => {
            if (!sell) {
                res.status(404).json({ message: 'No sell with such id!' });
                return;
            }
            res.status(200).json(sell);

        })
        .catch(error => res.status(500).json(error));
}
exports.bidSell = function(req, res) {
    const userToBeAdded = req.user;
    const sellId = req.params.sellId;
    const sum = req.body.sum;
    data.sellById(sellId).then(sell => {
        console.log(sell);
        if (sell.owner.email == userToBeAdded.email) {
            res.status(404).json({ message: 'You cannot bid your own trip!' });
            return;
        } else {
            data.bidSell(userToBeAdded, sellId, sum)
                .then(sell => {
                    res.status(200).json(sell);
                })
        }
    })



}