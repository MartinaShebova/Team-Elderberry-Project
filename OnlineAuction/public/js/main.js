/*globals Navigo */
import homeController from 'homeController';
import { login } from 'loginController';
import { register } from 'registerController';
import { sell } from 'sellController';
import { buy } from 'buyController';
import { about } from 'aboutController';
import { contact } from 'contactController';
import { faq } from 'faqController';
import { profile } from 'profileController';

(function routing() {

    let router = new Navigo('/', true);

    router
        .on('/', function() {
            console.log('/home');
        })

    .on('/sell', sell)

    .on('/buy', buy)

    .on('/about', about)

    .on('/contact', contact)

    .on('/FAQ', faq)

    .on('/login', login)

    .on('/register', register)

    .on('/profile', profile)    

    //When we have user with ID
    .on('/user/:id/:action', function(params) {
        // If we have http://site.com/user/42/save as a url then
        // params.id = 42
        // params.action = save
    })

    //GET Request
    .on('/user/:id/:action', function(params, query) {
        // If we have http://site.com/user/42/save?answer=42 as a url then
        // params.id = 42
        // params.action = save
        // query = answer=42
    })

    .resolve();

    //Not found
    router.notFound(function(query) {
        // ...
    });

}());