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

function getRequest (link){
    return request(link, 'GET', {}, {});
}

function postRequest (link){
    return request(link, 'POST', {}, {});
}

function putRequest (link){
    return request(link, 'PUT', {}, {});
}

function deleteRequest (link){
    return request(link, 'DELETE', {}, {});
}

let requests = {
    getRequest: getRequest,
    postRequest: postRequest,
    putRequest: putRequest,
    deleteRequest: deleteRequest
};

export { requests };