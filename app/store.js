import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './features/profile/profileSlice';
export default configureStore({
    reducer: {
        profile: profileSlice,
    },
});
