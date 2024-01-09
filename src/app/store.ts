import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import dexReducer from '../features/search/dexSlice';
import evoReducer from '../features/search/evoSlice';

export const store = configureStore({
  reducer: {
    pokemon: dexReducer,
    evoLine: evoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
