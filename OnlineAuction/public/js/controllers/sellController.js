import { jquery } from 'jquery';
import { jqueryUI } from 'jqueryUI';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function sell() {
    if (data.isLoggedIn()) {
        getTemplate('sell')
            .then((templateFunc) => {
                //Render template
                let html = templateFunc();
                $('#dinamic-container').html(html);

                $('#createAd').on('click', function (ev) {

                    let adDetails = {
                        title: $('#adTitle').val(),
                        state: $('#adCategory').val(),
                        description: $('#adDescription').val(),
                        imageUrl: $('#adURL').val(),
                        startPrice: $('#adStartPrice').val()
                    };

                    data.createSell(adDetails)

                        .then(function (success) {
                            $("#dialog-message").dialog({
                                modal: true,
                                buttons: {
                                    Ok: function () {
                                        document.location = '#/buy';
                                        $(this).dialog("close");                                        
                                    }
                                }
                            });
                        }, function (fail) {
                            console.log('fail');
                        });

                    ev.preventDefault();
                    return false;
                });
            });
    } else {
        document.location = "#/login";
    }
}