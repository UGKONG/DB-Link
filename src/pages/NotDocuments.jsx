import React from 'react';
import Styled from 'styled-components';

const NotDocuments = () => {
  return (
    <Container className="ui placeholder segment">
      <div className="ui icon header">
        <i aria-hidden="true" className="pdf file outline icon" />
        문서가 없습니다.
      </div>
      <button className="ui primary button">새로 만들기</button>
    </Container>
  )
}

export default NotDocuments;

const Container = Styled.div`
  margin: 0;
  padding: 100px 0;
`;