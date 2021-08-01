import React, { useContext, useCallback, useMemo } from 'react';
import Styled from 'styled-components';
import { Store } from './App';

const MenuOption = () => {
  const store = useContext(Store);

  const sortClick = useCallback((e) => {
    let target = e.target;
    let setSort = store.setSort;
    setSort(target.name);
  }, [store.setSort]);

  const documentSearch = useCallback((e) => {
    let val = e.target.value.replaceAll(' ','');
    let list = [...store.documents];
    list = list.filter((doc) => {
      return doc.name.replaceAll(' ','').indexOf(val) > -1 || doc.description.replaceAll(' ','').indexOf(val) > -1
    });
    let filterList = store._setDocuments;
    filterList(list);
  }, [store.documents, store._setDocuments]);

  const optionMemo = useMemo(() => {
    return (
      <Option>
        <SearchBox className="ui input">
          <input placeholder="Search..." onChange={ documentSearch } />
        </SearchBox>
        <div className="ui buttons">
          <button name="modifyDate"
            className={`ui button ${store.sort === 'modifyDate' ? 'active' : ''}`}
            onClick={sortClick}
          >최신 수정일순</button>
          <button name="createDate"
            className={`ui button ${store.sort === 'createDate' ? 'active' : ''}`}
            onClick={sortClick}
          >최신 생성일순</button>
        </div>
        <button className="ui positive button">새로만들기</button>
      </Option>
    );
  }, [documentSearch, sortClick, store.sort]);

  let hashYN = store.hash === '/';
  let docYN = store.documents.length !== 0;
  
  return (
    <>{hashYN && docYN && optionMemo}</>
  )
}

export default MenuOption;

const Option = Styled.div`
  position: absolute !important;
  top: 50% !important;
  right: 11px !important;
  transform: translateY(-50%);
  & * {
    font-size: 11px !important;
  }
  & *:focus {
    background: unset ;
  }
`;
const SearchBox = Styled.div`
  margin-right: 10px;
  height: 28.28px;
`;