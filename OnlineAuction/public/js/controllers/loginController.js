import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function login() {

    getTemplate('login')
        .then((templateFunc) => {
            let html = templateFunc()

            $('#dinamic-container').html(html);

            $("#btn-login").on("click", (ev) => {

                let user = {
                    email: $("#email").val(),
                    password: $("#password").val(),
                }

                data.login(user)

                .then((resp) => {
                    console.log(resp);
                    localStorage.setItem("email", resp.user.email);
                    localStorage.setItem("authKey", resp.token);
                    $(document.body).addClass("logged-in");
                    document.location = "/";
                })
                ev.preventDefault();
                return false;
            });

        });

}