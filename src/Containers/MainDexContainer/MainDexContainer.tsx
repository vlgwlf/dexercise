import React from 'react'
import styled from 'styled-components'
import HistoryList from '../HistoryList';
import SearchBar from '../SearchBar';
import PokemonInfoCard from '../../Components/PokemonInfoCard';
import { Row, Column } from '../../Components/PokemonInfoCard/components/styled';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #A42323;
  color: #eeeeee;
  height: 100vh;
  position: relative;
  margin: none;
`

const MainColumn = styled(Column)`
  justify-items: center;
`

const MainDexContainer = () => {
  return (
    <MainContainer>
      <SearchBar/>
      <MainColumn $align='center' $alignSelf='center'>
        <Row $spacing='center'>
          <PokemonInfoCard/>
        </Row>
        <Row $spacing='center'>
          <HistoryList/>
        </Row>
      </MainColumn>
    </MainContainer>
  )
};

export default MainDexContainer;
