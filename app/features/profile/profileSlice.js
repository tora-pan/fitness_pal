import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        fullName: '',
        age: 0,
        height: 0,
        weight: 0,
        goals: '',
        gender: '',
    },
    reducers: {
        setName: (state, action) => {
            state.fullName = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
        setHeight: (state, action) => {
            state.height = action.payload;
        },
        setWeight: (state, action) => {
            state.weight = action.payload;
        },
        setGoals: (state, action) => {
            state.goals = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
    },
});

export const selectProfile = (state) => state.profile;
export const selectName = (state) => state.profileSlice.fullName;
export const selectAge = (state) => state.profileSlice.age;
export const selectHeight = (state) => state.profileSlice.height;
export const selectWeight = (state) => state.profileSlice.weight;
export const selectGoals = (state) => state.profileSlice.goals;

export const { setName, setAge, setGoals, setHeight, setWeight, setGender } =
    profileSlice.actions;

export default profileSlice.reducer;
