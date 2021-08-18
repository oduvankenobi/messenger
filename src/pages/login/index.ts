import Button from '../../components/button';
import FormInput from '../../components/formInput';
import Form from '../../components/form';
import router from '../../router';
import LoginController from './controllers/loginController';

const loginController = new LoginController();

const ctx = {
    formTitle: 'Вход',
    children: {
        form: new Form({
            children: {
                inputs: [
                    new FormInput({
                        label: 'Логин',
                        name: 'login',
                        className: 'unauth-input',
                    }, {
                        blur: [
                            'loginCheck',
                            'requiredField',
                        ],
                        'form-submitted': [
                            'loginCheck',
                            'requiredField',
                        ],
                    }),
                    new FormInput({
                        label: 'Пароль',
                        name: 'password',
                        type: 'password',
                        className: 'unauth-input',
                    }, {
                        blur: ['requiredField'],
                        'form-submitted': ['requiredField'],
                    }),
                ],
                submitBtn: new Button({
                    label: 'Авторизоваться',
                    type: 'submit',
                }),
            },
        }, {
            submit: [
                'emitSubmitEvent',
                'collectFields',
            ],
            'fields-collected': async (event: CustomEvent) => {
                const {data} = event.detail;
                await loginController.login(data);
            },
        }),
        altBtn: new Button({
            label: 'Зарегистрироваться',
            className: '_flat',
        }, {
            click: () => {
                router.go('/sign-up');
            },
        }),
    },
};

export default ctx;
