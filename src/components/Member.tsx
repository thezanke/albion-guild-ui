import React from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';

import { SpecialText } from './SpecialText';
import Stat from './Stat';

const StyledMember = styled.div`
  display: inline-block;
  background: ${theme.B400};
  border: 1px solid ${theme.B600};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

  .Member__name {
    background: ${theme.B600};
    padding: 10px 15px;
    text-align: center;
    font-size: 1.2em;
  }

  .Member__stats {
    padding: 10px;
  }

  .Member__stat {
    margin: 0 0 10px;

    &:last-child {
      margin: 0;
    }
  }
`;

const formatter = new Intl.NumberFormat();

const Member = ({ data, ...props }: any) => {
  return (
    <StyledMember {...props}>
      <div className="Member">
        <div className="Member__name">
          <SpecialText text={data.name} />
        </div>
        <div className="Member__stats">
          <Stat className="Member__stat" label="Kill Fame" value={formatter.format(data.killFame)}></Stat>
          <Stat className="Member__stat" label="Death Fame" value={formatter.format(data.deathFame)}></Stat>
          <Stat className="Member__stat" label="Fame Ratio" value={formatter.format(data.fameRatio)}></Stat>
        </div>
      </div>
    </StyledMember>
  );
};

export default Member;
