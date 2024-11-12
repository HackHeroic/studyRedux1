import {takeEvery,put,call} from 'redux-saga/effects';
import { getUsersFailure, getUsersFetch, getUserSuccess } from '../reducers/users-reducer';

async function fetchUser(){
    let rawData = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await rawData.json();
    return users;
    
}


function * fetchUserWorker(){
    try{
        const users = yield call(fetchUser);
        yield put(getUserSuccess(users));
    }catch(err){
        yield put(getUsersFailure(err.message|| "Failed to fetch users"));
    }
}


function* userSaga(){
    yield takeEvery(getUsersFetch.type,fetchUserWorker)
}


export default userSaga;
