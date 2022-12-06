import { combineReducers } from "redux";

const student = (state = [], action) => {
    if (action.type === 'SET_LIST') {
        return action.payload;
    }

    return state;
}

export default student;