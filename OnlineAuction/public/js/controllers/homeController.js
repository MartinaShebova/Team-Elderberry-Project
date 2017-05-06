import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function home() {

    getTemplate('home')
    .then((templateFunc) => {
        //Render template
        let html = templateFunc();
        $('#dinamic-container').html(html);
    });

}