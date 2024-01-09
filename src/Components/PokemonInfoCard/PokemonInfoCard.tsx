import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  CardBody,
  NameLabel,
  MainHeader,
  MainSprite,
  Row,
  Column,
  TypeBadge,
  PokeLoader,
} from './components/styled';
import { PokedexState, setCurrentPokemon, pushToHistory } from '../../features/search/dexSlice';
import { Ability, Pokemon, Stat } from '../../utils/types';
import { api_to_readable_stat } from '../common/reference-tables';

const PokemonInfoCard = () => {
  const dispatch = useDispatch()
  const current_raw_mon = useSelector((state: {pokemon: PokedexState}) => state.pokemon.raw_pokemon)
  const formatted_mon: Pokemon | null = useSelector((state: {pokemon: PokedexState}) => state.pokemon.current_mon)
  
  useEffect(() => {
    dispatch(setCurrentPokemon(current_raw_mon))
  }, [current_raw_mon]) // updates the current pokemon when raw data is changed
  
  useEffect(() => {
    dispatch(pushToHistory(formatted_mon!))
  }, [current_raw_mon]) // pushes current pokemon to history when searching for a new mon
  
  const loading: Boolean = useSelector((state: { pokemon: PokedexState }) => state.pokemon.loading)
  const error: String | undefined = useSelector((state: { pokemon: PokedexState }) => state.pokemon.error)

  // useEffect(() => {
  //   // call evolution line dispatcher
  // }, [formatted_mon])

  const evolution_line: any = [] //placeholder

  return !loading && formatted_mon
    ? (
      <CardBody>
        <Row $spacing='space-evenly'>
          <Column $align='center' aria-label="Primary information display"> 
            <NameLabel $size='lg'>
              {`${formatted_mon.name} - #${formatted_mon.national_dex_no}`}
            </NameLabel>
            <MainSprite 
              src={formatted_mon.large_sprite}
              $type={formatted_mon.types[0]}
            />
            <Row>
              {
                formatted_mon.types.length
                ? formatted_mon.types.map(type => <TypeBadge key={type} $type={type}>{type}</TypeBadge>)
                : null
              }
            </Row>
          </Column>
          <Column $align='left' aria-label="Detailed information display">
            <Row $align='flex-start' $spacing='flex-start'> {/* Evo Row */}
              <Column $align='left'>
                <MainHeader>
                  Evolutions
                </MainHeader>
                <Row $no_padding $spacing='flex-start'> {/* Refactor into it's own component */}
                  {
                      evolution_line.length
                      ? (
                          evolution_line.length
                          ? evolution_line.map((evo_data: any) => evo_data.name)
                          : null
                        )
                    : <NameLabel>No evo</NameLabel>
                  }
                </Row>
              </Column>
            </Row>
            <Row $spacing='space-between'> {/* Stat & Ability Row */}
              <Column $align='flex-start'>
                <MainHeader>
                  Abilities
                </MainHeader>
                {
                  formatted_mon.abilities.map(
                    (ability: Ability) => (
                      <NameLabel key={ability.ability.name}>
                        { ability.ability.name }
                      </NameLabel>
                    ))
                }
              </Column>
              <Column $align='flex-start' $margin>
                <MainHeader>
                  Base Stats
                </MainHeader>
                {
                  formatted_mon.stats.map((stat: Stat) => (
                    <Row $no_padding $spacing='space-between' $align='space-between'>
                      <div>
                        <NameLabel>
                          {`${api_to_readable_stat[stat.name]}: `}
                        </NameLabel>
                      </div>
                      <div style={{ marginLeft: '0.25rem', alignContent: 'flex-end' }}>
                        {`${stat.base_stat}`}
                      </div>
                    </Row>
                  ))
                }
              </Column>
            </Row>
          </Column>
        </Row>
      </CardBody>
    )
    : !loading && error
      ? <CardBody>
        <Column $align='center' $alignSelf='center'>
          <PokeLoader $loading={loading} src='https://i.pinimg.com/originals/09/a6/ae/09a6ae937a6d9ef5cd10d132b59d6f5d.png'/>
          <br/>
          <NameLabel>No results found!</NameLabel>
          <NameLabel>Try again?</NameLabel>
        </Column>
      </CardBody>
      : <CardBody>
          <Row $align='center' $spacing='center'>
            <Column $align='center' $alignSelf='center'>
              <PokeLoader $loading={loading} src='https://i.pinimg.com/originals/09/a6/ae/09a6ae937a6d9ef5cd10d132b59d6f5d.png'/>
            </Column>
          </Row>
        </CardBody>
}

export default PokemonInfoCard
