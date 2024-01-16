import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from './expenses'

export default configureStore({
    reducer: {
        expenses: expensesReducer
    }
})