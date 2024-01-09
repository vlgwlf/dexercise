import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { fetchPokemon } from '../../features/search/dexSlice';
import { Row } from '../PokemonInfoCard/components/styled';

const InputWrapper = styled.div`
  position: relative;
  height: 100px;
  width : 200px;
`

const StyledInput = styled.input`
  height: 50px;
  box-sizing: border-box;
  padding-left: 1.5rem;
  border-radius: 1.5rem;
  border: 0;
`

const StyledButton = styled.button`
  margin-left: 1rem;
  border-radius: 1rem;
  background-color: #8f8f8f; //nice
  border: none;
  color: #fff;
  position: absolute;
  right: 0;
  height: 2rem;
  top: 0.5rem;
  right: 0.75rem;
`

const SearchInput = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch<AppDispatch>();
  const updateQuery = useCallback((e: React.BaseSyntheticEvent) => {
    setQuery(e.target.value.toLowerCase());
  }, [query])

  const searchPokemon = () => {
    dispatch(fetchPokemon(query))
  }

  return (
    <InputWrapper>
      <StyledInput placeholder="e.g. Mew or 151" type="text" aria-label='Pokemon Search' onChange={updateQuery}/>
      <StyledButton onClick={searchPokemon}>Search</StyledButton>
    </InputWrapper>
  )
};

export default SearchInput;
