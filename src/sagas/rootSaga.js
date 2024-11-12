import { all } from "redux-saga/effects";
import userSaga from "./userSaga";


function* rootSaga(){
    yield all([
        userSaga(),
        // other sagas
    ])

}

export default rootSaga;
