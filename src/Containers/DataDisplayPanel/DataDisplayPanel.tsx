import React from 'react'
import styled from 'styled-components'

const DataColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100rem;
  background-color: #0471ff;
  color: #eeeeee;
  width: 70%;
`

const DataDisplayContainer = () => {
  return (
    <DataColumn>
      <div>Foo</div>
    </DataColumn>
  )
};

export default DataDisplayContainer;
