import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function register() {

    getTemplate('register')
        .then((templateFunc) => {
            let html = templateFunc();

            $('#dinamic-container').html(html);

            $("#btn-register").on("click", (ev) => {
                let user = {
                    email: $("#email").val(),
                    password: $("#password").val(),
                    firstname: $("#firstname").val(),
                    lastname: $("#lastname").val(),
                    imageUrl: $("#image-url").val(),
                };
                data.register(user)

                .then((resp) => {
                        console.log(resp);
                        return data.login(user);
                    })
                    .then((resp) => {
                        localStorage.setItem("email", resp.user.email);
                        localStorage.setItem("authKey", resp.token);
                        $(document.body).addClass("logged-in");
                        document.location = "#/";
                    });
                ev.preventDefault();
                return false;
            });

        });

}