import React, { useState, useMemo, useCallback } from 'react';
import Styled from 'styled-components';

const Board = ({ Common, wrapRef, tableRef }) => {

  const [mouseDownYN, setMouseDownYN] = useState(false);
  const [mouseStartPo, setMouseStartPo] = useState([0, 0]);
  const [mouseEndPo, setMouseEndPo] = useState([0, 0]);
  const [mouseMoveRange, setMouseMoveRange] = useState([0, 0]);
  const [tablePo, setTablePo] = useState([0, 0]);

  const onMouseDown = useCallback((e) => {
    if (e.button === 2 && e.target.className.indexOf('content') > -1) { // 우클릭
      setMouseDownYN(true);
      setMouseStartPo([e.pageX, e.pageY]);
    }
  }, []);

  const onMouseUp = useCallback((e) => {
    setMouseDownYN(false);
    setMouseEndPo([tablePo[0], tablePo[1]]);
    setMouseMoveRange([0, 0]);
  }, [tablePo]);

  const onMouseMove = useCallback((e) => {
    if (!mouseDownYN) return;
    setMouseMoveRange([e.pageX - mouseStartPo[0], e.pageY - mouseStartPo[1]]);
    let X = mouseEndPo[0] + mouseMoveRange[0];
    let Y = mouseEndPo[1] + mouseMoveRange[1];
    let w = (tableRef.current.clientWidth - wrapRef.current.clientWidth) / 2; // 100
    let h = (tableRef.current.clientHeight - wrapRef.current.clientHeight) / 2;
    let calcX = X < w && X > (w * -1) ? X : X >= 0 ? w : (w * -1);
    let calcY = Y < h && Y > (h * -1) ? Y : Y >= 0 ? h : (h * -1);
    setTablePo([calcX, calcY]);
  }, [mouseDownYN, mouseEndPo, mouseMoveRange, mouseStartPo, tableRef, wrapRef]);

  const tag = useMemo(() => {
    return (
      <Canvas>
        <Common.Div>
          <Common.Title>TABLE</Common.Title>
          <Common.ContentContainer
            display={'flex'}
            ref={wrapRef}
          >
            <Content ref={tableRef} className="content"
              style={{ transform: `translate(${tablePo[0]}px, ${tablePo[1]}px)` }}
              onMouseDown={onMouseDown} onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
            />
          </Common.ContentContainer>
        </Common.Div>
      </Canvas>
    )
  }, [onMouseDown, onMouseMove, onMouseUp, tablePo, tableRef, wrapRef]);

  return tag;
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
  padding: 100px;
  cursor: move;
  background-color: #c0cfdd;
  transform: translate(0, 0);
`;