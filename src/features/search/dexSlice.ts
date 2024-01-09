import { createSlice, createAsyncThunk, PayloadAction, Slice } from "@reduxjs/toolkit";
import axios from 'axios'
import { Pokemon } from "../../utils/types";
import { apiToPokemonFormat } from "../../utils/adapter";

export interface PokedexState {
  raw_pokemon: any;
  loading: Boolean;
  error: String | undefined;
  history: Pokemon[];
  current_mon: Pokemon | null;
}

export const fetchPokemon = createAsyncThunk('fetchPokemon', (query: string) => 
  axios
  .get(`https://pokeapi.co/api/v2/pokemon/${query}/`)
  .then(response => response.data)
)

const initialState: PokedexState = {
  raw_pokemon: null,
  loading: false,
  error: '',
  history: [],
  current_mon: null
}

export const dexSlice: Slice = createSlice({
  name: 'dexData',
  initialState,
  reducers: {
    setCurrentPokemon(state: PokedexState, action: PayloadAction<Pokemon>) {
      if (action.payload) {
        if (action.payload.national_dex_no) {
          state.current_mon = action.payload
        } else {
          state.current_mon = apiToPokemonFormat(action.payload)
        }
      } 
    },
    pushToHistory(state: PokedexState, action: PayloadAction<Pokemon>) {
      if (action.payload && (action.payload !== state.current_mon)) {
        if (state.history.includes(action.payload)) {
          let newHistory = state.history.filter((mon: Pokemon) => 
            mon.name !== action.payload.name
          )
          state.history = [action.payload, ...newHistory]
        } else {
          state.history = [action.payload, ...state.history]
        }
      }
    },
    removeFromHistory(state: PokedexState, action: PayloadAction<Pokemon>) {
      let mon_index: number = 0;
      
      state.history.forEach((mon: Pokemon, i: number) => {
        if (mon.name === action.payload.name) {
          mon_index = i
        }
      })

      const new_history = [
        ...state.history.slice(0, mon_index),
        ...state.history.slice(mon_index+1, state.history.length)
      ]
      
      state.history = new_history
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchPokemon.pending, (state: PokedexState) => {
      state.loading = true
    })
    builder.addCase(fetchPokemon.fulfilled, (state: PokedexState, action) => {
      state.loading = false
      state.raw_pokemon = action.payload
      state.error = ''
    })
    builder.addCase(fetchPokemon.rejected, (state: PokedexState, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})

export const { setCurrentPokemon, pushToHistory, removeFromHistory }  = dexSlice.actions
export default dexSlice.reducer
