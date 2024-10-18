import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTaskLink } from "../../api/getTaskLinkApi";
import { initialState } from "../types/type";

export const fetchData = createAsyncThunk(
    'fetchTask',
    async (documentId: string) => {
        const taskResponse = await fetchTaskLink(documentId);
        return taskResponse;
    }
);

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.task = action.payload;
                console.log(state.task)
                state.loading = false;
            })

    },
})

export default taskSlice.reducer;


