import { jquery } from 'jquery';
import { jqueryUI } from 'jqueryUI';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';
// import * as Validator from 'validator';
// import * as CreateAdModel from 'createAdModel';


export function sell() {
    if (data.isLoggedIn()) {
        getTemplate('sell')
            .then((templateFunc) => {
                //Render template
                let html = templateFunc();
                $('#dinamic-container').html(html);

                $('#createAd').on('click', function (ev) {
// console.log(2222);


//                     let adModel = new CreateAdModel($('#adTitle').val(), $('#adCategory').val(), $('#adDescription').val(), $('#adURL').val(), $('#adStartPrice').val());

//                     let validationResults = Validator.validateAd(adModel);

//                     if (validationResults.TitleHasError) {
//                         $('#adTitle').addClass('has-error').addClass('has-feedback').html(validationResults.TitleErrorMessage);
//                         return;
//                     }

//                     if (validationResults.CategoryHasError) {
//                         $('#adCategory').addClass('has-error').addClass('has-feedback').html(validationResults.CategoryErrorMessage);
//                         return;
//                     }

//                     if (validationResults.adDescriptionHasError) {
//                         $('#adDescription').addClass('has-error').addClass('has-feedback').html(validationResults.adDescriptionErrorMessage);
//                         return;
//                     }

//                     if (validationResults.ImgUrlHasError) {
//                         $('#adURL').addClass('has-error').addClass('has-feedback').html(validationResults.ImgUrlErrorMessage);
//                         return;
//                     }

//                     if (validationResults.PriceHasError) {
//                         $('#adStartPrice').addClass('has-error').addClass('has-feedback').html(validationResults.PriceErrorMessage);
//                         return;
//                     }
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