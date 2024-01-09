import { createSlice, createAsyncThunk, PayloadAction, Slice } from "@reduxjs/toolkit";
import axios from 'axios'
import { Ability } from "../../utils/types";

export const fetchAbilities = createAsyncThunk('fetchAbilities', (query: string) => 
  axios
  .get(`https://pokeapi.co/api/v2/ability/${query}/`)
  .then(response => response.data)
)

interface AbilitySliceState {
  current_ability: null;
  loading: boolean;
  error: string | undefined;
}

const initialState: AbilitySliceState = {
  current_ability: null,
  loading: false,
  error: ''
}

export const abilitySlice: Slice = createSlice({
  name: 'abilityData',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(fetchAbilities.pending, (state: AbilitySliceState) => {
      state.loading = true
    })
    builder.addCase(fetchAbilities.fulfilled, (state: AbilitySliceState, action) => {
      state.loading = false
      state.current_ability = action.payload
      state.error = ''
    })
    builder.addCase(fetchAbilities.rejected, (state: AbilitySliceState, action) => {
      state.loading = false
      state.error = action.error.message
      state.current_ability = null
    })
  }
})

export default abilitySlice.reducer