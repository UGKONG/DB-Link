import React, { useState, useCallback, useMemo } from 'react';
import Styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import ContextMenu from '../other/ContextMenu';

const Document = ({ data }) => {
  
  const [load, setLoad] = useState(false);
  const [hoverYN, setHoverYN] = useState(false);

  const loadDocMemo = useMemo(() => {
    return (
      <Doc className="ui segment">
        <div className="ui placeholder">
          <div className="image header">
            <div className="line" />
            <div className="line" />
          </div>
        </div>
      </Doc>
    )
  }, []);

  const docMouseOver = useCallback(() => {
    setHoverYN(true);
  }, [setHoverYN]);

  const docMouseLeave = useCallback(() => {
    setHoverYN(false);
  }, [setHoverYN]);

  if (load) {
    return loadDocMemo;
  } else {
    return (
      <ContentDoc onMouseOver={docMouseOver} onMouseLeave={docMouseLeave}>
        <MainInfo>
          <FontAwesomeIcon icon={faServer} />
          <div className="info">
            <p className="name">{data.name}</p>
            <p className="description" title={data.description}>
              {data.description}
            </p>
          </div>
        </MainInfo>
        <SubInfo>
          <p>생성일 : {data.createDate}</p>
          <p>수정일 : {data.modifyDate}</p>
        </SubInfo>
        <ContextMenu data={data} state={hoverYN} />
      </ContentDoc>
    )
  }
}

export default Document;

const Doc = Styled.div`
  margin: 0 0 10px !important;
  &:last-of-type {
    margin: 0 !important;
  }
`;
const ContentDoc = Styled.div`
  box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
  position: relative;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
  margin: 0 0 10px !important;
  padding: 1em 1em;
  border-radius: .28571429rem;
  border: 1px solid rgba(34,36,38,.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  user-select: none;
  &:last-of-type {
    margin: 0 !important;
  }
  &:hover {
    background: #eee;
  }
`;
const MainInfo = Styled.div`
  display: flex;
  max-width: calc(100% - 120px);
  & > svg {
    width: 42px;
    min-width: 42px;
    max-width: 42px;
    height: 42px;
    min-height: 42px;
    max-height: 42px;
    padding: 2px;
    color: #636363;
  }
  & > .info {
    display: flex;
    flex-flow: column;
    margin-left: 16px;
    overflow: hidden;
    width: calc(100% - 58px);
    & > p {
      margin: 0;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    & > .name {
      font-weight: 500;
      padding: 2px 0;
    }
    & > .description {
      font-size: 12px;
    }
  }
`;
const SubInfo = Styled.div`
  font-size: 12px;
`;