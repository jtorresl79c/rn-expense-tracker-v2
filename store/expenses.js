import { createSlice } from '@reduxjs/toolkit'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2024-01-15')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2021-12-01')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18')
    },
    {
        id: 'e6',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18')
    },
    {
        id: 'e7',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18')
    },
    {
        id: 'e8',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18')
    },
    {
        id: 'e9',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18')
    }
]

const initialState = {
  expenses: DUMMY_EXPENSES, // Puede tener cualquier nombre
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { addExpense, deleteExpense, updateExpense } = counterSlice.actions

export default counterSlice.reducer