import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function displaySelectedAd() {

    Promise.all([getTemplate('adView'), data.getWantedAd()])
        .then(([templateFunc, selectAdData]) => {

            let adsInfoObject = templateFunc(selectAdData);

            $('#dinamic-container').html(adsInfoObject);
        });

}