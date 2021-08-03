import React from 'react';
import Styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const ContextMenu = ({data, state}) => {
  const not = () => alert('준비중입니다.');
  return (
    <Menu state={state}>
      <NavLink to={'/Document/' + data.seq}>상세보기</NavLink>
      <Link to="/" onClick={not}>이름변경</Link>
      <Link to="/" onClick={not}>삭제</Link>
    </Menu>
  )
}

export default ContextMenu;

const Menu = Styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 10;
  display: ${({ state }) => state ? 'flex' : 'none'};
  & > a {
    outline: 0;
    border: none;
    border: 1px solid rgba(34,36,38,.15);
    width: 100%;
    height: calc(100% / 3);
    font-size: 12px;
    color: #444;
    white-space: nowrap;
    padding: 2px 10px;
    border-radius: 2px;
    margin-left: 2px;
    background: #fff;
  }
  & > a:hover {
    background-color: #ddd;
    color: #000;
  }
  & > a:active {
    background-color: #ccc;
  }
`;