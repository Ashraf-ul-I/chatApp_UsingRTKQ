import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSLice';
import authSLiceReducer from "../features/auth/authSlice"
import converSliceReducer from '../features/conversation/conversationSlice';
import messagesSliceReducer from '../features/messages/messagesSlice'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    auth:authSLiceReducer,
    conversations:converSliceReducer,
    messages:messagesSliceReducer
  },
  devTools:process.env.NODE_ENV !=="production",
  middleware:(getDefaultMiddlewares)=> getDefaultMiddlewares().concat(apiSlice.middleware)
});
