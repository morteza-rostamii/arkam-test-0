import { combineReducers, configureStore } from "@reduxjs/toolkit";
import livesReducer from '@/features/live-meydan/stores/liveSlice';
import mostanadsReducer from '@/features/mostanad/stores/mostanadSlice';

// combine reducers
const rootReducer = combineReducers({
  livesSlice: livesReducer,
  mostanadsSlice: mostanadsReducer
}) 

// make one store
const store = configureStore({
  reducer: rootReducer,
})

// Define the RootState type based on your root reducer
export type RootState = ReturnType<typeof rootReducer>;

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;