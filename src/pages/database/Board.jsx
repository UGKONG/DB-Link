import React, { useState } from 'react';
import Styled from 'styled-components';

const Board = ({ Common, list }) => {
  return (
    <Canvas>
      <Common.Div>
        <Common.Title>TABLE</Common.Title>
        <Common.ContentContainer bg={true}>
          <Content>
            <Table className="table" />
          </Content>
        </Common.ContentContainer>
      </Common.Div>
    </Canvas>
  )
}

export default Board;

const Canvas = Styled.article`
  width: calc(100% - 250px);
  height: 100%;
  padding: 10px 10px 10px 0;
  position: relative;
`;
const Content = Styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  box-sizing: content-box !important;
  overflow: hidden;
  padding: 200px;
`;
const Table = Styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 9;
  cursor: move;
`;