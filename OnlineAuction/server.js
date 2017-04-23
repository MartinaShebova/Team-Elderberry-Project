'use strict';

const express = require('express'),
    path = require("path"),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    router = require('./router'),
    mongoose = require('mongoose'),
    config = require('./config/main');

const port = parseInt(process.env.PORT, 10) || config.port;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use("/libs", express.static(path.join(__dirname, "../../node_modules")));
app.use("/public", express.static(path.join(__dirname, "/../../public")));

mongoose.connect(config.database);
mongoose.Promise = global.Promise;

router(app);

app.listen(port, () => console.log(`Magic happening at http://localhost:${port}`));