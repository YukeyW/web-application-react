import  { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
    title: '',
    content: ''
});

const getData = (state, action) => {
    return state.merge({
        title: action.title,
        content: action.content
    });
};

export default (state=defaultState, action) => {
    if(actionType.GET_DATA) {
        return getData(state, action)
    }  else {
        return state;
    }    
};
