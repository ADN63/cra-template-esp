import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";
import { getConfigAsync } from "./configAPI";
import { ConfigResponse } from "src/types/config";

export interface ConfigState {
    status: 'idle' | 'loading' | 'failed' | 'success'
    value: ConfigResponse
}

const initialState: ConfigState = {
    status: 'idle',
    value: null!
}
// export const ft_authStrict = "ft_authStrict";
// export const ft_fileUpload = "ft_fileUpload";
// export const ft_ota = "ft_ota";
// export const ft_cors = "ft_cors";d 'Authentification";

export const GetConfigAsync = createAsyncThunk(
    'config/get',
    async () => {
        const response = await getConfigAsync();
        return response;
    }
)


export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(GetConfigAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(GetConfigAsync.fulfilled, (state, action) => {
                state.status = 'success'
                state.value = action.payload
            })
            .addCase(GetConfigAsync.rejected, (state, action) => {
                state.status = 'failed'
            })
    }
})

export const selectConfig = (state: RootState) => state.root.config;
export default configSlice.reducer;