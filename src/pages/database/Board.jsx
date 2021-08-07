import React, { useState } from 'react';
import Styled from 'styled-components';

const Board = ({ Common, wrapRef, tableRef }) => {

  return (
    <Canvas>
      <Common.Div>
        <Common.Title>TABLE</Common.Title>
        <Common.ContentContainer
          bg={true}
          display={'flex'}
          ref={wrapRef}
          className="wrap"
        >
          <Content
            ref={tableRef}
            className="content"
          />
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
  position: relative;
  min-width: 100%;
  min-height: 100%;
  box-sizing: content-box !important;
  overflow: hidden;
  padding: 200px;
  cursor: move;
`;