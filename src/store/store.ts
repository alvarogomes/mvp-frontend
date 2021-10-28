import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import projectReducer from '@features/project/project.slice';
import gatewayReducer from '@features/gateway/gateway.slice';
import reportReducer from '@features/report/report.slice';
import userReducer from '@features/user/user.slice';

export function makeStore() {
    return configureStore({
        reducer: {
            projects: projectReducer,
            gateways: gatewayReducer,
            reports: reportReducer,
            users: userReducer,
        },
    });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export default store;
