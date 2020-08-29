import axios from 'axios';
import * as actionType from './actionType';

const getData = (title, content) => ({
    type: actionType.GET_DATA,
    title,
    content,
});

export const initData = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data
            dispatch(getData(result.title, result.content))
        }).catch(() => {
            console.log('error');
        })
    }
};