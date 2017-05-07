import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function home() {

    getTemplate('home')
        .then((templateFunc) => {

            data.getAds()
                .then(function(adsData) {
                    let adsInfoObject = templateFunc(adsData);

                    var random = Math.floor(Math.random() * adsInfoObject.length);

                    $('#dinamic-container').html(adsInfoObject);

                }, function(error) {

                });
        });

}