import { combineReducers } from "redux";

const studentList = (state = [], action) => {
    if (action.type === 'SET_LIST') {
        return action.payload;
    }

    return state;
}


const defaultStudent = {
    coe_status: '',
    me_form_status: '',
    comment: ''
}

const editStudent = (state = defaultStudent, action) => {
    if (action.type === 'SET_EDIT_STUDENT') {
        return action.payload;
    } else if (action.type === 'CLEAR') {
        return defaultStudent;
    }

    return state;
}

export default combineReducers({
   studentList,
   editStudent,
  });