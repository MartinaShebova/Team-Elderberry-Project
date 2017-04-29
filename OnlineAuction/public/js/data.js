import { requests } from 'requests';

function getUsers(){
    return requests.getRequest('/');
}