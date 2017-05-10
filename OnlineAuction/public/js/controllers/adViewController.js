import { jquery } from 'jquery';
import { getTemplate } from 'templateGenerator';
import * as data from 'data';

export function viewSell(params) {
    var id = params.sellId;

    Promise.all([data.getAdsById(id), getTemplate("sellView")])
        .then(([resp, templateFunc]) => {
            const sell = resp;
            let intlData = {
                "locales": "en-US",
                "formats": {
                    "date": {
                        "short": {
                            "day": "numeric",
                            "month": "long",
                            "year": "numeric"
                        }
                    },
                    "time": {
                        "hhmm": {
                            "hour": "numeric",
                            "minute": "numeric"
                        }
                    },
                    "relative": {
                        "hours": {
                            "units": "hour",
                            "style": "numeric"
                        }
                    }
                }
            };
            let html = templateFunc(sell, {
                data: {
                    intl: intlData,
                }
            });
            $("#dinamic-container").html(html);

            $('#btn-5').on('click', (ev) => {
                const body = { 'sum': 5 };
                data.bidAdsById(sell._id, body)
                    .then((resp) => {
                        if (resp.message) {
                            console.log(resp);
                        } else {
                            $('#price-style').html((sell.endPrice + 5) + '$');
                        }
                    })

                ev.preventDefault();
                return false;
            });
            $('#btn-10').on('click', (ev) => {
                const body = { 'sum': 10 };
                data.bidAdsById(sell._id, body)
                    .then((resp) => {
                        if (resp.message) {
                            console.log(resp);
                        } else {
                            $('#price-style').html((sell.endPrice + 10) + '$');
                        }
                    })

                ev.preventDefault();
                return false;
            });
            $('#btn-15').on('click', (ev) => {
                const body = { 'sum': 15 };
                data.bidAdsById(sell._id, body)
                if (resp.message) {
                    console.log(resp);
                } else {
                    $('#price-style').html((sell.endPrice + 15) + '$');
                }
                ev.preventDefault();
                return false;
            })
        });
}