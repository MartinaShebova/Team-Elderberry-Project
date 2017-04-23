'use strict';

const AuthenticationController = require('./app/controllers/authentication');
const UserController = require('./app/controllers/user');
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
    // Login route
    authRoutes.post('/login', requireLogin, AuthenticationController.login);


    // Set user routes as a subgroup/middleware to apiRoutes
    apiRoutes.use('/user', userRoutes);

    // View user profile route
    userRoutes.get('/:userId', requireAuth, UserController.viewProfile);

    app.use('/api', apiRoutes);
}