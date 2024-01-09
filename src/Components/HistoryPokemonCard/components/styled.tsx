import styled from 'styled-components';
import { type_to_hex_dict } from '../../common/reference-tables';

const CardBody = styled.div<{$type?: string}>`
  background-color: #eeeeee;
  color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-top: 0.5rem;
  width: 10rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border-color: ${props => props.$type ? type_to_hex_dict[props.$type] : '#eeeeee'};
  border-style: solid;
  border-width: 3px;
  cursor: pointer;
`

const Sprite = styled.img`
  background-color: #FFF;
  border-radius: 1rem;
  max-width: 5rem;
  max-height: 5rem;
  margin-right: 1rem;
`

const NameLabel = styled.div`
  align-self: center;
  font-size: 1em;
  font-weight: 400;
  color: #000;
  text-transform: capitalize;
`

export {
  CardBody,
  Sprite,
  NameLabel
}