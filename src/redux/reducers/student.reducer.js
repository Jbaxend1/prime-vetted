import { combineReducers } from "redux";

const student = (state = [], action) => {
    if (action.type === 'SET_LIST') {
        return action.payload;
    }

    return state;
}

const studentDetail = (state = {}, action) => {
    if (action.type === 'SET_STUDENT') {
        return action.payload;
    }

    return state;
}

export default combineReducers({
   student,
   studentDetail,
  });