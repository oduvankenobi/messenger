import HTTPTransport from '../utils/HTTPTransport/HTTPTransport';
import BasicAPI from './BasicAPI';

const BaseUrl = 'https://ya-praktikum.tech/api/v2';

const userAPIInstance = new HTTPTransport(BaseUrl);

export default class AuthApi extends BasicAPI {
    changeUser(data: string = '') {
        return userAPIInstance
            .put('/user/profile', {data})
            .then(response => response)
            .catch(e => {
                throw new Error(e);
            });
    }

    changePassword(data: string = '') {
        return userAPIInstance
            .put('/user/password', {data})
            .then(response => response)
            .catch(e => {
                throw new Error(e);
            });
    }
}
