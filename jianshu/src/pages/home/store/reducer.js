import  { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
    topicList: [],
    list: [], 
    recommendList: [],
    writeList: [],
    pageNumber: 1,
    showScroll: false
});

const addData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        list: fromJS(action.list),
        recommendList: fromJS(action.recommendList),
        writeList: fromJS(action.writeList)
    })
}

const addMoreData = (state, action) => {
    return state.merge({
        list: state.get('list').concat(action.list),
        pageNumber: action.pageNumber
    })
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionType.ADD_DATA:
            return addData(state, action)
        case actionType.ADD_MORE_DATA:
            return addMoreData(state, action)
        case actionType.CHANGE_SCROLL:
            return state.set('showScroll', action.show)
        default:
            return state;
    }
};

