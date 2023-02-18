import { configureStore } from '@reduxjs/toolkit';
import portalReducer from './features/portal/portalSlice';
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    portal: portalReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
