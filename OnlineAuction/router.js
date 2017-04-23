'use strict';

const AuthenticationController = require('./app/controllers/authentication');
const express = require('express');
const passport = require('passport');

const passportService = require('./config/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function(app) {
    const apiRoutes = express.Router(),
        authRoutes = express.Router(),
        userRoutes = express.Router();


    // Set auth routes as subgroup/middleware to apiRoutes
    apiRoutes.use('/auth', authRoutes);

    // Registration route
    authRoutes.post('/register', AuthenticationController.register);

    app.use('/api', apiRoutes);
}