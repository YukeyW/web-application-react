import axios from 'axios';
import * as actionType from './actionType';

const loginInitData = () => ({
    type: actionType.LOGIN_DATA,
    login: true
});

export const dataLogout = () => ({
    type: actionType.LOGOUT,
    login: false
});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
            if (res.data.data) {
                dispatch(loginInitData())
            } else {
                alert('try again')
            }
        }).catch(() => {
            console.log('error')
        })
    }
};