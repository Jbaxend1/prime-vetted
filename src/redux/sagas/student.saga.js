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

// Vet Tec Filter
function* fetchVet() {
    try {
        const vetResponse = yield axios.get('/api/student/vet-tec');
        yield put({ type: 'SET_LIST', payload: vetResponse.data });
    } catch (e) {
        console.log(e);
        alert('Something wrong: fetchVet saga');
    }
}

// ISA Filter
function* fetchIsa() {
    try {
        const isaResponse = yield axios.get('/api/student/filter/isa');
        console.log(isaResponse.data);
        yield put({ type: 'SET_LIST', payload: isaResponse.data });
    } catch (e) {
        console.log(e);
        alert('Something wrong: fetchIsa saga');
    }
}

// Student Details
function* getEditStudent(action) {
    console.log(action.payload);

    try {
        const response = yield axios.get(`/api/student/details/${action.payload}`);

        const inputValues = Object.assign({}, response.data );
        
        Object.keys(inputValues).forEach((key) => {
            if (inputValues[key] === null) {
                inputValues[key] = '';
            }
        })
        yield put({ type: 'SET_EDIT_STUDENT', payload: inputValues });
    } catch (e) {
        console.log(e);
        alert('Something wrong: student detail saga');
    }
}

function* updateStudent(action) {
    try {
        const update = axios.put(`/api/student/edit/${action.payload.id}`, action.payload);
        yield put({ type: 'SET_EDIT_STUDENT', payload: update.data});
    } catch (e) {
        console.log(e);
    }
}

// Watcher
function* studentSaga() {
    yield takeLatest('FETCH_ALL_STUDENTS', fetchAllStudents);
    yield takeLatest('FETCH_ISA', fetchIsa);
    yield takeLatest('FETCH_VET_TEC', fetchVet);
    yield takeLatest('GET_EDIT_STUDENT', getEditStudent);
    yield takeLatest('UPDATE_STUDENT', updateStudent);
}

export default studentSaga;