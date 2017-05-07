import { jquery } from 'jquery';
import { jqueryUI } from 'jqueryUI';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function buy() {

    getTemplate('buy')
        .then((templateFunc) => {
            data.getAds()
                .then(function (adsData) {
                    let html = templateFunc(adsData);
                    let source = jqueryAutocomplete(adsData);

                    $('#dinamic-container').html(html);
                    console.log(source);
                    $("#tags").autocomplete({
                        source: source
                    });

                }, function (error) {

                });
        });

}

function jqueryAutocomplete(data) {
    let autocompleteSource = [];

    $.each(data, function (index, value) {
        if (autocompleteSource.indexOf(value.startPrice) === -1) {
            autocompleteSource.push(value.startPrice);
        }
    });

    return autocompleteSource;
}