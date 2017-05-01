import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function buy() {
    if(data.isLoggedIn()){
            getTemplate('buy')
            .then((templateFunc) => {
                //Render template
                let html = templateFunc();
                $('#dinamic-container').html(html);
            });
    }else{
        document.location = "/login";
    }
}