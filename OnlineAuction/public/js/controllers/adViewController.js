import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function viewSell(params) {
    var id = params.sellId;

    Promise.all([data.getAdsById(id), getTemplate("sellView")])
        .then(([resp, templateFunc]) => {
            const sell = resp;
            console.log(sell);
            let html = templateFunc(sell);
            $("#dinamic-container").html(html);
        });
}