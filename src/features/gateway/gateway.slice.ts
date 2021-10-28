import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState, AppThunk } from '@store/store';

import { GatewayState } from './gateway.types';

const initialState: GatewayState = {
    gateways: [],
    selected: null,
    status: 'idle',
    editing: null,
};

export const gatewaysSlice = createSlice({
    name: 'gateways',
    initialState,
    reducers: {
        addGateway: (state, action) => {
            state.gateways.push(action.payload);
        },
        removeGateway: (state, action) => {
            const newGateways = state.gateways.filter(
                proj => proj.gatewayId !== action.payload
            );
            state.gateways = newGateways;
        },
        setGateways: (_, action) => {
            return action.payload;
        },
        selectGateway: (state, action) => {
            state.selected = action.payload;
        },
    },
});

export const {
    addGateway,
    removeGateway,
    setGateways,
    selectGateway,
} = gatewaysSlice.actions;

export const selectGateways = (state: AppState) => state.gateways.gateways;
export const selectSelectedGateway = (state: AppState) =>
    state.gateways.selected;

export default gatewaysSlice.reducer;
