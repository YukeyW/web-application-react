import * as actionType from './actionType';
import  { fromJS } from 'immutable';

const defaultState = fromJS({
    focus: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

const getList = (state, action) => {
    return state.merge({
        list: action.data,
        totalPage: action.totalPage
    });
};

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionType.CHANGE_FOCUS:
            return state.set('focus', true);
        case actionType.CHANGE_UN_FOCUS:
            return state.set('focus', false);
        case actionType.CHANGE_PAGE:
            return state.set('page', action.page);
        case actionType.GET_LIST:
            return getList(state, action);
        case actionType.CHANGE_MOUSE_IN:
            return state.set('mouseIn', true);
        case actionType.CHANGE_MOUSE_OUT:
            return state.set('mouseIn', false);
        default:
            return state;
    }
};

