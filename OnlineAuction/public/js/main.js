/*globals Navigo */
import homeController from 'homeController';
import { renderFormAndSubmit } from 'loginRegisterController';

(function routing (){

    let router = new Navigo('/', true);

    router
        .on('/', function(){
            console.log('/home');
        })

        .on('/sell', function () {
            console.log('/sell');
        })

        .on('/buy', function () {
            console.log('/buy');
        })

        .on('/about', function () {
            console.log('/about');
        })

        .on('/contact', function () {
            console.log('/contact');
        })

        .on('/FAQ', function () {
            console.log('/FAQ');
        })
        .on('/login', function () {
            console.log('/login');
            renderFormAndSubmit();
        })
        .on('/register', function () {
            console.log('/reg');
            
        })

        //When we have user with ID
        .on('/user/:id/:action', function (params) {
            // If we have http://site.com/user/42/save as a url then
            // params.id = 42
            // params.action = save
        })

        //GET Request
        .on('/user/:id/:action', function (params, query) {
            // If we have http://site.com/user/42/save?answer=42 as a url then
            // params.id = 42
            // params.action = save
            // query = answer=42
        })

        .resolve();

        //Not found
        router.notFound(function (query) {
        // ...
        });

}());