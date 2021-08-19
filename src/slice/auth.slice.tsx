import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    user:  {
        profile: 'recruter' | 'company';
        id: string;
        tag: string
    },
    token: string;
}

const initialState = {
    user: {
        profile: 'company',
        id: '1121414sqdqvw34qv234',
        tag: '@Peter_Shevchuk'
    },
    token: 'null',
} as CounterState

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeToken(state, action: PayloadAction<string>) {
            state.token = action.payload
        },
        changeProfileType: (state) => ({...state, user: {...state.user, profile: state.user.profile === 'recruter'? 'company' : 'recruter' }})
    },
})

export const { changeToken, changeProfileType } = counterSlice.actions
export default counterSlice.reducer