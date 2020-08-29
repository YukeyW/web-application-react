import * as actionType from './actionType';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type: actionType.GET_LIST,
    data: fromJS(data),
    totalPage: Math.ceil((data.length)/10)
});

export const changeFocus = () => ({
    type: actionType.CHANGE_FOCUS
});

export const changeUnFocus = () => ({
    type: actionType.CHANGE_UN_FOCUS
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
};

export const changePage = (page) => ({
    type: actionType.CHANGE_PAGE,
    page
});

export const changeMouseIn = () => ({
    type: actionType.CHANGE_MOUSE_IN
});

export const changeMouseOut = () => ({
    type: actionType.CHANGE_MOUSE_OUT
});
