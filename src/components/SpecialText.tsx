import React from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';

export const StyledSpecialText = styled.div`
  line-height: 1;

  .SpecialText__word {
    display: inline-flex;
    align-items: center;
  }

  .SpecialText__spacer {
    display: inline-flex;
    width: 20px;
  }

  .SpecialText__highlight {
    display: inline-flex;
    justify-content: center;
    margin-right: 5px;
    padding: 5px 3px;
    border: 2px solid #fff;
    font-family: 'Pirata One';
    font-size: 125%;
    min-width: 20px;
    line-height: 1;
    background: ${theme.A500};
  }
`;

export const SpecialText = ({ text = 'None', ...props }) => {
  return (
    <StyledSpecialText {...props}>
      {text.split(' ').map((word, i) => {
        const [first, ...rest] = word.split('');
        return (
          <React.Fragment key={i}>
            {i > 0 && <div className="SpecialText__spacer"></div>}
            <div className="SpecialText__word" key={i}>
              <div className="SpecialText__highlight">{first}</div>
              <div className="SpecialText__rest">{rest.join('')}</div>
            </div>
          </React.Fragment>
        );
      })}
    </StyledSpecialText>
  );
};
