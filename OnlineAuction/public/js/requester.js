import { jquery } from 'jquery';

function request(url, type, options, headers){
    
    let promise = new Promise(function (resolve, reject){
    
        $.ajax({
            url: url,
            type: type,
            options: options,
            headers: headers,
            success: resolve,
            error: reject
        });

    });

    return promise;
}

export function getRequest (link){
    return request(link);
}

export function postRequest (link){
    return request(link, 'POST', {}, {});
}

export function putRequest (link){
    return request(link, 'PUT', {}, {});
}

export function deleteRequest (link){
    return request(link, 'DELETE', {}, {});
}