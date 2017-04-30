import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';

export function renderFormAndSubmit(){
    
    getTemplate('login-register')
    .then(function(resolve){

        $('#dinamic-container').html(resolve);

    });

}