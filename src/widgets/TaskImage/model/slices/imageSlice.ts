import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import html2canvas from 'html2canvas';
import { initialState } from "../types/types";


export const generateImage = createAsyncThunk(
    'image/generateImage',
    async (imageRef: React.RefObject<HTMLDivElement>) => {
        if (imageRef.current) {
            const canvas = await html2canvas(imageRef.current);
            const image = canvas.toDataURL('image/png');
            return image
        }
        throw new Error('Image error');
    });


const imageSlice = createSlice({
    name: 'image',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(generateImage.fulfilled, (state, action) => {
                state.imageBase64 = action.payload;
            })
    },
})

export default imageSlice.reducer;
