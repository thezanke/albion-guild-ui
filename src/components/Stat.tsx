import React from 'react';
import styled from 'styled-components';

// import theme from '../styles/theme';

const StyledStat = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  .Stat__label {
    font-weight: 700;
    margin: 0 0 5px;
  }

  .Stat__number {
  }
`;

const Stat = ({ label, value, ...rest }: any) => {
  return (
    <StyledStat {...rest}>
      <div className="Stat__label">{label}</div>
      <div className="Stat__number">{value}</div>
    </StyledStat>
  );
};

export default Stat;
