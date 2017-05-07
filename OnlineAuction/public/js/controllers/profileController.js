import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function profile() {
    if (data.isLoggedIn()) {
        let userEmail = localStorage.getItem("email")
        getTemplate('userProfile')
            .then((templateFunc) => {
                data.getUserInfo(userEmail)
                    .then(function(userData) {
                        console.log(userData);
                        let userInfo = templateFunc(userData);
                        $('#dinamic-container').html(userInfo);

                    }, function(error) {

                    });

                //Render template
                let html = templateFunc();
                $('#dinamic-container').html(html);
            });
    } else {
        document.location = "#/login";
    }
}