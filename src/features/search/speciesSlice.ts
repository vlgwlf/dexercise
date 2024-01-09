import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { SpeciesInfo } from "../../utils/types";
import { apiToSpeciesFormat } from "../../utils/adapter";

export interface SpeciesInfoState {
  raw_species_info: any;
  loading: Boolean;
  error: String | undefined;
  current_info: SpeciesInfo | null;
}

export const fetchSpecies = createAsyncThunk('fetchSpecies', (query: string) => 
  axios
  .get(`https://pokeapi.co/api/v2/pokemon-species/${query}/`)
  .then(response => response.data)
)

const initialState: SpeciesInfoState = {
  raw_species_info: {},
  loading: false,
  error: '',
  current_info: null
}

export const evoSlice = createSlice({
  name: 'speciesData',
  initialState,
  reducers: {
    setSpeciesInfo(state: SpeciesInfoState, action) {
      if (action.payload) {
        if (action.payload.order) {
          state.current_info = apiToSpeciesFormat(action.payload)
        } else {
          state.current_info = apiToSpeciesFormat(state.raw_species_info)
        }
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchSpecies.pending, (state: SpeciesInfoState) => {
      state.loading = true
    })
    builder.addCase(fetchSpecies.fulfilled, (state: SpeciesInfoState, action) => {
      state.loading = false
      state.error = ''
      state.raw_species_info = action.payload
    })
    builder.addCase(fetchSpecies.rejected, (state: SpeciesInfoState, action) => {
      state.loading = false
      state.raw_species_info = {}
      state.error = action.error.message
    })
  }
})

export const { setSpeciesInfo } = evoSlice.actions
export default evoSlice.reducer
