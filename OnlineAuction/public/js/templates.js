/* globals Handlebars */
import {get } from 'requester';

export function getTemplate(templateName) {
    return get(`/public/templates/${templateName}.hbs`)

    .then(function(resolve) {

        let compileToHandlebars = Handlebars.compile(resolve);

        return Promise.resolve(compileToHandlebars);
    });

}