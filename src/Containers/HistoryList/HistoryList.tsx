import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { PokedexState, setCurrentPokemon, pushToHistory, removeFromHistory } from '../../features/search/dexSlice';
import { Column } from '../../Components/PokemonInfoCard/components/styled';
import { Pokemon } from '../../utils/types';
import HistoryPokemonCard from '../../Components/HistoryPokemonCard';
import { NameLabel } from '../../Components/HistoryPokemonCard/components/styled';

const HistoryColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  color: #eeeeee;
  justify-items: center;
  align-items: center;
`

const Title = styled.div`
  color: #eeeeee;
  font-size: 2rem;
  font-weight: 500;
`

const CardColumn = styled(Column)`
  max-height: 30vh;
  overflow-y: scroll;
  padding: 0.5rem;
  &::-webkit-scrollbar {
    background-color: transparent; // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
    width: 5px;
  };
  &::-webkit-scrollbar-thumb {
    background-color: #424242;
    border-radius: 10rem;
    width: 5px;
  }
  &-ms-overflow-style {
    background-color: transparent; // Hide the scrollbar for IE
  };
`

const HistoryList = () => {
  const dispatch = useDispatch()
  const history: Pokemon[] = useSelector((state: {pokemon: PokedexState}) => state.pokemon.history)
  const curr_mon: Pokemon | null = useSelector((state: {pokemon: PokedexState}) => state.pokemon.current_mon)
  
  const revisitPokemon = (pokemon: Pokemon) => {
    dispatch(pushToHistory(curr_mon))
    dispatch(removeFromHistory(pokemon))
    dispatch(setCurrentPokemon(pokemon))
  }

  return (
    <HistoryColumn>
      <Title>
        Recent Searches
      </Title>
      {
        history.length > 0 &&
        <CardColumn $align='flex-start' style={{
         
        }}>
          {
            history.length > 0
            ? history.map((mon: Pokemon, i: number) => 
                <HistoryPokemonCard
                  pokemon={mon}
                  setMon={revisitPokemon}
                  key={`${mon.name}-${i}`}
                  type={mon.types[0]}
                  sprite={mon.dex_sprite}
                  name={mon.name}
                />
              )
            : <NameLabel>"No search history yet"</NameLabel>
          }
        </CardColumn>
      }
    </HistoryColumn>
  )
};

export default HistoryList;
