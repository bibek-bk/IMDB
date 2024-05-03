import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchData: null,
        movieSearchData: null,
        tvSearchData: null,
        personSearchData: null,
        allSearchData: null,
    },
    reducers: {

    }
})

export const { } = searchSlice.actions
export default searchSlice.reducer