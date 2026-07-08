import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API = "http://localhost:3000/api/goals"

export const fetchGoals = createAsyncThunk(
  "goals/fetchGoals",
  async () => {
    const res = await axios.get(API)
    return res.data
  }
)

export const addGoal = createAsyncThunk(
  "goals/addGoal",
  async (goal) => {
    const res = await axios.post(API, goal)
    return res.data
  }
)
export const updateGoal = createAsyncThunk(
  "goals/updateGoal",
  async ({ id, updatedData }) => {
    const res = await axios.put(`${API}/${id}`, updatedData);
    return res.data;
  }
)

export const toggleFavorite = createAsyncThunk(
  "goals/toggleFavorite",
  async (id) => {
    const res = await axios.put(`${API}/${id}/toggleFavorite`);
    return res.data;
  } 
)

export const deleteGoal = createAsyncThunk(
  "goals/deleteGoal",
  async (id) => {
    await axios.delete(`${API}/${id}`)
    return id
  }
)

const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    goals: [],
    favorites: [],
    darkMode: false
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoals.fulfilled, (state, action) => {
      state.goals = action.payload
      state.favorites = action.payload.filter(g => g.isFavorite).map(g => g._id)
    })

    builder.addCase(addGoal.fulfilled, (state, action) => {
      state.goals.push(action.payload)
      if (action.payload.isFavorite) state.favorites.push(action.payload._id)
    })

    builder.addCase(deleteGoal.fulfilled, (state, action) => {
      state.goals = state.goals.filter(g => g._id !== action.payload)
      state.favorites = state.favorites.filter(id => id !== action.payload)
    })
    builder.addCase(updateGoal.fulfilled, (state, action) => {
        const updatedGoal = action.payload;
        const index = state.goals.findIndex(g => g._id === updatedGoal._id);
        if (index !== -1) state.goals[index] = updatedGoal;

        if (updatedGoal.isFavorite) {
          if (!state.favorites.includes(updatedGoal._id)) state.favorites.push(updatedGoal._id);
        } else {
          state.favorites = state.favorites.filter(id => id !== updatedGoal._id);
        }
      });
    builder.addCase(toggleFavorite.fulfilled, (state, action) => {
      const updatedGoal = action.payload;
      const index = state.goals.findIndex(g => g._id === updatedGoal._id);
      if (index !== -1) state.goals[index] = updatedGoal;

      if (updatedGoal.isFavorite) {
        if (!state.favorites.includes(updatedGoal._id)) state.favorites.push(updatedGoal._id);
      } else {
        state.favorites = state.favorites.filter(id => id !== updatedGoal._id);
      }
    })
  }
})

export const { toggleDarkMode } = goalsSlice.actions
export default goalsSlice.reducer