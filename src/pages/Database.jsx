import React, { useState, useEffect, useRef, useContext, useCallback, useMemo } from 'react';
import Styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Side from './database/Side';
import Board from './database/Board';
import { Store } from '../App';

const Database = () => {
  const store = useContext(Store);
  const [data, setData] = useState({});
  const [categoryList, setCategoryList] = useState([
    { seq: 1, name: '부평 11번가' },
    { seq: 2, name: '뉴딜참여' },
    { seq: 3, name: '재생사업 정보' },
    { seq: 4, name: '상권활성화' },
    { seq: 5, name: '스마트시티' }
  ]);
  const [fieldList, setFieldList] = useState([
    { seq: 1, category: 1, name: '굴포천 재생사업'},
    { seq: 2, category: 1, name: '혁신센터 및 푸드플랫폼 구축 사업'},
    { seq: 3, category: 1, name: '굴포 먹거리타운 사업'},
    { seq: 4, category: 1, name: '굴포 하늘길 조성 사업'},
    { seq: 5, category: 1, name: '도시숲 조성 사업'},
    { seq: 6, category: 1, name: '부평 문화의 거리 연장 사업'},
    { seq: 7, category: 1, name: '구청중심 공공문화 공간'},
    { seq: 8, category: 2, name: '공지사항'},
    { seq: 9, category: 2, name: '도시재생대학'},
    { seq: 10, category: 2, name: '주민공모사업'},
    { seq: 11, category: 2, name: '설문조사'},
    { seq: 12, category: 2, name: '주민공동체'},
    { seq: 13, category: 2, name: '사업홍보물'},
    { seq: 14, category: 2, name: '사업기록'},
    { seq: 15, category: 3, name: '공모일정'},
    { seq: 16, category: 3, name: '도시재생 사업 현황'},
    { seq: 17, category: 4, name: '푸드플랫폼'},
    { seq: 18, category: 4, name: '굴포먹거리타운'},
    { seq: 19, category: 5, name: '미디어 글라스'},
    { seq: 20, category: 5, name: '공연장'},
    { seq: 21, category: 5, name: '주민공청회'},
  ])
  const wrapRef = useRef();
  const tableRef = useRef();
  const { id } = useParams();

  useEffect(() => {
    let setHeaderYN = store.setHeaderYN;
    setHeaderYN(false);
  }, [store.setHeaderYN]);

  return (
    <Content>
      <Side 
        Common={{ Div, Title, ContentContainer }}
        wrapRef={wrapRef}
        tableRef={tableRef}
        categoryList={categoryList}
        fieldList={fieldList}
      />
      <Board 
        Common={{ Div, Title, ContentContainer }}
        wrapRef={wrapRef}
        tableRef={tableRef}
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
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 6px #aaaaaa90;
  border-radius: 8px;
  overflow: hidden;
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
  display: ${({display}) => display === 'flex' ? 'flex' : 'block'};
  align-items: center;
  justify-content: center;
`;