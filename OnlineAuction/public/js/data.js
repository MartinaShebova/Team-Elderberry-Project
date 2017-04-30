import * as requester from 'requests';

function getUsers(){
    return requester.getRequest('/');
}