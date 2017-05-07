import { jquery } from 'jquery';
import { jqueryUI } from 'jqueryUI';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';
import { Validator } from 'validator';
import { CreateAdModel } from 'createAdModel';

export function sell() {
    if (data.isLoggedIn()) {
        getTemplate('sell')
            .then((templateFunc) => {
                //Render template
                let html = templateFunc();
                $('#dinamic-container').html(html);

                $('#createAd').on('click', function(ev) {

                    let adModel = new CreateAdModel($('#adTitle').val(), $('#adCategory').val(), $('#adDescription').val(), $('#adURL').val(), $('#adStartPrice').val());

                    let validationResults = Validator.validateAd(adModel);

                    let error = false;

                    if (validationResults.TitleHasError) {
                        $('#adTitle').addClass('red-border-error').html(validationResults.TitleErrorMessage);
                        error = true;
                    }

                    if (validationResults.CategoryHasError) {
                        $('#adCategory').addClass('red-border-error');
                        error = true;
                    }

                    if (validationResults.adDescriptionHasError) {
                        $('#adDescription').addClass('red-border-error').html(validationResults.adDescriptionErrorMessage);
                        error = true;
                    }

                    //if (validationResults.ImgUrlHasError) {
                    //    $('#adURL').addClass('red-border-error').html(validationResults.ImgUrlErrorMessage);
                    //    error = true;
                    //}

                    if (validationResults.PriceHasError) {
                        $('#adStartPrice').addClass('red-border-error').html(validationResults.PriceErrorMessage);
                        error = true;
                    }
                    // let adDetails = {
                    //     title: $('#adTitle').val(),
                    //     state: $('#adCategory').val(),
                    //     description: $('#adDescription').val(),
                    //     imageUrl: getDefaultImageIfNotProvided('#adURL'),
                    //     startPrice: $('#adStartPrice').val()
                    // };
                    if (error) {
                        return;
                    }

                    data.createSell(adModel)

                    .then(function(success) {
                        debugger;
                        $("#dialog-message").dialog({
                            modal: true,
                            buttons: {
                                'Auction has been created': function() {
                                    document.location = '#/buy';
                                    $(this).dialog("close");
                                }
                            }
                        });
                    }, function(fail) {
                        console.log(adModel);
                        debugger;
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

function getDefaultImageIfNotProvided(imageUrl) {
    if ($(imageUrl).val().length <= 0) {
        var img = $(imageUrl + ':text').val('http://wonkville.net/wp-content/uploads/2016/04/No-image-available.jpg');
        return img;
    } else {
        var img = ($(imageUrl).val());
        return img;
    }
}