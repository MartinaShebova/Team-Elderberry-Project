import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function sell() {
    if(data.isLoggedIn()){
            getTemplate('sell')
            .then((templateFunc) => {
                //Render template
                let html = templateFunc();
                $('#dinamic-container').html(html);
            });
    }else{
        document.location = "/login";
    }
}