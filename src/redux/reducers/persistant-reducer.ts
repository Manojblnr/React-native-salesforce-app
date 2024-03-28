import { createSlice } from '@reduxjs/toolkit';

interface PersistantState {
    userName: string;
    password: string;
}

const initialState: PersistantState = {
    userName: "",
    password: "",
}

const persistantSlice = createSlice({
    name: 'persistant',
    initialState,
    reducers: {
    setUsername: (state, action) => {
        state.userName = action.payload
    },
    setPassword: (state, action) => {
        state.password = action.payload
    }
    }
});

export const { setUsername, setPassword } = persistantSlice.actions;
export default persistantSlice.reducer;
