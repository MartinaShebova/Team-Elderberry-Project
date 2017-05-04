/*globals System */
'use strict';

System.config({
    'transpiler': 'plugin-babel',
    map: {
        'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',

        // External Libraries
        'jquery': 'libs/jquery/dist/jquery.min.js',
        'bootstrap-js': 'libs/bootstrap/dist/js/bootstrap.min.js',

        // App files
        'main': 'public/js/main.js',
        'requester': 'public/js/requester.js',
        'templateGenerator': 'public/js/templates.js',
        'data': 'public/js/data.js',
        'homeController': 'public/js/controllers/homeController.js',
        'sellController': 'public/js/controllers/sellController.js',
        'loginController': 'public/js/controllers/loginController.js',
        'registerController': 'public/js/controllers/registerController.js',
        'buyController': 'public/js/controllers/buyController.js',
        'aboutController': 'public/js/controllers/aboutController.js',
        'contactController': 'public/js/controllers/contactController.js',
        'faqController': 'public/js/controllers/faqController.js',
        'accordion': 'public/js/a.js'
    }
});