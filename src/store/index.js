import { configureStore } from '@reduxjs/toolkit'
import modal from "./modalSlice"
export const store = configureStore({
    reducer: {
        modal
    },
    middleware: (getDefaultMiddleware) =>  //!unserializable warning (important!) 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
