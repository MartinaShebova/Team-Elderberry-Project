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
                    mobileNumber: $("#mobileNumber").val(),
                    address: $('#address').val()

                };

                data.register(user)
                    .then((resp) => {
                        return data.login(user);
                    })
                    .then((resp) => {
                        localStorage.setItem("email", resp.user.email);
                        localStorage.setItem("authKey", resp.token);
                        $(document.body).addClass("logged-in");
                        $('#login-link').addClass('hidden');
                        $('#logout-link').removeClass('hidden');
                        $('#profile-link').removeClass('hidden');
                        document.location = "#/";
                    });
                ev.preventDefault();
                return false;
            });

        });

}