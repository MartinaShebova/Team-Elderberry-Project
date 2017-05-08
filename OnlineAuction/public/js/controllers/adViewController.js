import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function viewSell(params) {
    var id = params.sellId;

    Promise.all([data.getAdsById(id), getTemplate("sellView")])
        .then(([resp, templateFunc]) => {
            const sell = resp;
            let html = templateFunc(sell);
            $("#dinamic-container").html(html);

            $('#btn-5').on('click', (ev) => {
                const body = { 'sum': 5 };
                data.bidAdsById(sell._id, body)
                    .then((resp) => {
                        console.log(resp);
                        console.log(sell.endPrice + '$');
                        $('#price-style').html((sell.endPrice + 5) + '$');
                    })

                ev.preventDefault();
                return false;
            });
            $('#btn-10').on('click', (ev) => {
                const body = { 'sum': 10 };
                data.bidAdsById(sell._id, body)
                    .then((resp) => {
                        console.log(resp);
                        $('#price-style').html((sell.endPrice + 10) + '$');
                    })

                ev.preventDefault();
                return false;
            });
            $('#btn-15').on('click', (ev) => {
                const body = { 'sum': 15 };
                data.bidAdsById(sell._id, body)
                    .then((resp) => {
                        console.log(resp);
                        $('#price-style').html((sell.endPrice + 15) + '$');
                    })

                ev.preventDefault();
                return false;
            })
        });
}