import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConfirmationState {
    isOpen: boolean;
    title: string;
    description: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
}

const initialState: ConfirmationState = {
    isOpen: false,
    title: '',
    description: '',
    confirmText: 'Yes, I am',
    cancelText: 'Cancel',
    onConfirm: undefined
};

export const confirmationSlice = createSlice({
    name: 'confirmation',
    initialState,
    reducers: {
        openConfirmation: (state, action: PayloadAction<{
            title: string;
            description: string;
            confirmText?: string;
            cancelText?: string;
            onConfirm: () => void;
        }>) => {
            state.isOpen = true;
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.confirmText = action.payload.confirmText || 'Yes, I am';
            state.cancelText = action.payload.cancelText || 'Cancel';
            state.onConfirm = action.payload.onConfirm;
        },
        closeConfirmation: (state) => {
            state.isOpen = false;
            state.onConfirm = undefined;
        }
    }
})

export const { openConfirmation, closeConfirmation } = confirmationSlice.actions;
export default confirmationSlice.reducer;