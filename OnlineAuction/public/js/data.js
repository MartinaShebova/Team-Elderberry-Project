import * as requester from 'requester';

export function register(user) {
    return requester.postJSON("/api/auth/register", user);
}

export function login(user) {
    return requester.postJSON("/api/auth/login", user);
}

export function logout() {

}

export function createSell(adInfo){
     return requester.postJSON("/api/sells/create", adInfo);
}

//Get info

export function getAds(){
     return requester.getJSON("/api/sells");
}

export function getUserInfo(){
     return requester.getJSON("/api/user");//?????
}

export function isLoggedIn() {
    return !!localStorage.getItem('authKey');
}