import * as requester from 'requester';

//users data 
export function register(user) {
    return requester.postJSON("/api/auth/register", user);
}

export function login(user) {
    return requester.postJSON("/api/auth/login", user);
}

export function logout() {
    return new Promise(function(resolve, reject) {
        localStorage.removeItem('email');
        localStorage.removeItem('authKey');
        resolve();
    });
}

export function getUserInfo(email) {
    return requester.getJSON(`/api/user/${email}`);
}


export function isLoggedIn() {
    return !!localStorage.getItem('email') &&
        !!localStorage.getItem('authKey');
}

//sells data

export function createSell(adInfo) {
    console.log(adInfo);
    debugger
    return requester.postJSON("/api/sells/create", adInfo);
}

export function getAds() {
    return requester.getJSON("/api/sells");
}