import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
    name: 'page',
    initialState: {
        pageActive: 'homescreen',
    },
    reducers: {
        homescreen: (state) => {
            state.pageActive = 'homescreen';
        },
        pantry: (state) => {
            state.pageActive = 'pantry';
        }
    }
})

export const { homescreen, pantry } = pageSlice.actions;
export default pageSlice.reducer;