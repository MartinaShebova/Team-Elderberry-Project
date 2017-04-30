import * as requester from 'requester';

export function register(user) {
    return requester.postJSON("/api/auth/register", user)
}

export function login(user) {
    return requester.postJSON("/api/auth/login", user)
}

export function logout() {

}

export function isLoggedIn() {
    return Promise.resolve()
        .then(() => {
            let email = localStorage.getItem("email");
            console.log(email);
            return email;
        });
}