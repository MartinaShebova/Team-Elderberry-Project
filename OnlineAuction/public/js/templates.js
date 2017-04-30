/* globals Handlebars */
import { getRequest } from 'requests';

export function getTemplate(templateName){
    return getRequest(`/public/templates/${templateName}.handlebars`)
    
           .then(function(resolve){

                let compileToHandlebars = Handlebars.compile(resolve);
                
                return Promise.resolve(compileToHandlebars);
           });

}