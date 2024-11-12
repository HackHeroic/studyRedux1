import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    users:[],
    isLoading:false,
    error:null
}

export const userSlice = createSlice({
    name:'Users',
    initialState:initialState,
    reducers:{
        getUsersFetch:(state) => {
            state.isLoading = true;
            state.error = null
        },
        getUserSuccess:(state,action) => {
            state.isLoading = false;
            state.users = action.payload
        },
        getUsersCleared:(state,action) => {
            state.isLoading = false;
            state.users = [];
        },
        getUsersFailure:(state,action) => {
            state.isLoading = false;
            state.error = action.payload
        }

    }
})

export const {getUsersFetch,getUserSuccess,getUsersCleared,getUsersFailure} = userSlice.actions;

export default userSlice.reducer;