import React, { useContext, useCallback, useEffect } from 'react';
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

  return (
    <Menu className="ui menu">
      <NavLink exact 
        to={'/'}
        name="/"
        className="item" 
        activeClassName="active"
        onClick={menuClick}
      >내문서</NavLink>

      <NavLink 
        to={'/MyPage'}
        name="/MyPage"
        className="item" 
        activeClassName="active"
        onClick={menuClick}
      >마이페이지</NavLink>

      <NavLink 
        to={'/Setting'}
        name="/Setting"
        className="item" 
        activeClassName="active"
        onClick={menuClick}
      >설정</NavLink>

      <MenuOption />
    </Menu>
  )
}

export default Header;

const Menu = Styled.div`
  border-radius: 0 !important;
  border-left: none !important;
  border-right: none !important;
  margin: 0 !important;
  position: relative !important;
`;