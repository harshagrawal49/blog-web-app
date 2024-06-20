import { createSlice } from '@reduxjs/toolkit'

const initialVal = {
    user: null,
    isLoggedIn: false,
    loading: true
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialVal,
    reducers: {
        signInStart: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.loading = false;
        },
        signInFailure: (state, action) => {
            state.user = null;
            state.isLoggedIn = false;
            state.loading = false;
        }
    }
})

export const { signInFailure, signInStart, signInSuccess } = userSlice.actions

export default userSlice.reducer
