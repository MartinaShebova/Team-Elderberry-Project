import { jquery } from 'jquery';

function sendRequest(method, url, body, headers = {}) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            method,
            data: body,
            headers,
            success(response) {
                resolve(response);
            },
            error(error) {
                reject(error);
            }
        });
    });
}

export function get(url, headers = {}) {
    headers["content-type"] = "application/json";
    return sendRequest("GET", url, null, headers);
}

export function putJSON(url, body, headers = {}) {
    headers["content-type"] = "application/json";
    return sendRequest("PUT", url, JSON.stringify(body), headers);
}

export function postJSON(url, body, headers = {}) {
    headers["content-type"] = "application/json";
    return sendRequest("POST", url, JSON.stringify(body), headers);
}

export function getJSON(url, headers = {}) {
    headers["content-type"] = "application/json";
    return sendRequest("GET", url, null, headers);
}