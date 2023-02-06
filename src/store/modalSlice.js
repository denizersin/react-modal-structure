import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modals: []
}
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        appendModal: (state, action) => {
            const data = action.payload
            state.modals.push(action.payload);

        },
        popModal: (state, action) => {
            state.modals.pop()
        },
        destoyAllModals: (state) => {
            state.modals = [];
        },
        setWillMountModal: (state) => {
            state.modals[state.modals.length - 1].willUnMount = true;
        }
    }
})

export const { appendModal, popModal, setWillMountModal, destoyAllModals } = modalSlice.actions


export default modalSlice.reducer