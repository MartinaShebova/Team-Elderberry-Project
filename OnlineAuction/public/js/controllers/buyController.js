import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function buy() {

    getTemplate('buy')
        .then((templateFunc) => {
            data.getAds()
                .then(function (adsData) {
                    console.log(adsData);
                    let html = templateFunc(adsData);
                    $('#dinamic-container').html(html);

                }, function (error) {

                });
        });

}