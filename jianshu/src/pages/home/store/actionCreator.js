import axios from 'axios';
import *  as constants from './actionType';
import  { fromJS } from 'immutable';

export const addData = (data) => ({
    type: constants.ADD_DATA,
    topicList: data.topicList,
    list: data.list, 
    recommendList: data.recommendList, 
    writeList: data.writeList
});

export const changeScroll = (show) => ({
    type: constants.CHANGE_SCROLL,
    show
});

export const addMoreData = (list, pageNumber) => ({
    type: constants.ADD_MORE_DATA,
    list: fromJS(list),
    pageNumber
});

export const loadMoreData = (pageNumber) => {
    return (dispatch) => {
        axios.get('/api/home.json?page'+ pageNumber).then((res) => {
            const data = res.data.data;
            dispatch(addMoreData(data, pageNumber+1));
        }).catch(() => {
            console.log('error')
        })
    }
};

export const dispatchData = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) => {
            const data = res.data.data;
            dispatch(addData(data));
        }).catch(() => {
            console.log('error')
        })
    }
};

