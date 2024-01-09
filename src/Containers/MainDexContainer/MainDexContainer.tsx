import React from 'react'
import styled from 'styled-components'
import HistoryList from '../HistoryList';
import SearchBar from '../SearchBar';
import PokemonInfoCard from '../../Components/PokemonInfoCard';
import { Row, Column } from '../../Components/PokemonInfoCard/components/styled';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: #A42323;
  color: #eeeeee;
  height: 100vh;
  position: relative;
`

const MainColumn = styled(Column)`
  justify-content: center;
`

const MainDexContainer = () => {
  return (
    <MainContainer>
      <SearchBar/>
      <MainColumn $align='flex-start' $alignSelf='center'>
        <Row>
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
