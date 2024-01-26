import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expenses: [], // Puede tener cualquier nombre
}

export const counterSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
        action.payload.id = new Date().toString() + Math.random().toString()
        state.expenses.push(action.payload)
    },
    deleteExpense: (state, action) => {
        const id = action.payload
        const index = state.expenses.findIndex( expense => expense.id == id )
        state.expenses.splice(index, 1)
    },
    updateExpense: (state, action) => {
        const id = action.payload.id
        const data = action.payload
        const index = state.expenses.findIndex(expense => expense.id === id)
        state.expenses[index] = {id, ...data} 
    },
    setExpenses(state, action){
        state.expenses = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addExpense, deleteExpense, updateExpense, setExpenses } = counterSlice.actions

export default counterSlice.reducer