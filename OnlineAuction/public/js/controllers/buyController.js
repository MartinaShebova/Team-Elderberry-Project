import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function buy() {

    getTemplate('buy')
    .then((templateFunc) => {
        //Render template
        let html = templateFunc();
        $('#dinamic-container').html(html);

        
    });

}