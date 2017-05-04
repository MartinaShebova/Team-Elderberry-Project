'use strict';

const User = require('../models/user'),
    Sell = require('../models/sell'),
    mongoose = require('mongoose');

mongoose.Promise = global.Promise;

exports.createSell = function(sell, owner) {
    let today = Date.now();
    let tomorrow = today;

    const newSell = {
        title: sell.title,
        state: sell.state,
        description: sell.description,
        imageUrl: sell.imageUrl,
        startPrice: sell.startPrice,
        endPrice: sell.startPrice,
        createdAt: today,
        finishedAt: tomorrow
    };

    if (owner) {
        newSell.owner = {
            email: owner.email,
            userImageUrl: owner.imageUrl,
            role: owner.role
        }
    }

    return new Promise((resolve, reject) => {
        Sell.create(newSell, (err, sell) => {
            if (err) {
                return reject(err);
            }

            return resolve(sell);
        });
    });
}