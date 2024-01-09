import React from 'react'
import styled from 'styled-components'
import SearchInput from '../../Components/SearchInput';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem;
  top: 0;
  position: sticky;
`

const Title = styled.div`
  color: #ffffff;
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px #4d4d4d;
`

const SearchBar = () => (
  <Container>
    <Title>
      Who are you looking for?
    </Title>
    <SearchInput/>
  </Container>
)

export default SearchBar;
