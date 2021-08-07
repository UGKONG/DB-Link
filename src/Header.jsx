import React, { useContext, useMemo, useCallback, useEffect } from 'react';
import Styled from 'styled-components';
import MenuOption from './MenuOption';
import { NavLink } from 'react-router-dom';
import { Store } from './App';

const Header = () => {
  
  const store = useContext(Store);

  const menuClick = useCallback((e) => {
    let setHash = store.setHash;
    setHash(e.target.name);
  }, [store.setHash]);

  const BackBtnClick = useCallback(() => {
    let setHash = store.setHash;
    let setHeaderYN = store.setHeaderYN;
    setHash('/');
    setHeaderYN(true);
  }, [store.setHash, store.setHeaderYN]);

  useEffect(() => { // 임시
    console.log(store);
  });

  const justHeader = useMemo(() => {
    return (
      <Menu className="ui menu">
        <NavLink exact 
          to={'/'}
          name="/"
          className="item" 
          activeClassName="active"
          style={{outline: "none"}}
          onClick={menuClick}
        >내문서</NavLink>
        <NavLink 
          to={'/MyPage'}
          name="/MyPage"
          className="item" 
          activeClassName="active"
          style={{outline: "none"}}
          onClick={menuClick}
        >마이페이지</NavLink>
        <NavLink 
          to={'/Setting'}
          name="/Setting"
          className="item" 
          activeClassName="active"
          style={{outline: "none"}}
          onClick={menuClick}
        >설정</NavLink>
        <MenuOption />
      </Menu>
    )
  }, [menuClick]);

  const databaseHeader = useMemo(() => {
    return (
      <DatabaseHeader>
        <NavLink
          to={'/'}
          style={BackBtnStyle}
          onClick={BackBtnClick}>
          <i className="icon chevron left" style={iStyle} />
          뒤로가기
        </NavLink>
      </DatabaseHeader>
    )
  }, [BackBtnClick]);

  return store.headerYN ? justHeader : databaseHeader;
}

export default Header;

const Menu = Styled.div`
  border-radius: 0 !important;
  border-left: none !important;
  border-right: none !important;
  margin: 0 !important;
  position: relative !important;
  z-index: 9;
`;
const DatabaseHeader = Styled.header`
  height: 42px;
  font-size: 14px;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  background: #fff;
  font-weight: 400;
  border: 1px solid rgba(34,36,38,.15);
  box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
  position: relative;
  z-index: 9;
`;
const BackBtnStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  padding: '0 16px',
  float: 'left',
  fontWeight: 500
}
const iStyle = {
  transform: 'translateY(-2px)'
}