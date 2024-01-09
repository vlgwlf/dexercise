import React from 'react'
import {
  CardBody,
  Sprite,
  NameLabel
} from './components/styled';
import { Pokemon } from '../../utils/types';

interface IHistoryCardProps {
  pokemon: Pokemon;
  sprite: string;
  name: string;
  type: string;
  setMon: (pokemon: Pokemon) => void;
}

const HistoryPokemonCard: React.FunctionComponent<IHistoryCardProps> = ({
  pokemon,
  sprite,
  name,
  type,
  setMon
}) => {
  return(
    <CardBody $type={type} onClick={() => setMon(pokemon)}>
      <Sprite src={sprite}/>
      <NameLabel>{`${name}`}</NameLabel>
    </CardBody>
  )
}

export default HistoryPokemonCard;
