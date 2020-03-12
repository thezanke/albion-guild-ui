import React, { Fragment } from 'react';
import styled from 'styled-components';

export const SpecialTextStyle = styled.div`
  .highlight {
    vertical-align: middle;
    font-family: 'Koch Fraktur';
    font-size: 1.5em;
  }
`;

export const SpecialText = ({ text = 'Unnamed', ...props }) => {
  return (
    <SpecialTextStyle {...props}>
      {text.split(' ').map((word, i) => {
        const [first, ...rest] = word.split('');
        return (
          <Fragment key={i}>
            {i > 0 && ' '}
            <span className="highlight">{first}</span>
            {rest.join('')}
          </Fragment>
        );
      })}
    </SpecialTextStyle>
  );
};
