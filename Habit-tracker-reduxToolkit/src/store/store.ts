import { configureStore } from '@reduxjs/toolkit'
import habitReducers from './habit-slice'

const store = configureStore({
    reducer: {
        habits: habitReducers
    }
})

// type of store
export type RootState = ReturnType<typeof store.getState>

// type of dispatch
export type AppDispatch = typeof store.dispatch

export default store