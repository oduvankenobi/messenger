import HTTPTransport from '../utils/HTTPTransport/HTTPTransport';
import BasicAPI from './BasicAPI';
import ObjectLiteral from '../types/ObjectLiteral';

const BaseUrl = 'https://ya-praktikum.tech/api/v2';

const authAPIInstance = new HTTPTransport(BaseUrl);

export default class AuthApi extends BasicAPI {
    signup(data: string = '') {
        return authAPIInstance
            .post('/auth/signup', {data})
            .then((response: ObjectLiteral): string => {
                const {id} = response;
                return id;
            });
    }

    signin(data: string = '') {
        return authAPIInstance
            .post('auth/signin', {data})
            .then(() => true);
    }

    logout() {
        return authAPIInstance.post('/auth/logout');
    }

    request() {
        return authAPIInstance.get('/auth/user');
    }
}
