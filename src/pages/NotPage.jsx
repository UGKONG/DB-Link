import React, { useMemo } from 'react';
import Styled from 'styled-components';

const NotPage = () => {
  const pageMemo = useMemo(() => {
    return (
      <Page>
        <p>404</p>
        <p>Not Found!!</p>
      </Page>
    );
  }, []);
  return pageMemo;
}

export default NotPage;

const Page = Styled.div`
  padding: 14px;
  width: 100%;
  height: calc(100% - 42px);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  & > p {
    margin: 0;
    font-weight: 700;
  }
`;