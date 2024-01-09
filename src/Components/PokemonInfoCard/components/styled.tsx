import styled, { keyframes } from "styled-components";
import { type_to_hex_dict } from "../../../utils/reference-tables";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: #eeeeee;
  color: #000;
  z-index: 1;
  align-self: center;
  max-height: 75rem;
  max-width: 120rem;
  justify-content: space-between;
  justify-self: center;
`

const Row = styled.div<{
  $no_padding?: boolean,
  $spacing?: string,
  $align?: string
}>`
  display: flex;
  flex: 1;
  max-width: 100%;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: ${props => props.$align ? props.$align : 'flex-start'};
  align-items: ${props => props.$align ? props.$align : 'flex-start'};
  padding-left: ${props => props.$no_padding ? 0 : '1rem'};
  padding-right: ${props => props.$no_padding ? 0 : '1rem'};
  justify-content: ${props => props.$spacing ? props.$spacing : 'flex-start'};
`

const ScrollRow = styled(Row)`
  overflow-x: scroll;
  max-width: 15rem;
  &::-webkit-scrollbar {
    background-color: transparent;
    height: 3px;
  };
  &::-webkit-scrollbar-thumb {
    background-color: #424242;
    border-radius: 10rem;
    height: 3px;
  }
  &-ms-overflow-style {
    background-color: transparent;
  };
`

const Column = styled.div<{
  $align: string,
  $margin?: boolean,
  $alignSelf?: string
}>`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 33%;
  max-width: 100%;
  align-items: ${
    props => props.$align
  };
  align-self: ${ props => props.$alignSelf ? props.$alignSelf : 'flex-start' };
  justify-items: flex-start;
  margin-left: ${props => props.$margin ? '2.25rem' : 0};
`

const MainSprite = styled.img<{
  $type: string
}>`
  background-color: #FFF;
  border-color: ${props => props.$type ? type_to_hex_dict[props.$type] : 'none'};
  border-width: 3px;
  border-style: solid;
  border-radius: 1rem;
  max-width: 10em;
  max-height: 10em;
  margin-bottom: 0.5rem;
`

const NameLabel = styled.label<{$size?: string}>`
  color: #424242;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 0.25rem;
  padding: 0;
  font-size: ${props => props.$size === 'lg' ? '1.25rem' : '1rem'}
`

const Description = styled.label`
  color: #7a7a7a;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 0.25rem;
  padding: 0;
  font-size: 0.75rem;
  font-style: italic;
`

const TypeBadge = styled.div<{$type: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: ${props => type_to_hex_dict[props.$type]};
  width: 75px;
  height: 1.8rem;
  text-transform: capitalize;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  text-justify: center;
  margin: 0.25rem;
`

const MainHeader = styled.p`
  font-weight: 600;
  text-align: left;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  margin-top: 0;
`

const PokeLoader = styled.img<{$loading?: Boolean}>`
  max-width: 10rem;
  max-height: 10rem;
  animation: ${rotate} ${props => props.$loading ? '2s' : '0s'} linear infinite;
  align-self: center;
`

export {
  CardBody,
  MainHeader,
  TypeBadge,
  NameLabel,
  Column,
  Row,
  MainSprite,
  PokeLoader,
  Description,
  ScrollRow
}
