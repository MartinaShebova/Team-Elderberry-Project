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

        // App Modules
        'main': 'public/js/main.js',
    }
});