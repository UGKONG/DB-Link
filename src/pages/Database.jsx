import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import Styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Side from './database/Side';
import Board from './database/Board';
import { Store } from '../App';

const Database = () => {
  const store = useContext(Store);
  const [data, setData] = useState({});
  const [categoryList, setCategoryList] = useState([
    {seq: 1, name: '부평 11번가'}, 
    {seq: 2, name: '뉴딜참여'}, 
    {seq: 3, name: '주민공동체'}, 
    {seq: 4, name: '상권활성화'}, 
    {seq: 5, name: '스마트시티'}
  ])
  const { id } = useParams();

  useEffect(() => {
    let setHeaderYN = store.setHeaderYN;
    setHeaderYN(false);
  }, [store.setHeaderYN]);

  return (
    <Content>
      <Side 
        Common={{Div, Title, ContentContainer}}
        list={categoryList}
      />
      <Board 
        Common={{Div, Title, ContentContainer}}
      />
    </Content>
  )

}

export default Database;

const Content = Styled.section`
  width: 100%;
  height: calc(100% - 42px);
  display: flex;
  user-select: none;
`;
const Div = Styled.div`
  border: 1px solid #ddd;
  height: 100%;
  box-shadow: 0 2px 6px #aaaaaa90;
  border-radius: 8px;
`;
const Title = Styled.h2`
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  font-size: 17px;
  color: #999;
  border-bottom: 1px solid #eee;
  margin-bottom: 0;
  position: relative;
  z-index: 9;
`;
const ContentContainer = Styled.div`
  width: 100%;
  height: calc(100% - 44px);
  background-color: ${({bg}) => bg ? '#c0cfdd' : 'transparent'};
  position: relative;
  overflow: hidden;
`;