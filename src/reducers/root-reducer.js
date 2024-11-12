import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./users-reducer";

const rootReducer = combineReducers({
    users:userReducer
})

export default rootReducer;

