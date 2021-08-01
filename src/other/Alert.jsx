import React from 'react';
import Styled from 'styled-components';

const Alert = ({color, text}) => {
  return (
    <Container>
      <div className={`ui segment ${color}`}>
        {text}
      </div>
    </Container>
  )
}

export default Alert;

const Container = Styled.div`
  position: fixed;
  min-width: 200px;
  top: 20px;
  right: 20px;
  color: #555;
  z-index: 999999999999999999999;
`;