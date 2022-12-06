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
        const vetResponse = yield axios.get('/api/vet-tech');
        yield put({ type: 'SET_LIST', payload: vetResponse.data });
    } catch (e) {
        console.log(e);
        alert('Something wrong: fetchVet saga');
    }
}

// ISA Filter
function* fetchIsa() {
    try {
        const isaResponse = yield axios.get('/api/isa');
        yield put({ type: 'SET_LIST', payload: isaResponse.data });
    } catch (e) {
        console.log(e);
        alert('Something wrong: fetchIsa saga');
    }
}


// Watcher
function* studentSaga() {
    yield takeLatest('FETCH_ALL_STUDENTS', fetchAllStudents);
    yield takeLatest('FETCH_ISA', fetchIsa);
    yield takeLatest('FETCH_VET_TEC', fetchVet);
}

export default studentSaga;