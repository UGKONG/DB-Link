import React, { useState, useContext } from 'react';
import Styled from "styled-components";
import Document from './Document';
import { Store } from '../App';
import NotDocument from "./NotDocuments";

const Documents = () => {

  const store = useContext(Store);
  
  let list = [...store._documents];

  if (list.length !== 0) {
    list.sort((x, y) => {
      let _x = x[store.sort].replaceAll('-', '');
      let _y = y[store.sort].replaceAll('-', '');
      return _y - _x;
    });
  }

  return (
    <DocList className="ui placeholder segment">
      {store.documents.length === 0 && <NotDocument />}
      {list.length !== 0 && list.map(data => <Document key={data.seq} data={data} />)}
      {store.documents.length !== 0 && list.length === 0 && <NotFound>검색결과가 없습니다.</NotFound> }
    </DocList>
  )
}

export default Documents;

const DocList = Styled.div`
  margin: 0 !important;
  border-radius: 0 !important;
  border-left: none !important;
  border-right: none !important;
  justify-content: unset !important;
  min-height: calc(100% - 42px) !important;
  max-height: calc(100% - 42px) !important;
  overflow: auto !important;
`;
const NotFound = Styled.div`
  color: #aaa;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: .5px;
  font-size: 14px;
`;