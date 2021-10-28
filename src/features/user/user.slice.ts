import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState, AppThunk } from '@store/store';

import { UserState } from './user.types';

const initialState: UserState = {
    users: [],
    selected: null,
    status: 'idle',
    editing: null,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action) => {
            const newUsers = state.users.filter(
                proj => proj.userId !== action.payload
            );
            state.users = newUsers;
        },
        setUsers: (_, action) => {
            return action.payload;
        },
        selectUser: (state, action) => {
            state.selected = action.payload.id;
        },
    },
});

export const { addUser, removeUser, setUsers, selectUser } = usersSlice.actions;

export const selectUsers = (state: AppState) => state.users.users;
export const selectSelectedUser = (state: AppState) => state.users.selected;

export default usersSlice.reducer;
