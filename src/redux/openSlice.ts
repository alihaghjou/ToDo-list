import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type openType = {
    open: boolean,
    success: boolean
}

export const openSlice = createSlice({
    name: "open",
    initialState: {
        open: false,
        success: false
    },
    reducers: {
        openMessage: (state, action: PayloadAction<openType>) => {
            state.open = action.payload.open
            state.success = action.payload.success
        }
    }
})
export const {openMessage} = openSlice.actions
export default openSlice.reducer