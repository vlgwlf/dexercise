import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { apiToEvolutionsFormat } from "../../utils/adapter";

export interface EvolutionLineState {
  raw_evolution_chain: any;
  loading_evos: Boolean;
  evo_error: String | undefined;
  formatted_evos: [] | null
}

export const fetchEvolutions = createAsyncThunk('fetchEvolutions', (query: string) => 
  axios
  .get(`https://pokeapi.co/api/v2/evolution-chain/${query}/`)
  .then(response => response.data)
)

const initialState = {
  raw_evolution_chain: [],
  loading_evos: false,
  evo_error: '',
  formatted_evos: null
}

export const evoSlice = createSlice({
  name: 'evoData',
  initialState,
  reducers: {
    setEvolutionChain(state: EvolutionLineState, action) {
      if (action.payload) {
        state.formatted_evos = apiToEvolutionsFormat(action.payload)
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchEvolutions.pending, (state: EvolutionLineState) => {
      state.loading_evos = true
    })
    builder.addCase(fetchEvolutions.fulfilled, (state: EvolutionLineState, action) => {
      state.loading_evos = false
      state.evo_error = ''
      state.raw_evolution_chain = action.payload
    })
    builder.addCase(fetchEvolutions.rejected, (state: EvolutionLineState, action) => {
      state.loading_evos = false
      state.raw_evolution_chain = []
      state.evo_error = action.error.message
    })
  }
})

export const { setEvolutionChain } = evoSlice.actions
export default evoSlice.reducer

