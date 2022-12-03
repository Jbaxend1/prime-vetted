import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//Generators
function* fetchAllStudents() {
    try {
        const studentResponse = yield axios.get('/api/student');
        yield put({ type: 'SET_LIST', payload: studentResponse.data });
    } catch (e) {
        console.log(e);
        alert('Something wrong: fetchAllStudents saga');
    }
}


// Watcher
function* studentSaga() {
    yield takeLatest('FETCH_ALL_STUDENTS', fetchAllStudents);
}

export default studentSaga;