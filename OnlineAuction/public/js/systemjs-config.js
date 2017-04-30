/*globals System */
'use strict';

System.config({
    'transpiler': 'plugin-babel',
    map: {
        'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',

        // External Libraries
        'jquery': '/bower/jquery/dist/jquery.js',
        'bootstrap-js': '/bower/bootstrap/dist/js/bootstrap.js',

        // App files
        'main': 'public/js/main.js',
        'requests': 'public/js/requester.js',
        'data': 'public/js/data.js',
        'homeController': 'public/js/controllers/homeController.js',
        'sellController': 'public/js/controllers/sellController.js',
        'loginRegisterController': 'public/js/controllers/loginRegisterController.js',
        'templateGenerator': 'public/js/templates.js'
    }
});