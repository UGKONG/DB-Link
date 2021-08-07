import React, { useState } from 'react';
import Styled from 'styled-components';

const Side = ({Common, list}) => {

  const categoryDrag = (e) => {
    console.log(e)
  }

  return (
    <NavWrap>
      <Common.Div>
        <Common.Title>STOCKS</Common.Title>
        <Common.ContentContainer>
          <Ul>
            {list.map((li, i) => {
              return (
                <Li key={li.seq} onDrag={categoryDrag}>
                  {li.name}
                </Li>
              )
            })}
          </Ul>
        </Common.ContentContainer>
      </Common.Div>
    </NavWrap>
  )
}

export default Side;

const NavWrap = Styled.nav`
  width: 250px;
  height: 100%;
  padding: 10px;
  z-index: 9;
`;
const Ul = Styled.ul`
  height: calc(100% - 10px);
  overflow: auto;
  margin: 10px 0 0;
  padding: 10px;
`;
const Li = Styled.li`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  margin-bottom: 5px;
  font-size: 12px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #e1e9e1;
  }
`;